"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { getSession } from "@/lib/supabase/queries";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";

export default function LandingPage() {
  const router = useRouter();
  const [checking, setChecking] = useState(true);

  // Redirect logged-in users straight to /learn
  useEffect(() => {
    getSession().then((session) => {
      if (session) {
        router.replace("/learn");
      } else {
        setChecking(false);
      }
    });
  }, [router]);

  if (checking) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <div className="text-4xl animate-pulse">🌸</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 flex flex-col">

      {/* Nav */}
      <header className="px-6 py-4 flex items-center justify-between max-w-5xl mx-auto w-full">
        <div className="flex items-center gap-2 font-serif text-rose-500 font-semibold text-lg">
          <Sparkles className="w-5 h-5 text-rose-400" />
          Coding Journey
        </div>
        <Link
          href="/login"
          className="text-sm font-semibold text-soft-rose hover:text-rose-500 transition-colors"
        >
          Log in
        </Link>
      </header>

      {/* Hero */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 py-16">

        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-6xl sm:text-7xl mb-6"
        >
          🌸
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl text-rose-500 leading-tight mb-4 max-w-2xl"
        >
          Learn to code,<br />one step at a time
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-soft-rose text-base sm:text-lg max-w-md leading-relaxed mb-10"
        >
          From "I don't know computers" to building cool AI things —
          a personal coding journey designed for absolute beginners.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-3 mb-16"
        >
          <Link
            href="/login?mode=signup"
            className="group flex items-center gap-2 bg-rose-500 hover:bg-rose-600 active:scale-95 text-white font-bold px-7 py-3.5 rounded-full text-sm sm:text-base shadow-lg shadow-rose-200 transition-all duration-200"
          >
            Start for free
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
          <Link
            href="/login"
            className="flex items-center gap-2 border-2 border-rose-200 text-rose-500 hover:bg-rose-50 active:scale-95 font-bold px-7 py-3.5 rounded-full text-sm sm:text-base transition-all duration-200"
          >
            Log in
          </Link>
        </motion.div>

        {/* Feature highlights */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl w-full"
        >
          {[
            { icon: "🐍", title: "Python from scratch", desc: "No experience needed. Learn variables, loops, and functions at your own pace." },
            { icon: "🤖", title: "AI & Machine Learning", desc: "Understand how AI works and build your first models step by step." },
            { icon: "💻", title: "Run code in the browser", desc: "Write and run real Python code instantly — no installs, no setup." },
          ].map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.08 }}
              className="bg-white/80 backdrop-blur-sm border border-rose-100 rounded-2xl p-5 text-left shadow-sm"
            >
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="font-bold text-text-rose text-sm mb-1">{f.title}</h3>
              <p className="text-xs text-soft-rose leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Social proof / reassurance */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75 }}
          className="mt-12 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-soft-rose"
        >
          {[
            "Free forever",
            "No setup required",
            "17 in-depth lessons",
            "Built-in Python editor",
          ].map((point) => (
            <span key={point} className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-rose-400 flex-shrink-0" />
              {point}
            </span>
          ))}
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="text-center py-6 text-xs text-soft-rose/60">
        Made with 💕 for Anu
      </footer>
    </div>
  );
}
