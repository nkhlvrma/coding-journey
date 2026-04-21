"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { Play, RotateCcw, Save, Loader2, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";
import { saveSnippet } from "@/lib/supabase/queries";
import { python } from "@codemirror/lang-python";
import { oneDark } from "@codemirror/theme-one-dark";

const CodeMirror = dynamic(() => import("@uiw/react-codemirror"), { ssr: false });

declare global {
  interface Window {
    loadPyodide: (cfg: { indexURL: string }) => Promise<PyodideInterface>;
    pyodide: PyodideInterface | null;
  }
}

interface PyodideInterface {
  runPythonAsync: (code: string) => Promise<unknown>;
  runPython: (code: string) => unknown;
}

type RunResult = { output: string; error: string | null };

let pyodideLoadPromise: Promise<PyodideInterface> | null = null;

async function getPyodide(): Promise<PyodideInterface> {
  if (window.pyodide) return window.pyodide;
  if (pyodideLoadPromise) return pyodideLoadPromise;

  pyodideLoadPromise = new Promise<PyodideInterface>((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/pyodide/v0.26.4/full/pyodide.js";
    script.onload = async () => {
      try {
        const py = await window.loadPyodide({
          indexURL: "https://cdn.jsdelivr.net/pyodide/v0.26.4/full/",
        });
        window.pyodide = py;
        resolve(py);
      } catch (e) {
        reject(e);
      }
    };
    script.onerror = reject;
    document.head.appendChild(script);
  });

  return pyodideLoadPromise;
}

async function runPython(code: string): Promise<RunResult> {
  const py = await getPyodide();

  await py.runPythonAsync(`
import sys
from io import StringIO
sys.stdout = StringIO()
sys.stderr = StringIO()
`);

  try {
    await py.runPythonAsync(code);
    const output = py.runPython("sys.stdout.getvalue()") as string;
    const stderr = py.runPython("sys.stderr.getvalue()") as string;
    return { output: output + (stderr ? `\n⚠️ ${stderr}` : ""), error: null };
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    const stderr = (() => {
      try { return py.runPython("sys.stderr.getvalue()") as string; } catch { return ""; }
    })();
    return { output: stderr || "", error: msg };
  }
}

type Props = {
  starterCode: string;
  lessonId?: string;
  savedCode?: string | null;
  onSave?: () => void;
};

type PyodideState = "idle" | "loading" | "ready" | "error";

