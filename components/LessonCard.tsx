"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, ChevronDown, ExternalLink, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { Lesson } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  lesson: Lesson;
  completed: boolean;
  onToggle: (id: string) => void;
  index?: number;
};

export default function LessonCard({ lesson, completed, onToggle, index = 0 }: Props) {
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [justCompleted, setJustCompleted] = useState(false);

  const handleToggle = () => {
    if (!completed) {
      setJustCompleted(true);
      setTimeout(() => setJustCompleted(false), 700);
    }
    onToggle(lesson.id);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.28, delay: index * 0.05, ease: [0.23, 1, 0.32, 1] }}
      className={cn(
        "group rounded-xl border overflow-hidden transition-all duration-200",
        completed
          ? "bg-green-50/40 border-green-200/60"
          : "bg-white border-rose-100 hover:border-rose-200 hover:shadow-sm",
        justCompleted && "animate-card-complete"
      )}
    >
      <div className="flex items-start gap-3 px-4 py-3.5">

        {/* Completion circle */}
        <button
          onClick={handleToggle}
          className={cn(
            "mt-0.5 w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all duration-200 active:scale-90",
            completed
              ? "bg-green-400 border-green-400 text-white shadow-sm"
              : "border-rose-200 hover:border-rose-400 hover:bg-rose-50"
          )}
          aria-label={completed ? "Mark incomplete" : "Mark complete"}
        >
          <AnimatePresence>
            {completed && (
              <motion.div
                key="check"
                initial={{ scale: 0, rotate: -15 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: 15 }}
                transition={{ type: "spring", stiffness: 500, damping: 20 }}
              >
                <Check className="w-3 h-3" strokeWidth={3} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <p className={cn(
              "font-bold text-sm leading-snug transition-colors duration-200",
              completed ? "text-green-700" : "text-text-rose"
            )}>
              {lesson.title}
            </p>

            {/* Arrow link — replaces the pill button */}
            <Link
              href={`/learn/${lesson.id}`}
              className={cn(
                "flex-shrink-0 p-1 rounded-full transition-all duration-150 active:scale-95",
                completed
                  ? "text-green-300 hover:text-green-500 hover:bg-green-100"
                  : "text-rose-200 hover:text-rose-500 hover:bg-rose-50"
              )}
              aria-label={`Open ${lesson.title}`}
            >
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-150" />
            </Link>
          </div>

          <p className="text-xs text-soft-rose mt-1 leading-relaxed">{lesson.description}</p>

          <div className="flex flex-wrap gap-1 mt-2">
            {lesson.tags.map((tag) => (
              <Badge key={tag.label} variant={tag.color}>{tag.label}</Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Resources toggle */}
      {lesson.resources.length > 0 && (
        <>
          <button
            onClick={() => setResourcesOpen((v) => !v)}
            className="w-full flex items-center gap-2 px-4 py-2 text-xs font-semibold text-mauve hover:bg-rose-50/60 border-t border-rose-100/70 transition-colors min-h-[36px]"
          >
            <span>🔗</span>
            <span>{resourcesOpen ? "Hide" : "Show"} resources ({lesson.resources.length})</span>
            <motion.span
              className="ml-auto"
              animate={{ rotate: resourcesOpen ? 180 : 0 }}
              transition={{ duration: 0.18 }}
            >
              <ChevronDown className="w-3.5 h-3.5" />
            </motion.span>
          </button>

          <AnimatePresence>
            {resourcesOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                className="overflow-hidden"
              >
                <div className="bg-rose-50/30 px-4 pb-3 pt-1 space-y-0.5">
                  {lesson.resources.map((res, i) => (
                    <a
                      key={i}
                      href={res.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 py-2 px-2 rounded-lg hover:bg-white/80 transition-colors group"
                    >
                      <span className="text-sm flex-shrink-0">{res.icon}</span>
                      <span className="flex-1 text-xs text-text-rose leading-snug">{res.label}</span>
                      <ExternalLink className="w-3 h-3 text-rose-300 group-hover:text-rose-500 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </motion.div>
  );
}
