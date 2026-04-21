"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { upsertProfile, getUser } from "@/lib/supabase/queries";
import { AVATAR_COLORS, GOALS } from "@/lib/store";
import { cn } from "@/lib/utils";
import { ChevronRight, ChevronLeft, Sparkles, Heart } from "lucide-react";

type Step = "avatar" | "goal" | "done";
const STEPS: Step[] = ["avatar", "goal", "done"];

export default function OnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState<Step>("avatar");
  const [avatarColor, setAvatarColor] = useState(AVATAR_COLORS[0]);
  const [goal, setGoal] = useState("");
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

  const stepIndex = STEPS.indexOf(step);

  const handleNext = async () => {
    setError("");
    if (step === "goal" && !goal) { setError("Pick one that feels right 💕"); return; }
    if (step === "goal") {
      setSaving(true);
      await upsertProfile({ avatar_color: avatarColor, goal });
      setSaving(false);
    }
    setStep(STEPS[stepIndex + 1]);
  };

  const handleFinish = () => router.push("/learn");

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 flex flex-col items-center justify-center p-4">
      {/* Progress dots */}
      {step !== "done" && (
        <div className="flex gap-2 mb-8">
          {STEPS.slice(0, -1).map((s, i) => (
            <div key={s} className={cn(
              "h-2 rounded-full transition-all duration-300",
              stepIndex > i ? "w-6 bg-rose-400" : step === s ? "w-6 bg-rose-400" : "w-2 bg-rose-200"
            )} />
          ))}
        </div>
      )}

      <div className="w-full max-w-md">

        {/* ── Avatar / name ── */}
        {step === "avatar" && (
          <div className="bg-white rounded-3xl border border-rose-200 shadow-lg p-8 animate-fade-in">
            <div className="text-center mb-6">
              <div className="text-4xl mb-2">🎨</div>
              <h2 className="font-serif text-2xl text-rose-500">Pick your colour</h2>
              <p className="text-soft-rose text-sm mt-1">This'll be your avatar throughout the app 💕</p>
            </div>
            <div className="flex justify-center gap-3 sm:gap-4 mb-6 flex-wrap">
              {AVATAR_COLORS.map((color) => (
                <button
                  key={color}
                  onClick={() => setAvatarColor(color)}
                  aria-label={`Select ${color}`}
                  className={cn(
                    "w-12 h-12 rounded-full transition-all flex-shrink-0",
                    color,
                    avatarColor === color ? "ring-4 ring-rose-400 ring-offset-2 scale-110" : "opacity-60 hover:opacity-100 hover:scale-105 active:scale-95"
                  )}
                />
              ))}
            </div>
            <Button onClick={() => setStep("goal")} className="w-full">
              Looks good! <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        )}

        {/* ── Goal ── */}
        {step === "goal" && (
          <div className="bg-white rounded-3xl border border-rose-200 shadow-lg p-8 animate-fade-in">
            <div className="text-center mb-6">
              <div className="text-4xl mb-2">🎯</div>
              <h2 className="font-serif text-2xl text-rose-500">What's your goal?</h2>
              <p className="text-soft-rose text-sm mt-1">We'll cheer you on based on this!</p>
            </div>
            <div className="space-y-2.5">
              {GOALS.map((g) => (
                <button
                  key={g.value}
                  onClick={() => setGoal(g.value)}
                  className={cn(
                    "w-full text-left px-4 py-3.5 rounded-xl border-2 text-sm font-semibold transition-all",
                    goal === g.value
                      ? "border-rose-400 bg-rose-50 text-rose-600"
                      : "border-rose-100 bg-white text-text-rose hover:border-rose-200 hover:bg-rose-50"
                  )}
                >
                  {g.label}
                </button>
              ))}
            </div>
            {error && <p className="text-rose-500 text-sm mt-3 text-center">{error}</p>}
            <div className="flex gap-3 mt-6">
              <Button variant="outline" onClick={() => setStep("avatar")} className="flex-1">
                <ChevronLeft className="w-4 h-4" /> Back
              </Button>
              <Button onClick={handleNext} disabled={saving} className="flex-1">
                {saving ? "Saving…" : <>Continue <ChevronRight className="w-4 h-4" /></>}
              </Button>
            </div>
          </div>
        )}

        {/* ── Done ── */}
        {step === "done" && (
          <div className="text-center animate-fade-in">
            <div className="text-5xl sm:text-7xl mb-4">🎉</div>
            <h2 className="font-serif text-2xl sm:text-3xl text-rose-500 mb-3">You're all set!</h2>
            <p className="text-soft-rose text-base sm:text-lg leading-relaxed mb-8">
              Your journey to becoming a developer starts now. Remember: even 15 minutes a day will take you places 💪
            </p>
            <div className="bg-white rounded-2xl border border-rose-200 p-5 mb-8 text-left max-w-sm mx-auto">
              <p className="text-sm font-semibold text-rose-500 mb-3 flex items-center gap-2">
                <Heart className="w-4 h-4" /> Your daily habit plan
              </p>
              <div className="space-y-2 text-sm text-soft-rose">
                <div className="flex gap-2"><span>☀️</span><span><strong className="text-text-rose">Morning (15 min)</strong> — Read a lesson & try the exercises</span></div>
                <div className="flex gap-2"><span>🌙</span><span><strong className="text-text-rose">Evening (20 min)</strong> — Write code in the playground</span></div>
                <div className="flex gap-2"><span>💕</span><span><strong className="text-text-rose">Weekends</strong> — Work on a small fun project</span></div>
              </div>
            </div>
            <Button size="lg" onClick={handleFinish} className="gap-2 w-full sm:w-auto">
              <Sparkles className="w-5 h-5" /> Start learning!
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
