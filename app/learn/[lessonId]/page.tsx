"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import CodeEditor from "@/components/CodeEditor";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  getCompletedLessons, markLessonComplete, markLessonIncomplete, getSnippet,
  getNote, saveNote,
} from "@/lib/supabase/queries";
import { phases, allLessonIds } from "@/lib/data";
import { lessonContent, type ContentBlock } from "@/lib/lesson-content";
import {
  ChevronLeft, ChevronRight, CheckCircle2, Circle, Lightbulb,
  AlertTriangle, Code2, BookOpen, ListChecks, NotebookPen,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function LessonPage() {
  const params = useParams();
  const router = useRouter();
  const lessonId = params.lessonId as string;

  // Find lesson metadata from phases
  const phase = phases.find((p) => p.lessons.some((l) => l.id === lessonId));
  const lesson = phase?.lessons.find((l) => l.id === lessonId);
  const content = lessonContent[lessonId];

  const [completed, setCompleted] = useState(false);
  const [savedCode, setSavedCode] = useState<string | null>(null);
  const [toggling, setToggling] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [hintIndex, setHintIndex] = useState(0);
  const [overallProgress, setOverallProgress] = useState(0);
  const [noteText, setNoteText] = useState("");
  const [noteSaved, setNoteSaved] = useState(false);
  const noteTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Prev / Next lesson navigation
  const allIds = allLessonIds;
  const currentIdx = allIds.indexOf(lessonId);
  const prevId = currentIdx > 0 ? allIds[currentIdx - 1] : null;
  const nextId = currentIdx < allIds.length - 1 ? allIds[currentIdx + 1] : null;

  // Which lesson number within its phase
  const phasePosition = phase ? {
    current: phase.lessons.findIndex((l) => l.id === lessonId) + 1,
    total: phase.lessons.length,
  } : null;

  useEffect(() => {
    if (!lesson) { router.replace("/learn"); return; }

    Promise.all([
      getCompletedLessons(),
      getSnippet(lessonId),
      getNote(lessonId),
    ]).then(([completed, snippet, note]) => {
      setCompleted(completed.includes(lessonId));
      setSavedCode(snippet);
      setNoteText(note ?? "");
      setOverallProgress(Math.round((completed.length / allLessonIds.length) * 100));
    });
  }, [lessonId, lesson, router]);

  const handleNoteChange = useCallback((val: string) => {
    setNoteText(val);
    setNoteSaved(false);
    if (noteTimerRef.current) clearTimeout(noteTimerRef.current);
    noteTimerRef.current = setTimeout(async () => {
      await saveNote(lessonId, val);
      setNoteSaved(true);
    }, 800);
  }, [lessonId]);

  const handleToggleComplete = useCallback(async () => {
    if (toggling) return;
    setToggling(true);
    if (completed) {
      await markLessonIncomplete(lessonId);
      setCompleted(false);
    } else {
      await markLessonComplete(lessonId);
      setCompleted(true);
    }
    setToggling(false);
  }, [completed, lessonId, toggling]);

  if (!lesson || !content) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-3">🌸</div>
          <p className="text-soft-rose">Lesson not found.</p>
          <Link href="/learn"><Button className="mt-4">Back to lessons</Button></Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream">
      <Navigation />

      {/* Lesson header */}
      <div className={cn(
        "px-4 py-5 sm:py-6 border-b border-rose-200",
        completed ? "bg-gradient-to-r from-green-50 to-emerald-50" : "bg-gradient-to-r from-rose-50 to-pink-50"
      )}>
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-1.5 sm:gap-2 text-xs text-soft-rose mb-3 flex-wrap">
            <Link href="/learn" className="hover:text-rose-500 transition-colors flex items-center gap-1 min-h-[32px]">
              <ChevronLeft className="w-3 h-3" /> All lessons
            </Link>
            <span>·</span>
            <span className="truncate max-w-[120px] sm:max-w-none">{phase?.title.split("—")[0].trim()}</span>
            {phasePosition && (
              <><span>·</span><span className="whitespace-nowrap">Lesson {phasePosition.current}/{phasePosition.total}</span></>
            )}
          </div>

          {/* Title row — icon + title on one line, button below on mobile */}
          <div className="flex items-start gap-3 sm:gap-4">
            <div className={cn(
              "w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center text-xl sm:text-2xl flex-shrink-0",
              phase?.iconBg ?? "bg-rose-100"
            )}>
              {phase?.icon}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2">
                <h1 className="font-serif text-xl sm:text-2xl text-rose-500 leading-tight mb-1 flex-1 min-w-0">
                  {lesson.title}
                </h1>
                {/* Complete button — icon-only on mobile, full on sm+ */}
                <Button
                  variant={completed ? "secondary" : "default"}
                  size="sm"
                  onClick={handleToggleComplete}
                  disabled={toggling}
                  className={cn(
                    "flex-shrink-0 gap-1.5 min-h-[36px] px-2.5 sm:px-3",
                    completed && "bg-green-100 text-green-700 hover:bg-green-200 border-green-300"
                  )}
                >
                  {completed ? (
                    <><CheckCircle2 className="w-4 h-4" /><span className="hidden sm:inline">Done!</span></>
                  ) : (
                    <><Circle className="w-4 h-4" /><span className="hidden sm:inline">Mark complete</span></>
                  )}
                </Button>
              </div>
              <div className="flex flex-wrap items-center gap-1.5">
                {lesson.tags.map((tag) => (
                  <Badge key={tag.label} variant={tag.color}>{tag.label}</Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Overall progress */}
          <div className="flex items-center gap-2 mt-4">
            <span className="text-xs text-soft-rose whitespace-nowrap">Overall</span>
            <Progress value={overallProgress} className="flex-1 h-1.5" />
            <span className="text-xs font-bold text-rose-500 whitespace-nowrap">{overallProgress}%</span>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-8 space-y-8">

        {/* Learning objectives */}
        <div className="bg-white rounded-2xl border border-rose-100 p-5">
          <h2 className="flex items-center gap-2 font-serif text-lg text-rose-600 mb-3">
            <ListChecks className="w-5 h-5" /> What you'll learn
          </h2>
          <ul className="space-y-2">
            {content.objectives.map((obj, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-soft-rose">
                <span className="text-rose-400 mt-0.5 flex-shrink-0">✦</span>
                {obj}
              </li>
            ))}
          </ul>
        </div>

        {/* Content sections */}
        {content.sections.map((section, si) => (
          <div key={si} className="space-y-4">
            <h2 className="flex items-center gap-2 font-serif text-xl text-rose-600">
              <BookOpen className="w-5 h-5 flex-shrink-0" /> {section.heading}
            </h2>

            {section.blocks.map((block, bi) => (
              <ContentBlockRenderer key={bi} block={block} />
            ))}
          </div>
        ))}

        {/* Exercise */}
        <div className="space-y-4">
          <h2 className="flex items-center gap-2 font-serif text-xl text-rose-600">
            <Code2 className="w-5 h-5 flex-shrink-0" />
            {content.exercise.hasCodeEditor ? "🧪 Try it yourself" : "✏️ Exercise"}
          </h2>

          <div className="bg-rose-50 rounded-xl border border-rose-200 p-4">
            <p className="text-sm text-text-rose leading-relaxed whitespace-pre-wrap">
              {content.exercise.prompt}
            </p>
          </div>

          {content.exercise.hasCodeEditor && (
            <CodeEditor
              starterCode={content.exercise.starterCode}
              lessonId={lessonId}
              savedCode={savedCode}
            />
          )}

          {/* Hints */}
          {content.exercise.hints.length > 0 && (
            <div>
              <button
                onClick={() => { setShowHint(true); setHintIndex((i) => Math.min(i + 1, content.exercise.hints.length - 1)); }}
                className="text-sm text-rose-400 hover:text-rose-600 font-semibold flex items-center gap-1.5"
              >
                <Lightbulb className="w-4 h-4" />
                {showHint
                  ? hintIndex < content.exercise.hints.length - 1 ? "Another hint →" : "No more hints"
                  : "Need a hint?"}
              </button>

              {showHint && (
                <div className="mt-2 bg-yellow-50 border border-yellow-200 rounded-xl p-3 text-sm text-yellow-800 animate-fade-in">
                  💡 {content.exercise.hints[hintIndex]}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Key takeaways */}
        <div className="bg-white rounded-2xl border border-rose-100 p-5">
          <h2 className="font-serif text-lg text-rose-600 mb-3">Key takeaways</h2>
          <ul className="space-y-2">
            {content.keyTakeaways.map((point, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-soft-rose">
                <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                {point}
              </li>
            ))}
          </ul>
        </div>

        {/* My notes */}
        <div className="bg-white rounded-2xl border-2 border-amber-200 p-5">
          <div className="flex items-center justify-between mb-3">
            <h2 className="flex items-center gap-2 font-serif text-lg text-amber-600">
              <NotebookPen className="w-5 h-5" /> My notes
            </h2>
            {noteSaved && (
              <span className="text-xs text-green-500 font-semibold animate-fade-in">Saved ✓</span>
            )}
          </div>
          <textarea
            value={noteText}
            onChange={(e) => handleNoteChange(e.target.value)}
            placeholder="Jot down anything you want to remember from this lesson…"
            rows={4}
            className="w-full resize-none rounded-xl border border-amber-200 bg-amber-50/50 px-3.5 py-2.5 text-sm text-text-rose placeholder:text-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-transparent transition-all leading-relaxed"
          />
        </div>

        {/* Mark complete */}
        {!completed && (
          <div className="text-center py-2">
            <Button size="lg" onClick={handleToggleComplete} disabled={toggling} className="gap-2">
              <CheckCircle2 className="w-5 h-5" />
              {toggling ? "Saving…" : "Mark lesson complete! 🎉"}
            </Button>
          </div>
        )}

        {/* Prev / Next */}
        <div className="flex items-center justify-between gap-3 pt-2 border-t border-rose-200">
          {prevId ? (
            <Link href={`/learn/${prevId}`}>
              <Button variant="outline" size="sm" className="gap-1.5 sm:gap-2 text-xs sm:text-sm px-3 sm:px-4">
                <ChevronLeft className="w-4 h-4" />
                <span className="hidden xs:inline">Previous</span>
              </Button>
            </Link>
          ) : (
            <div />
          )}

          {nextId ? (
            <Link href={`/learn/${nextId}`}>
              <Button size="sm" className="gap-1.5 sm:gap-2 text-xs sm:text-sm px-3 sm:px-4">
                <span className="hidden xs:inline">Next</span>
                <ChevronRight className="w-4 h-4" />
              </Button>
            </Link>
          ) : (
            <Link href="/learn">
              <Button size="sm" className="gap-1.5 sm:gap-2 text-xs sm:text-sm px-3 sm:px-4">
                <span>All lessons 🌸</span>
              </Button>
            </Link>
          )}
        </div>

      </div>
    </div>
  );
}

// ── Content block renderer ──────────────────────────────────

function ContentBlockRenderer({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "text":
      return (
        <p
          className="text-soft-rose text-sm leading-relaxed"
          dangerouslySetInnerHTML={{ __html: markdownInline(block.content) }}
        />
      );

    case "code":
      return (
        <div className="rounded-xl bg-[#1e1e2e] p-4 font-mono text-sm leading-7 overflow-x-auto">
          <SimpleHighlight code={block.code} />
        </div>
      );

    case "tip":
      return (
        <div className="flex gap-3 bg-green-50 border border-green-200 rounded-xl p-4">
          <Lightbulb className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
          <p
            className="text-sm text-green-800 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: markdownInline(block.content) }}
          />
        </div>
      );

    case "warning":
      return (
        <div className="flex gap-3 bg-amber-50 border border-amber-200 rounded-xl p-4">
          <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
          <p
            className="text-sm text-amber-800 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: markdownInline(block.content) }}
          />
        </div>
      );

    case "steps":
      return (
        <ol className="space-y-2.5">
          {block.steps.map((step, i) => (
            <li key={i} className="flex gap-3 text-sm text-soft-rose">
              <span className="w-5 h-5 rounded-full bg-rose-100 text-rose-500 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                {i + 1}
              </span>
              <span
                className="leading-relaxed"
                dangerouslySetInnerHTML={{ __html: markdownInline(step) }}
              />
            </li>
          ))}
        </ol>
      );
  }
}

// Minimal inline markdown: **bold** and `code`
function markdownInline(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, "<strong class='text-text-rose font-bold'>$1</strong>")
    .replace(/`(.+?)`/g, "<code class='bg-rose-100 text-rose-600 px-1.5 py-0.5 rounded text-xs font-mono'>$1</code>");
}

// Simple syntax highlighter for static code blocks
function SimpleHighlight({ code }: { code: string }) {
  const lines = code.split("\n");
  return (
    <pre className="text-[#cdd6f4] whitespace-pre-wrap">
      {lines.map((line, i) => {
        if (line.trimStart().startsWith("#")) {
          return <div key={i}><span className="text-[#585b70] italic">{line}</span></div>;
        }
        const highlighted = line
          .replace(
            /\b(def|for|in|if|elif|else|return|True|False|None|import|from|class|and|or|not|while|with|as|try|except|lambda|yield|global|nonlocal|pass|break|continue|raise|assert|del)\b/g,
            '<span class="text-[#cba6f7]">$1</span>'
          )
          .replace(
            /\b(print|range|len|input|int|str|float|list|dict|set|tuple|type|enumerate|zip|map|filter|sorted|sum|max|min|abs|round|open|append|extend|insert|remove|pop|get|items|keys|values|split|join|strip|format|replace)\b(?=\s*\()/g,
            '<span class="text-[#89b4fa]">$1</span>'
          )
          .replace(/(["'])(?:(?=(\\?))\2.)*?\1/g, '<span class="text-[#a6e3a1]">$&</span>')
          .replace(/\b(\d+\.?\d*)\b/g, '<span class="text-[#fab387]">$1</span>');
        return (
          <div key={i} dangerouslySetInnerHTML={{ __html: highlighted || " " }} />
        );
      })}
    </pre>
  );
}
