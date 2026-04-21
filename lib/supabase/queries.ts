import { createClient } from "./client";

export type Profile = {
  id: string;
  name: string;
  avatar_color: string;
  goal: string | null;
  created_at: string;
  current_streak: number;
  last_active_date: string | null;
};

// ── Auth ────────────────────────────────────────────────────

export async function signUp(email: string, password: string, name: string) {
  const sb = createClient();
  return sb.auth.signUp({
    email,
    password,
    options: { data: { name } },
  });
}

export async function signIn(email: string, password: string) {
  const sb = createClient();
  return sb.auth.signInWithPassword({ email, password });
}

export async function signOut() {
  const sb = createClient();
  return sb.auth.signOut();
}

export async function getSession() {
  const sb = createClient();
  const { data } = await sb.auth.getSession();
  return data.session;
}

export async function getUser() {
  const sb = createClient();
  const { data } = await sb.auth.getUser();
  return data.user;
}

// ── Profile ─────────────────────────────────────────────────

export async function getProfile(): Promise<Profile | null> {
  const sb = createClient();
  const { data: { user } } = await sb.auth.getUser();
  if (!user) return null;
  const { data } = await sb.from("profiles").select("*").eq("id", user.id).single();
  return data;
}

export async function updateStreak(): Promise<number> {
  const sb = createClient();
  const { data: { user } } = await sb.auth.getUser();
  if (!user) return 0;

  const { data: profile } = await sb
    .from("profiles")
    .select("current_streak, last_active_date")
    .eq("id", user.id)
    .single();

  const today = new Date().toISOString().split("T")[0];
  const last = profile?.last_active_date;

  if (last === today) return profile?.current_streak ?? 0;

  const yesterday = new Date(Date.now() - 86400000).toISOString().split("T")[0];
  const newStreak = last === yesterday ? (profile?.current_streak ?? 0) + 1 : 1;

  await sb.from("profiles").update({ current_streak: newStreak, last_active_date: today }).eq("id", user.id);
  return newStreak;
}

export async function upsertProfile(fields: Partial<Omit<Profile, "id" | "created_at">>) {
  const sb = createClient();
  const { data: { user } } = await sb.auth.getUser();
  if (!user) return;
  return sb.from("profiles").upsert({ id: user.id, ...fields });
}

// ── Lesson progress ──────────────────────────────────────────

export async function getCompletedLessons(): Promise<string[]> {
  const sb = createClient();
  const { data: { user } } = await sb.auth.getUser();
  if (!user) return [];
  const { data } = await sb.from("lesson_progress").select("lesson_id").eq("user_id", user.id);
  return (data ?? []).map((r) => r.lesson_id);
}

export async function markLessonComplete(lessonId: string) {
  const sb = createClient();
  const { data: { user } } = await sb.auth.getUser();
  if (!user) return;
  return sb.from("lesson_progress").upsert(
    { user_id: user.id, lesson_id: lessonId },
    { onConflict: "user_id,lesson_id" }
  );
}

export async function markLessonIncomplete(lessonId: string) {
  const sb = createClient();
  const { data: { user } } = await sb.auth.getUser();
  if (!user) return;
  return sb.from("lesson_progress")
    .delete()
    .eq("user_id", user.id)
    .eq("lesson_id", lessonId);
}

// ── Quiz scores ──────────────────────────────────────────────

export async function getQuizScores() {
  const sb = createClient();
  const { data: { user } } = await sb.auth.getUser();
  if (!user) return [];
  const { data } = await sb
    .from("quiz_scores")
    .select("*")
    .eq("user_id", user.id)
    .order("taken_at", { ascending: false });
  return data ?? [];
}

export async function recordQuizScore(score: number, total: number) {
  const sb = createClient();
  const { data: { user } } = await sb.auth.getUser();
  if (!user) return;
  return sb.from("quiz_scores").insert({ user_id: user.id, score, total });
}

// ── Saved snippets ───────────────────────────────────────────

export async function getSnippet(lessonId: string): Promise<string | null> {
  const sb = createClient();
  const { data: { user } } = await sb.auth.getUser();
  if (!user) return null;
  const { data } = await sb
    .from("saved_snippets")
    .select("code")
    .eq("user_id", user.id)
    .eq("lesson_id", lessonId)
    .single();
  return data?.code ?? null;
}

export async function saveSnippet(lessonId: string, code: string) {
  const sb = createClient();
  const { data: { user } } = await sb.auth.getUser();
  if (!user) return;
  return sb.from("saved_snippets").upsert(
    { user_id: user.id, lesson_id: lessonId, code, updated_at: new Date().toISOString() },
    { onConflict: "user_id,lesson_id" }
  );
}
