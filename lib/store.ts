export type User = {
  name: string;
  email: string;
  avatarColor: string;
  goal: string;
  joinedAt: string;
};

export type UserProgress = {
  completedLessons: string[];
  quizScores: { date: string; score: number; total: number }[];
  lastVisited: string;
  streakDays: number;
  lastStreakDate: string;
};

const USER_KEY = "cj_user";
const PROGRESS_KEY = "cj_progress";

export function getUser(): User | null {
  if (typeof window === "undefined") return null;
  const raw = localStorage.getItem(USER_KEY);
  return raw ? JSON.parse(raw) : null;
}

export function saveUser(user: User): void {
  localStorage.setItem(USER_KEY, JSON.stringify(user));
}

export function getProgress(): UserProgress {
  if (typeof window === "undefined") {
    return { completedLessons: [], quizScores: [], lastVisited: "", streakDays: 0, lastStreakDate: "" };
  }
  const raw = localStorage.getItem(PROGRESS_KEY);
  if (raw) return JSON.parse(raw);
  return { completedLessons: [], quizScores: [], lastVisited: "", streakDays: 0, lastStreakDate: "" };
}

export function saveProgress(progress: UserProgress): void {
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
}

export function toggleLesson(lessonId: string): UserProgress {
  const progress = getProgress();
  const idx = progress.completedLessons.indexOf(lessonId);
  if (idx === -1) {
    progress.completedLessons.push(lessonId);
  } else {
    progress.completedLessons.splice(idx, 1);
  }
  progress.lastVisited = new Date().toISOString();
  updateStreak(progress);
  saveProgress(progress);
  return progress;
}

export function recordQuizScore(score: number, total: number): UserProgress {
  const progress = getProgress();
  progress.quizScores.push({ date: new Date().toISOString(), score, total });
  updateStreak(progress);
  saveProgress(progress);
  return progress;
}

function updateStreak(progress: UserProgress): void {
  const today = new Date().toDateString();
  if (progress.lastStreakDate === today) return;
  const yesterday = new Date(Date.now() - 86400000).toDateString();
  if (progress.lastStreakDate === yesterday) {
    progress.streakDays += 1;
  } else if (progress.lastStreakDate !== today) {
    progress.streakDays = 1;
  }
  progress.lastStreakDate = today;
}

export function clearAll(): void {
  localStorage.removeItem(USER_KEY);
  localStorage.removeItem(PROGRESS_KEY);
}

export const AVATAR_COLORS = [
  "bg-rose-400",
  "bg-pink-400",
  "bg-purple-400",
  "bg-violet-400",
  "bg-fuchsia-400",
  "bg-indigo-400",
];

export const GOALS = [
  { value: "career", label: "🚀 Switch careers into tech" },
  { value: "ai", label: "🤖 Build AI projects" },
  { value: "fun", label: "💕 Learn for fun & curiosity" },
  { value: "freelance", label: "💼 Freelance / side income" },
  { value: "understand", label: "🧠 Understand technology better" },
];
