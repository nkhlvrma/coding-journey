---
name: Coding Journey App
description: Next.js web app for teaching programming to a beginner, with Supabase backend
type: project
---

Full-stack Next.js 14 app at `/Users/ann/Desktop/Projects/Anu - Beginner/coding-journey`.

Built for Anu (girlfriend) to learn Python and AI from scratch.

**Stack:** Next.js 14 (App Router), Shadcn UI + Tailwind, Supabase (auth + DB), CodeMirror + Pyodide (in-browser Python)

**Key features:**
- Supabase auth (email/password), profiles, lesson progress, quiz scores, saved code snippets
- 17 in-app lessons across 3 phases — full educational content, no external links required
- In-browser Python code editor (CodeMirror) + runtime (Pyodide WebAssembly)
- Onboarding flow, profile page with achievements, quiz with Supabase persistence

**Setup required:**
- Copy `.env.local.example` → `.env.local`, fill in Supabase URL + anon key
- Run `supabase/schema.sql` in Supabase SQL Editor
- `npm run dev` to start

**Why:** The app was originally a standalone HTML file (`learn.html`) that used localStorage.
