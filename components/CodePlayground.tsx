"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { codeTabs } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function CodePlayground() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = async (id: string, code: string) => {
    await navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1500);
  };

  return (
    <div className="rounded-2xl border-2 border-rose-200 overflow-hidden bg-white shadow-sm">
      <div className="bg-gradient-to-r from-rose-300 to-rose-500 px-5 py-3 flex items-center gap-2">
        <span className="text-lg">🧪</span>
        <span className="text-white font-bold text-sm">Mini Code Examples — Read & Understand!</span>
      </div>

      <div className="p-4">
        <Tabs defaultValue="hello">
          <TabsList className="flex-wrap h-auto gap-1">
            {codeTabs.map(tab => (
              <TabsTrigger key={tab.id} value={tab.id}>{tab.label}</TabsTrigger>
            ))}
          </TabsList>

          {codeTabs.map(tab => (
            <TabsContent key={tab.id} value={tab.id} className="mt-4">
              {/* Code block */}
              <div className="relative rounded-xl bg-[#1e1e2e] p-3 sm:p-4 mb-3 font-mono text-xs sm:text-sm leading-6 sm:leading-7 overflow-x-auto">
                <button
                  onClick={() => handleCopy(tab.id, tab.code)}
                  className={cn(
                    "absolute top-2 right-2 flex items-center gap-1 text-xs px-2.5 py-1.5 rounded-md transition-all min-h-[32px]",
                    copiedId === tab.id
                      ? "bg-green-500/20 text-green-400"
                      : "bg-white/10 text-[#cdd6f4] hover:bg-white/20 active:bg-white/30"
                  )}
                >
                  {copiedId === tab.id ? (
                    <><Check className="w-3 h-3" /> Copied!</>
                  ) : (
                    <><Copy className="w-3 h-3" /> Copy</>
                  )}
                </button>
                <CodeHighlight code={tab.code} />
              </div>

              {/* Explanation */}
              <div
                className="bg-rose-50 rounded-xl p-4 text-sm text-soft-rose leading-relaxed"
                dangerouslySetInnerHTML={{ __html: tab.explanation }}
              />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}

function CodeHighlight({ code }: { code: string }) {
  const lines = code.split("\n");
  return (
    <pre className="text-[#cdd6f4] whitespace-pre-wrap">
      {lines.map((line, i) => (
        <div key={i}><HighlightLine line={line} /></div>
      ))}
    </pre>
  );
}

function HighlightLine({ line }: { line: string }) {
  if (line.startsWith("#")) {
    return <span className="text-[#585b70] italic">{line}</span>;
  }

  const parts: React.ReactNode[] = [];
  let remaining = line;
  let key = 0;

  const patterns: [RegExp, string][] = [
    [/\b(def|for|in|if|else|elif|return|True|False|None|import|from|class|and|or|not|while|with|as|try|except)\b/, "text-[#cba6f7]"],
    [/\b(print|range|len|input|int|str|float|list|dict|append|type)\b(?=\()/, "text-[#89b4fa]"],
    [/(["'])(?:(?=(\\?))\2.)*?\1/, "text-[#a6e3a1]"],
    [/\b\d+\b/, "text-[#fab387]"],
    [/^(# .*)$/, "text-[#94e2d5]"],
  ];

  while (remaining.length > 0) {
    let earliestMatch: RegExpMatchArray | null = null;
    let earliestPattern: string = "";
    let earliestIndex = Infinity;

    for (const [regex, className] of patterns) {
      const match = remaining.match(regex);
      if (match && match.index !== undefined && match.index < earliestIndex) {
        earliestMatch = match;
        earliestPattern = className;
        earliestIndex = match.index;
      }
    }

    if (!earliestMatch || earliestIndex === Infinity) {
      parts.push(<span key={key++}>{remaining}</span>);
      break;
    }

    if (earliestIndex > 0) {
      parts.push(<span key={key++}>{remaining.slice(0, earliestIndex)}</span>);
    }
    parts.push(
      <span key={key++} className={earliestPattern}>{earliestMatch[0]}</span>
    );
    remaining = remaining.slice(earliestIndex + earliestMatch[0].length);
  }

  return <>{parts}</>;
}
