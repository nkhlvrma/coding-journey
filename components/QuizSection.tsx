"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { quizQuestions } from "@/lib/data";
import { recordQuizScore } from "@/lib/supabase/queries";
import { Trophy, RotateCcw } from "lucide-react";

export default function QuizSection() {
  const [shuffled] = useState(() => [...quizQuestions].sort(() => Math.random() - 0.5).slice(0, 6));
  const [index, setIndex] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const q = shuffled[index];

  const handleAnswer = (i: number) => {
    if (answered) return;
    setAnswered(true);
    setSelected(i);
    if (i === q.correctIndex) setScore((s) => s + 1);
  };

  const handleNext = async () => {
    const isCorrect = selected === q.correctIndex;
    const newScore = score + (isCorrect ? 0 : 0); // already counted in handleAnswer
    if (index + 1 >= shuffled.length) {
      await recordQuizScore(score + (isCorrect && !answered ? 1 : 0), shuffled.length);
      setDone(true);
    } else {
      setIndex((i) => i + 1);
      setAnswered(false);
      setSelected(null);
    }
  };

  const handleRestart = () => {
    setIndex(0); setAnswered(false); setSelected(null); setScore(0); setDone(false);
  };

  const pct = Math.round((score / shuffled.length) * 100);

  return (
    <div className="rounded-2xl border-2 border-rose-200 overflow-hidden bg-white shadow-sm">
      <div className="bg-gradient-to-r from-purple-300 to-purple-500 px-5 py-3 flex items-center gap-2">
        <span className="text-lg">🌸</span>
        <span className="text-white font-bold text-sm">Quick Quiz — Test What You Learned!</span>
        {!done && <span className="ml-auto text-white/80 text-xs font-semibold">{index + 1}/{shuffled.length}</span>}
      </div>

      <div className="p-5">
        {done ? (
          <div className="text-center py-4 animate-fade-in">
            <Trophy className="w-10 h-10 sm:w-12 sm:h-12 text-yellow-400 mx-auto mb-3" />
            <div className="font-serif text-xl sm:text-2xl text-rose-500 mb-1">Quiz complete!</div>
            <div className="text-3xl sm:text-4xl font-bold text-text-rose mb-1">{score}/{shuffled.length}</div>
            <div className="text-soft-rose text-sm mb-4">
              {pct >= 80 ? "Amazing! You're crushing it! 🌟" : pct >= 60 ? "Great job, keep it up! 💕" : "Keep reading the lessons, you'll get there! 📚"}
            </div>
            <div className="w-full bg-rose-100 rounded-full h-3 mb-6">
              <div className="bg-gradient-to-r from-rose-300 to-rose-500 h-3 rounded-full transition-all duration-700" style={{ width: `${pct}%` }} />
            </div>
            <Button variant="outline" onClick={handleRestart} className="gap-2">
              <RotateCcw className="w-4 h-4" /> Take it again
            </Button>
          </div>
        ) : (
          <div className="animate-fade-in">
            <p className="font-bold text-text-rose text-sm mb-4 leading-relaxed">✦ {q.question}</p>
            <div className="flex flex-col gap-2 mb-4">
              {q.options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleAnswer(i)}
                  disabled={answered}
                  className={cn(
                    "text-left px-4 py-3 rounded-xl border-2 text-sm font-semibold transition-all",
                    !answered && "hover:bg-rose-50 hover:border-rose-300 border-rose-100 text-text-rose",
                    answered && i === q.correctIndex && "border-green-400 bg-green-50 text-green-700",
                    answered && i === selected && i !== q.correctIndex && "border-rose-400 bg-rose-50 text-rose-600",
                    answered && i !== selected && i !== q.correctIndex && "border-rose-100 text-soft-rose opacity-50"
                  )}
                >
                  {opt}
                </button>
              ))}
            </div>
            {answered && (
              <>
                <div className={cn("rounded-xl px-4 py-3 text-sm mb-4 animate-fade-in", selected === q.correctIndex ? "bg-green-50 text-green-700 border border-green-200" : "bg-rose-50 text-rose-600 border border-rose-200")}>
                  {selected === q.correctIndex ? `🌸 ${q.correctFeedback}` : `😅 ${q.wrongFeedback}`}
                </div>
                <Button onClick={handleNext} className="w-full">
                  {index + 1 >= shuffled.length ? "See results 🎉" : "Next question →"}
                </Button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
