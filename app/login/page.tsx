"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signIn, signUp } from "@/lib/supabase/queries";
import { Sparkles, Eye, EyeOff } from "lucide-react";
import { cn } from "@/lib/utils";

type Mode = "login" | "signup";

export default function LoginPage() {
  const router = useRouter();
  const [mode, setMode] = useState<Mode>("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (mode === "signup") {
        if (!name.trim()) { setError("What should we call you? 🌸"); setLoading(false); return; }
        const { error: err } = await signUp(email, password, name.trim());
        if (err) { setError(err.message); setLoading(false); return; }
        // New user → onboarding to pick goal/avatar
        router.push("/onboarding");
      } else {
        const { error: err } = await signIn(email, password);
        if (err) { setError(err.message); setLoading(false); return; }
        router.push("/learn");
      }
    } catch {
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="text-4xl sm:text-5xl mb-3">🌸</div>
          <h1 className="font-serif text-2xl sm:text-3xl text-rose-500">Coding Journey</h1>
          <p className="text-soft-rose text-sm mt-1">Your personal path to becoming a developer</p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-3xl border border-rose-200 shadow-lg p-6 sm:p-8">
          {/* Toggle */}
          <div className="flex rounded-xl bg-rose-50 p-1 mb-6">
            {(["login", "signup"] as Mode[]).map((m) => (
              <button
                key={m}
                onClick={() => { setMode(m); setError(""); }}
                className={cn(
                  "flex-1 py-2.5 rounded-lg text-sm font-bold transition-all min-h-[44px]",
                  mode === m ? "bg-white text-rose-500 shadow-sm" : "text-soft-rose"
                )}
              >
                {m === "login" ? "Log in" : "Sign up"}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === "signup" && (
              <div>
                <Label htmlFor="name">Your name</Label>
                <Input
                  id="name"
                  placeholder="e.g. Anu 🌷"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1.5"
                  autoFocus
                />
              </div>
            )}

            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1.5"
                autoFocus={mode === "login"}
              />
            </div>

            <div>
              <Label htmlFor="password">Password</Label>
              <div className="relative mt-1.5">
                <Input
                  id="password"
                  type={showPw ? "text" : "password"}
                  placeholder={mode === "signup" ? "At least 6 characters" : "Your password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPw((v) => !v)}
                  aria-label={showPw ? "Hide password" : "Show password"}
                  className="absolute right-0 top-0 h-full px-3 flex items-center text-rose-300 hover:text-rose-500 transition-colors"
                >
                  {showPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {error && (
              <p className="text-rose-500 text-sm bg-rose-50 border border-rose-200 rounded-xl px-3 py-2">
                {error}
              </p>
            )}

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? (
                <span className="animate-pulse">✨ Just a moment…</span>
              ) : mode === "login" ? (
                <><Sparkles className="w-4 h-4" /> Log in</>
              ) : (
                <><Sparkles className="w-4 h-4" /> Create my account</>
              )}
            </Button>
          </form>
        </div>

        <p className="text-center text-xs text-soft-rose mt-6">
          Your progress is saved to the cloud ☁️
        </p>
      </div>
    </div>
  );
}
