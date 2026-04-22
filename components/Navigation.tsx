"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { BookOpen, User, LogOut, Sparkles, Terminal, BookMarked } from "lucide-react";
import { cn } from "@/lib/utils";
import { signOut, getProfile } from "@/lib/supabase/queries";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Navigation() {
  const pathname = usePathname();
  const router = useRouter();
  const [name, setName] = useState<string>("");
  const [avatarColor, setAvatarColor] = useState("bg-rose-400");

  useEffect(() => {
    getProfile().then((p) => {
      if (p) { setName(p.name); setAvatarColor(p.avatar_color); }
    });
  }, []);

  const handleLogout = async () => {
    await signOut();
    router.push("/login");
  };

  const navItems = [
    { href: "/learn", label: "Learn", icon: BookOpen },
    { href: "/playground", label: "Playground", icon: Terminal },
    { href: "/glossary", label: "Glossary", icon: BookMarked },
  ];

  return (
    <motion.header
      initial={{ y: -56, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-rose-200 shadow-sm"
    >
      <div className="max-w-4xl mx-auto px-3 sm:px-4 h-14 flex items-center justify-between gap-2">
        {/* Logo — truncates gracefully on narrow screens */}
        <Link
          href="/learn"
          className="flex items-center gap-1.5 font-serif text-rose-500 font-semibold text-base sm:text-lg hover:opacity-80 transition-opacity group shrink-0"
        >
          <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-rose-400 group-hover:rotate-12 transition-transform duration-300 flex-shrink-0" />
          <span className="hidden xs:inline truncate">Coding Journey</span>
        </Link>

        <nav className="flex items-center gap-0.5 sm:gap-1">
          {navItems.map(({ href, label, icon: Icon }) => {
            const isActive = pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  "flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 active:scale-95 min-h-[44px]",
                  isActive
                    ? "bg-rose-100 text-rose-600"
                    : "text-soft-rose hover:bg-rose-50 hover:text-rose-500"
                )}
              >
                <Icon className="w-4 h-4 flex-shrink-0" />
                <span className="hidden sm:inline">{label}</span>
              </Link>
            );
          })}

          {/* Avatar + logout */}
          {name && (
            <div className="flex items-center gap-1 ml-0.5 sm:ml-1">
              <Link href="/profile">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0",
                    avatarColor,
                    pathname.startsWith("/profile") && "ring-2 ring-rose-400 ring-offset-1"
                  )}
                >
                  {name.charAt(0).toUpperCase()}
                </motion.div>
              </Link>
              <button
                onClick={handleLogout}
                aria-label="Log out"
                className="flex items-center gap-1 px-2 py-2.5 rounded-full text-xs font-semibold text-soft-rose hover:bg-red-50 hover:text-red-400 active:scale-95 transition-all duration-150 min-h-[44px]"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </div>
          )}
        </nav>
      </div>
    </motion.header>
  );
}
