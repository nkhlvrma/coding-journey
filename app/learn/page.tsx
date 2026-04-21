"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import LessonCard from "@/components/LessonCard";
import CodePlayground from "@/components/CodePlayground";
import QuizSection from "@/components/QuizSection";
import { Progress } from "@/components/ui/progress";
import {
  getProfile, getCompletedLessons, markLessonComplete, markLessonIncomplete, updateStreak,
} from "@/lib/supabase/queries";
import { phases, allLessonIds, motivationalQuotes } from "@/lib/data";
import type { Profile } from "@/lib/supabase/queries";
import { cn } from "@/lib/utils";
import { CheckCircle2, Circle, ChevronDown, ChevronUp, ArrowRight, Flame } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Phase celebration modal
function PhaseCelebration({ phase, onClose }: { phase: { icon: string; title: string } | null; onClose: () => void }) {
  return (
    <AnimatePresence>
      {phase && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.8, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="bg-white rounded-3xl border-2 border-rose-200 p-8 max-w-sm mx-4 text-center shadow-2xl"
          >
            <motion.div
              className="text-6xl mb-3"
              animate={{ rotate: [0, -10, 10, -10, 10, 0], scale: [1, 1.2, 1.2, 1.2, 1.2, 1] }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {phase.icon}
            </motion.div>
            <h2 className="font-serif text-2xl text-rose-500 mb-1">Phase Complete!</h2>
            <p className="text-soft-rose text-sm mb-2 font-semibold">{phase.title}</p>
            <p className="text-soft-rose text-sm mb-6">
              You finished this entire phase — that's incredible! Keep going 🌸
            </p>
            <button
              onClick={onClose}
              className="bg-rose-500 hover:bg-rose-600 active:scale-95 text-white rounded-full px-6 py-2.5 text-sm font-bold transition-all"
            >
              Keep learning ✨
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function LearnPage() {
  const router = useRouter();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  const [streak, setStreak] = useState(0);
  const [quoteIdx, setQuoteIdx] = useState(0);
  const [activePhase, setActivePhase] = useState("phase-1");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [celebratingPhase, setCelebratingPhase] = useState<{ icon: string; title: string } | null>(null);
  const phaseRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    Promise.all([getProfile(), getCompletedLessons(), updateStreak()]).then(([p, cl, s]) => {
      if (!p) { router.replace("/login"); return; }
      setProfile(p);
      setCompletedLessons(cl);
      setStreak(s);
    });
  }, [router]);

  // Track which phase is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActivePhase(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    Object.values(phaseRefs.current).forEach((el) => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, [profile]);

  const handleToggle = useCallback(async (id: string) => {
    const isCompleted = completedLessons.includes(id);

    // Optimistic update
    const next = isCompleted
      ? completedLessons.filter((l) => l !== id)
      : [...completedLessons, id];
    setCompletedLessons(next);

    if (isCompleted) {
      await markLessonIncomplete(id);
    } else {
      await markLessonComplete(id);
      // Check if this completed a full phase
      const justCompleted = phases.find((phase) =>
        phase.lessons.some((l) => l.id === id) &&
        phase.lessons.every((l) => l.id === id || completedLessons.includes(l.id))
      );
      if (justCompleted) {
        // Fire confetti
        import("canvas-confetti").then(({ default: confetti }) => {
          confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 }, colors: ["#f47aaa", "#e8638a", "#c97b9b", "#fad4e5", "#a78bfa"] });
          setTimeout(() => confetti({ particleCount: 60, spread: 100, origin: { y: 0.4 } }), 300);
        });
        setCelebratingPhase({ icon: justCompleted.icon, title: justCompleted.title });
      }
    }
  }, [completedLessons]);

  const scrollToPhase = (phaseId: string) => {
    phaseRefs.current[phaseId]?.scrollIntoView({ behavior: "smooth", block: "start" });
    setSidebarOpen(false);
  };

  const progressPct = Math.round((completedLessons.length / allLessonIds.length) * 100);

  // First incomplete lesson for "Continue learning" button
  const nextLesson = allLessonIds.find((id) => !completedLessons.includes(id));
  const nextLessonMeta = nextLesson
    ? phases.flatMap((p) => p.lessons).find((l) => l.id === nextLesson)
    : null;

  if (!profile) return null;

  return (
    <div className="min-h-screen bg-cream">
      <Navigation />

      <PhaseCelebration phase={celebratingPhase} onClose={() => setCelebratingPhase(null)} />

      {/* Hero */}
      <div className="bg-gradient-to-br from-rose-100 via-pink-50 to-purple-50 text-center px-4 py-10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 text-2xl tracking-widest pointer-events-none select-none overflow-hidden leading-10">
          🌸 ✨ 💻 🌷 🐍 💡 🌸 ✨ 💻 🌷 🐍 💡 🌸 ✨ 💻 🌷 🐍 💡
        </div>
        <motion.h1
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-serif text-3xl sm:text-4xl text-rose-500 mb-2 relative"
        >
          Your Coding Journey 💻🌸
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-soft-rose text-base max-w-lg mx-auto leading-relaxed relative"
        >
          Hey {profile.name}! From <em>"I don't know computers"</em> to building cool AI things — one tiny step at a time.
        </motion.p>

        {/* Streak + Continue row */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="flex flex-wrap items-center justify-center gap-3 mt-5 relative"
        >
          {streak > 0 && (
            <div className="flex items-center gap-1.5 bg-white/80 border border-orange-200 text-orange-500 text-sm px-4 py-1.5 rounded-full font-bold shadow-sm">
              <Flame className="w-4 h-4 animate-streak-fire" />
              {streak} day streak!
            </div>
          )}
          {nextLessonMeta && (
            <Link
              href={`/learn/${nextLessonMeta.id}`}
              className="group flex items-center gap-2 bg-rose-500 hover:bg-rose-600 active:scale-95 text-white text-sm px-5 py-2 rounded-full font-bold shadow-sm transition-all duration-200"
            >
              {completedLessons.length === 0 ? "Start learning" : "Continue learning"}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          )}
          {!nextLessonMeta && (
            <span className="bg-green-100 border border-green-200 text-green-700 text-sm px-4 py-1.5 rounded-full font-bold">
              🎉 All lessons complete!
            </span>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="flex flex-wrap justify-center gap-2 mt-4 relative"
        >
          {["🐣 Absolute Beginner", "🐍 Python", "🤖 AI / ML", "💖 You can do it!"].map((b, i) => (
            <motion.span
              key={b}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.35 + i * 0.07 }}
              className="bg-white/80 border border-rose-200 text-rose-500 text-xs px-3 py-1 rounded-full font-semibold"
            >
              {b}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* Sticky progress */}
      <div className="sticky top-14 z-40 bg-white/90 backdrop-blur-sm border-b border-rose-200 px-3 sm:px-4 py-2">
        <div className="max-w-5xl mx-auto flex items-center gap-2 sm:gap-3">
          <span className="text-xs text-soft-rose whitespace-nowrap font-semibold hidden sm:inline">🌸 Progress</span>
          <Progress value={progressPct} className="flex-1" />
          <span className="text-xs font-bold text-rose-500 whitespace-nowrap">{progressPct}%</span>
          <div className="flex items-center gap-1 text-xs font-bold text-soft-rose bg-rose-50 border border-rose-100 px-2.5 py-1 rounded-full whitespace-nowrap">
            {completedLessons.length}/{allLessonIds.length}
          </div>
        </div>
      </div>

      {/* Mobile phase selector */}
      <div className="lg:hidden border-b border-rose-200 bg-white">
        <button
          onClick={() => setSidebarOpen((v) => !v)}
          className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-rose-500"
        >
          <span className="flex items-center gap-2">
            {phases.find((p) => p.id === activePhase)?.icon}
            {phases.find((p) => p.id === activePhase)?.title.split("—")[1]?.trim() ?? "Phases"}
          </span>
          {sidebarOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
        {sidebarOpen && (
          <div className="border-t border-rose-100 divide-y divide-rose-100">
            {phases.map((phase) => {
              const done = phase.lessons.filter((l) => completedLessons.includes(l.id)).length;
              const pct = Math.round((done / phase.lessons.length) * 100);
              return (
                <button
                  key={phase.id}
                  onClick={() => scrollToPhase(phase.id)}
                  className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-rose-50 transition-colors"
                >
                  <span className="text-xl">{phase.icon}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-text-rose truncate">
                      {phase.title.split("—")[1]?.trim()}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <Progress value={pct} className="h-1.5 flex-1" />
                      <span className="text-xs text-soft-rose">{done}/{phase.lessons.length}</span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Main layout: sidebar + content */}
      <div className="max-w-5xl mx-auto px-3 sm:px-4 py-6 sm:py-8 flex gap-4 sm:gap-8">

        {/* ── Sidebar ── */}
        <aside className="hidden lg:block w-56 flex-shrink-0">
          <div className="sticky top-28 space-y-1">
            <p className="text-xs font-bold text-soft-rose uppercase tracking-wider px-3 mb-3">Phases</p>

            {phases.map((phase, phaseIdx) => {
              const done = phase.lessons.filter((l) => completedLessons.includes(l.id)).length;
              const pct = Math.round((done / phase.lessons.length) * 100);
              const isActive = activePhase === phase.id;

              return (
                <div key={phase.id} className="space-y-0.5">
                  <button
                    onClick={() => scrollToPhase(phase.id)}
                    className={cn(
                      "w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-left transition-all",
                      isActive ? "bg-rose-100 text-rose-600" : "text-soft-rose hover:bg-rose-50 hover:text-rose-500"
                    )}
                  >
                    <span className="text-lg flex-shrink-0">{phase.icon}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold leading-tight truncate">Phase {phaseIdx + 1}</p>
                      <p className="text-xs truncate opacity-70 leading-tight mt-0.5">
                        {phase.title.split("—")[1]?.trim()}
                      </p>
                    </div>
                    {done === phase.lessons.length && (
                      <CheckCircle2 className="w-3.5 h-3.5 text-green-400 flex-shrink-0" />
                    )}
                  </button>

                  <div className="px-3 pb-1">
                    <div className="flex items-center gap-2">
                      <Progress value={pct} className="h-1.5 flex-1" />
                      <span className="text-xs text-soft-rose font-semibold flex-shrink-0">{done}/{phase.lessons.length}</span>
                    </div>
                  </div>

                  <div className="pl-3 pr-1 space-y-0.5">
                    {phase.lessons.map((lesson) => {
                      const isDone = completedLessons.includes(lesson.id);
                      return (
                        <Link
                          key={lesson.id}
                          href={`/learn/${lesson.id}`}
                          className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-rose-50 transition-colors group"
                        >
                          {isDone
                            ? <CheckCircle2 className="w-3.5 h-3.5 text-green-400 flex-shrink-0" />
                            : <Circle className="w-3.5 h-3.5 text-rose-200 flex-shrink-0 group-hover:text-rose-300" />}
                          <span className={cn(
                            "text-xs leading-tight line-clamp-2",
                            isDone ? "text-green-600" : "text-soft-rose group-hover:text-text-rose"
                          )}>
                            {lesson.title}
                          </span>
                        </Link>
                      );
                    })}
                  </div>

                  {phaseIdx < phases.length - 1 && (
                    <div className="h-px bg-rose-100 mx-3 my-2" />
                  )}
                </div>
              );
            })}

            <div className="mt-4 mx-3 p-3 bg-rose-50 rounded-xl border border-rose-100">
              <div className="text-xs font-bold text-rose-500 mb-1">Overall</div>
              <Progress value={progressPct} className="h-2" />
              <p className="text-xs text-soft-rose mt-1.5">{completedLessons.length} of {allLessonIds.length} complete</p>
            </div>
          </div>
        </aside>

        {/* ── Main content ── */}
        <div className="flex-1 min-w-0 space-y-10">
          {phases.map((phase, phaseIdx) => (
            <section
              key={phase.id}
              id={phase.id}
              ref={(el) => { phaseRefs.current[phase.id] = el; }}
              className="scroll-mt-28"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 rounded-full ${phase.iconBg} flex items-center justify-center text-2xl flex-shrink-0`}>
                  {phase.icon}
                </div>
                <div className="flex-1">
                  <h2 className="font-serif text-xl text-rose-500 leading-tight">{phase.title}</h2>
                  <p className="text-xs text-soft-rose mt-0.5">{phase.subtitle}</p>
                </div>
                <div className="text-xs font-semibold text-soft-rose whitespace-nowrap hidden sm:block">
                  {phase.lessons.filter((l) => completedLessons.includes(l.id)).length}/{phase.lessons.length}
                </div>
              </div>

              <div className="flex flex-col gap-3">
                {phase.lessons.map((lesson, lessonIdx) => (
                  <LessonCard
                    key={lesson.id}
                    lesson={lesson}
                    completed={completedLessons.includes(lesson.id)}
                    onToggle={handleToggle}
                    index={lessonIdx}
                  />
                ))}
              </div>

              {phaseIdx < phases.length - 1 && (
                <div className="flex items-center gap-3 mt-8 text-rose-300 text-sm">
                  <div className="flex-1 h-px bg-rose-200" />
                  <span>{phaseIdx === 0 ? "🌸 Great start! Now the fun begins 🌸" : "✨ Python? Ticked. Time for the cool stuff ✨"}</span>
                  <div className="flex-1 h-px bg-rose-200" />
                </div>
              )}
            </section>
          ))}

          <section><CodePlayground /></section>
          <section><QuizSection /></section>

          {/* Motivation */}
          <section className="bg-gradient-to-br from-rose-100 via-pink-50 to-purple-50 rounded-2xl p-6 text-center border border-rose-200">
            <h3 className="font-serif text-xl text-rose-500 mb-2 italic">{motivationalQuotes[quoteIdx]}</h3>
            <p className="text-soft-rose text-sm leading-relaxed mb-4">
              You don't have to learn everything at once. Even 15 minutes a day — consistently — will take you places.
            </p>
            <button
              onClick={() => setQuoteIdx((i) => (i + 1) % motivationalQuotes.length)}
              className="bg-white border-2 border-rose-200 text-rose-500 rounded-full px-5 py-2 text-sm font-semibold hover:bg-rose-50 transition-colors"
            >
              Another quote 🌸
            </button>
          </section>

          {/* Daily habit */}
          <section className="bg-white rounded-2xl border-2 border-rose-200 p-6 mb-4">
            <h3 className="font-serif text-lg text-rose-500 mb-4">📅 Your daily habit plan</h3>
            <div className="space-y-3">
              {[
                { icon: "☀️", time: "Morning (15 min)", desc: "Read one lesson — click any card to open it" },
                { icon: "🌙", time: "Evening (20 min)", desc: "Open the lesson and run the exercises in the code editor" },
                { icon: "💕", time: "Weekends", desc: "Work on a small project using what you've learned" },
              ].map((item) => (
                <div key={item.time} className="flex gap-3 items-start text-sm text-soft-rose">
                  <span className="text-xl flex-shrink-0">{item.icon}</span>
                  <span><strong className="text-text-rose">{item.time}</strong> — {item.desc}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
