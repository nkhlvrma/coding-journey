"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navigation from "@/components/Navigation";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  getProfile, getCompletedLessons, getQuizScores,
} from "@/lib/supabase/queries";
import { phases, allLessonIds } from "@/lib/data";
import { GOALS } from "@/lib/store";
import type { Profile } from "@/lib/supabase/queries";
import {
  Trophy, BookOpen, CheckCircle2, Calendar, Star, Flame,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type Achievement = { id: string; icon: string; title: string; desc: string; unlocked: boolean };
type QuizScore = { score: number; total: number; taken_at: string };

export default function ProfilePage() {
  const router = useRouter();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  const [quizScores, setQuizScores] = useState<QuizScore[]>([]);

  useEffect(() => {
    Promise.all([getProfile(), getCompletedLessons(), getQuizScores()]).then(
      ([p, cl, qs]) => {
        if (!p) { router.replace("/login"); return; }
        setProfile(p);
        setCompletedLessons(cl);
        setQuizScores(qs as QuizScore[]);
      }
    );
  }, [router]);

  const streak = profile?.current_streak ?? 0;

  if (!profile) return null;

  const totalLessons = allLessonIds.length;
  const completedCount = completedLessons.length;
  const progressPct = Math.round((completedCount / totalLessons) * 100);
  const bestQuizScore = quizScores.length
    ? Math.max(...quizScores.map((s) => Math.round((s.score / s.total) * 100)))
    : null;

  const joinedDate = new Date(profile.created_at).toLocaleDateString("en-US", {
    month: "long", day: "numeric", year: "numeric",
  });
  const goalLabel = GOALS.find((g) => g.value === profile.goal)?.label ?? "Learning for fun 💕";

  const phaseProgress = phases.map((phase) => ({
    phase,
    completed: phase.lessons.filter((l) => completedLessons.includes(l.id)).length,
    total: phase.lessons.length,
  }));

  const achievements: Achievement[] = [
    { id: "first-step", icon: "🐣", title: "First Step", desc: "Complete your first lesson", unlocked: completedCount >= 1 },
    { id: "phase-1-done", icon: "🖥️", title: "Computer Comfortable", desc: "Complete Phase 1", unlocked: phaseProgress[0].completed === phaseProgress[0].total },
    { id: "phase-2-done", icon: "🐍", title: "Pythonista", desc: "Complete Phase 2", unlocked: phaseProgress[1].completed === phaseProgress[1].total },
    { id: "phase-3-done", icon: "🤖", title: "AI Explorer", desc: "Complete Phase 3", unlocked: phaseProgress[2].completed === phaseProgress[2].total },
    { id: "halfway", icon: "⭐", title: "Halfway There", desc: "Complete 50% of lessons", unlocked: progressPct >= 50 },
    { id: "all-done", icon: "🏆", title: "Journey Complete", desc: "Complete all lessons", unlocked: completedCount === totalLessons },
    { id: "quiz-ace", icon: "🎯", title: "Quiz Ace", desc: "Score 100% on a quiz", unlocked: (bestQuizScore ?? 0) === 100 },
    { id: "quiz-taker", icon: "✏️", title: "Quiz Taker", desc: "Complete 3 quizzes", unlocked: quizScores.length >= 3 },
    { id: "streak-3", icon: "🔥", title: "On Fire", desc: "3-day learning streak", unlocked: streak >= 3 },
    { id: "streak-7", icon: "💪", title: "Week Warrior", desc: "7-day learning streak", unlocked: streak >= 7 },
  ];

  const unlockedCount = achievements.filter((a) => a.unlocked).length;

  return (
    <div className="min-h-screen bg-cream">
      <Navigation />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-3xl mx-auto px-4 py-8 space-y-6"
      >

        {/* Profile card */}
        <div className="bg-gradient-to-br from-rose-100 via-pink-50 to-purple-50 rounded-3xl border border-rose-200 p-5 sm:p-6 flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5">
          <div className={cn("w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center text-2xl sm:text-3xl font-bold text-white flex-shrink-0 shadow-lg", profile.avatar_color)}>
            {profile.name.charAt(0).toUpperCase()}
          </div>
          <div className="flex-1 min-w-0 text-center sm:text-left">
            <h1 className="font-serif text-xl sm:text-2xl text-rose-500 truncate">{profile.name}</h1>
            <p className="text-xs text-soft-rose mt-1 flex items-center gap-1.5 justify-center sm:justify-start">
              <Calendar className="w-3 h-3 flex-shrink-0" /> Joined {joinedDate}
            </p>
            <div className="mt-2 flex flex-wrap gap-2 justify-center sm:justify-start">
              <span className="bg-white/80 border border-rose-200 text-rose-500 text-xs px-3 py-1 rounded-full font-semibold">{goalLabel}</span>
            </div>
          </div>
          <Button variant="outline" size="sm" onClick={() => router.push("/learn")} className="flex-shrink-0 gap-1.5 min-h-[40px]">
            <BookOpen className="w-4 h-4" />
            <span className="hidden xs:inline">Keep learning</span>
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
          {[
            { icon: <CheckCircle2 className="w-5 h-5 text-green-500" />, value: String(completedCount), label: "Lessons done", bg: "bg-green-50 border-green-200" },
            { icon: <Flame className="w-5 h-5 text-orange-500" />, value: streak > 0 ? `${streak}d` : "—", label: "Day streak", bg: "bg-orange-50 border-orange-200" },
            { icon: <Trophy className="w-5 h-5 text-yellow-500" />, value: bestQuizScore !== null ? `${bestQuizScore}%` : "—", label: "Best quiz", bg: "bg-yellow-50 border-yellow-200" },
            { icon: <Star className="w-5 h-5 text-purple-500" />, value: `${unlockedCount}/${achievements.length}`, label: "Badges", bg: "bg-purple-50 border-purple-200" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.35 }}
              className={cn("rounded-2xl border p-3 sm:p-4 text-center min-w-0", stat.bg)}
            >
              <div className="flex justify-center mb-1">{stat.icon}</div>
              <div className="font-bold text-lg sm:text-xl text-text-rose truncate">{stat.value}</div>
              <div className="text-xs text-soft-rose truncate">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Overall progress */}
        <div className="bg-white rounded-2xl border-2 border-rose-200 p-5">
          <h2 className="font-serif text-lg text-rose-500 mb-4">📈 Overall Progress</h2>
          <div className="flex items-center gap-3">
            <Progress value={progressPct} className="flex-1" />
            <span className="text-sm font-bold text-rose-500">{completedCount}/{totalLessons}</span>
          </div>
        </div>

        {/* Phase breakdown */}
        <div className="bg-white rounded-2xl border-2 border-rose-200 p-5">
          <h2 className="font-serif text-lg text-rose-500 mb-4">🗺️ Phase Breakdown</h2>
          <div className="space-y-4">
            {phaseProgress.map(({ phase, completed, total }) => {
              const pct = Math.round((completed / total) * 100);
              return (
                <div key={phase.id}>
                  <div className="flex items-center gap-2 mb-1.5 min-w-0">
                    <span className="text-lg flex-shrink-0">{phase.icon}</span>
                    <span className="text-xs sm:text-sm font-semibold text-text-rose flex-1 min-w-0 truncate">
                      {phase.title.split("—")[1]?.trim() ?? phase.title}
                    </span>
                    <span className="text-xs text-soft-rose font-semibold flex-shrink-0">{completed}/{total}</span>
                    {completed === total && <Badge variant="green" className="flex-shrink-0">✓</Badge>}
                  </div>
                  <Progress value={pct} className="h-2" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Completed lessons */}
        {completedLessons.length > 0 && (
          <div className="bg-white rounded-2xl border-2 border-rose-200 p-5">
            <h2 className="font-serif text-lg text-rose-500 mb-4">✅ Completed Lessons</h2>
            <div className="space-y-2">
              {phases.flatMap((phase) =>
                phase.lessons.filter((l) => completedLessons.includes(l.id)).map((lesson) => (
                  <div key={lesson.id} className="flex items-center gap-3 py-2 border-b border-rose-100 last:border-0">
                    <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-sm text-text-rose flex-1">{lesson.title}</span>
                    <span className="text-base">{phase.icon}</span>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {/* Achievements */}
        <div className="bg-white rounded-2xl border-2 border-rose-200 p-5">
          <h2 className="font-serif text-lg text-rose-500 mb-1">🏅 Achievements</h2>
          <p className="text-xs text-soft-rose mb-4">{unlockedCount} of {achievements.length} unlocked</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
            {achievements.map((a, i) => (
              <motion.div
                key={a.id}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05, type: "spring", stiffness: 400, damping: 22 }}
                className={cn(
                  "rounded-2xl border-2 p-3 text-center transition-all",
                  a.unlocked
                    ? "border-rose-200 bg-rose-50 hover:scale-105 hover:shadow-md cursor-default"
                    : "border-gray-100 bg-gray-50 opacity-40 grayscale"
                )}
              >
                <motion.div
                  className="text-2xl sm:text-3xl mb-1"
                  animate={a.unlocked ? { rotate: [0, -8, 8, 0] } : {}}
                  transition={{ delay: i * 0.05 + 0.3, duration: 0.4 }}
                >
                  {a.icon}
                </motion.div>
                <div className="text-xs font-bold text-text-rose leading-snug">{a.title}</div>
                <div className="text-[10px] sm:text-xs text-soft-rose mt-0.5 leading-tight">{a.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quiz history */}
        {quizScores.length > 0 && (
          <div className="bg-white rounded-2xl border-2 border-rose-200 p-5">
            <h2 className="font-serif text-lg text-rose-500 mb-4">🎯 Quiz History</h2>
            <div className="space-y-2">
              {quizScores.slice(0, 5).map((s, i) => {
                const pct = Math.round((s.score / s.total) * 100);
                return (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-xs text-soft-rose w-24 flex-shrink-0">
                      {new Date(s.taken_at).toLocaleDateString()}
                    </span>
                    <Progress value={pct} className="flex-1 h-2" />
                    <span className={cn("text-xs font-bold w-12 text-right", pct >= 80 ? "text-green-600" : pct >= 60 ? "text-yellow-600" : "text-rose-500")}>
                      {s.score}/{s.total}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

      </motion.div>
    </div>
  );
}