export default function CodeEditor({ starterCode, lessonId, savedCode, onSave }: Props) {
  const initialCode = savedCode ?? starterCode;
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState("");
  const [hasError, setHasError] = useState(false);
  const [running, setRunning] = useState(false);
  const [saving, setSaving] = useState(false);
  const [pyodideState, setPyodideState] = useState<PyodideState>("idle");
  const outputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setPyodideState("loading");
    getPyodide()
      .then(() => setPyodideState("ready"))
      .catch(() => setPyodideState("error"));
  }, []);

  const handleRun = useCallback(async () => {
    if (running || pyodideState !== "ready") return;
    setRunning(true);
    setOutput("Running…");
    setHasError(false);

    const result = await runPython(code);
    setOutput(result.error ? `❌ Error:\n${result.error}` : result.output || "(no output)");
    setHasError(!!result.error);
    setRunning(false);

    setTimeout(() => outputRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" }), 100);
  }, [code, running, pyodideState]);

  const handleReset = useCallback(() => {
    setCode(starterCode);
    setOutput("");
    setHasError(false);
  }, [starterCode]);

  const handleSave = useCallback(async () => {
    if (!lessonId || saving) return;
    setSaving(true);
    await saveSnippet(lessonId, code);
    setSaving(false);
    onSave?.();
  }, [lessonId, code, saving, onSave]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
        e.preventDefault();
        handleRun();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [handleRun]);

  // Pyodide status indicator — compact on mobile
  const statusBadge = {
    loading: { cls: "bg-yellow-900/40 text-yellow-300", label: "Loading…", icon: <Loader2 className="w-3 h-3 animate-spin flex-shrink-0" /> },
    ready:   { cls: "bg-green-900/40 text-green-300",  label: "Ready",     icon: <span className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0" /> },
    error:   { cls: "bg-red-900/40 text-red-300",      label: "Failed",    icon: <span className="w-2 h-2 rounded-full bg-red-400 flex-shrink-0" /> },
    idle:    { cls: "bg-gray-800 text-gray-400",        label: "Init…",     icon: <span className="w-2 h-2 rounded-full bg-gray-500 flex-shrink-0" /> },
  }[pyodideState];

  return (
    <div className="rounded-2xl border-2 border-rose-200 overflow-hidden bg-[#1e1e2e] shadow-lg">
      {/* Toolbar */}
      <div className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-[#181825] border-b border-white/10">
        <Terminal className="w-4 h-4 text-rose-300 flex-shrink-0" />
        <span className="text-white/70 text-xs font-mono font-semibold hidden sm:inline">Python 3</span>

        {/* Status badge */}
        <div className={cn("flex items-center gap-1.5 text-xs font-semibold px-2 py-1 rounded-full flex-shrink-0", statusBadge.cls)}>
          {statusBadge.icon}
          <span className="hidden sm:inline">{statusBadge.label}</span>
        </div>

        <div className="ml-auto flex items-center gap-1 sm:gap-1.5">
          <button
            onClick={handleReset}
            title="Reset code"
            className="text-white/50 hover:text-white/80 hover:bg-white/10 rounded-lg p-2 transition-colors min-h-[36px] min-w-[36px] flex items-center justify-center"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>

          {lessonId && (
            <button
              onClick={handleSave}
              disabled={saving}
              title="Save code"
              className="text-white/50 hover:text-white/80 hover:bg-white/10 rounded-lg px-2 py-2 transition-colors flex items-center gap-1 min-h-[36px] text-xs"
            >
              <Save className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{saving ? "Saving…" : "Save"}</span>
            </button>
          )}

          <button
            onClick={handleRun}
            disabled={running || pyodideState !== "ready"}
            className="bg-rose-500 hover:bg-rose-600 disabled:opacity-50 text-white rounded-lg px-3 py-2 text-xs gap-1.5 font-bold flex items-center transition-colors active:scale-95 min-h-[36px]"
          >
            {running
              ? <Loader2 className="w-3.5 h-3.5 animate-spin" />
              : <Play className="w-3.5 h-3.5 fill-white" />}
            <span>{running ? "Running…" : "Run"}</span>
            <span className="text-white/50 text-[10px] hidden md:inline">(⌘↵)</span>
          </button>
        </div>
      </div>

      {/* Editor */}
      <div className="min-h-[160px] sm:min-h-[200px]">
        <CodeMirror
          value={code}
          onChange={setCode}
          extensions={[python()]}
          theme={oneDark}
          basicSetup={{
            lineNumbers: true,
            highlightActiveLine: true,
            autocompletion: true,
            foldGutter: false,
            dropCursor: false,
            allowMultipleSelections: false,
            indentOnInput: true,
          }}
          style={{ fontSize: "13px" }}
        />
      </div>

      {/* Output */}
      {output && (
        <div
          ref={outputRef}
          className={cn(
            "border-t font-mono text-sm px-3 sm:px-4 py-3 whitespace-pre-wrap min-h-[56px] max-h-[180px] sm:max-h-[240px] overflow-y-auto",
            hasError
              ? "bg-red-950/50 border-red-800/50 text-red-300"
              : "bg-[#1a1a2e] border-white/10 text-[#a6e3a1]"
          )}
        >
          <div className="text-white/30 text-xs mb-1">Output:</div>
          {output}
        </div>
      )}
    </div>
  );
}
