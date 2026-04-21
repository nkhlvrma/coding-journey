-- ============================================================
-- Coding Journey — Supabase Schema
-- Run this in your Supabase SQL Editor
-- ============================================================

-- 1. Profiles (extends auth.users)
create table if not exists public.profiles (
  id          uuid references auth.users on delete cascade primary key,
  name        text not null,
  avatar_color text not null default 'bg-rose-400',
  goal        text,
  created_at  timestamptz not null default now()
);

-- 2. Lesson progress
create table if not exists public.lesson_progress (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid references auth.users on delete cascade not null,
  lesson_id   text not null,
  completed_at timestamptz not null default now(),
  constraint lesson_progress_unique unique (user_id, lesson_id)
);

-- 3. Quiz scores
create table if not exists public.quiz_scores (
  id       uuid primary key default gen_random_uuid(),
  user_id  uuid references auth.users on delete cascade not null,
  score    integer not null,
  total    integer not null,
  taken_at timestamptz not null default now()
);

-- 4. Saved code snippets (per lesson)
create table if not exists public.saved_snippets (
  id         uuid primary key default gen_random_uuid(),
  user_id    uuid references auth.users on delete cascade not null,
  lesson_id  text not null,
  code       text not null default '',
  updated_at timestamptz not null default now(),
  constraint saved_snippets_unique unique (user_id, lesson_id)
);

-- ============================================================
-- Row Level Security
-- ============================================================

alter table public.profiles        enable row level security;
alter table public.lesson_progress enable row level security;
alter table public.quiz_scores     enable row level security;
alter table public.saved_snippets  enable row level security;

-- profiles
create policy "profiles: select own"  on public.profiles for select using (auth.uid() = id);
create policy "profiles: insert own"  on public.profiles for insert with check (auth.uid() = id);
create policy "profiles: update own"  on public.profiles for update using (auth.uid() = id);

-- lesson_progress
create policy "progress: select own" on public.lesson_progress for select using (auth.uid() = user_id);
create policy "progress: insert own" on public.lesson_progress for insert with check (auth.uid() = user_id);
create policy "progress: delete own" on public.lesson_progress for delete using (auth.uid() = user_id);

-- quiz_scores
create policy "quiz: select own" on public.quiz_scores for select using (auth.uid() = user_id);
create policy "quiz: insert own" on public.quiz_scores for insert with check (auth.uid() = user_id);

-- saved_snippets
create policy "snippets: all own" on public.saved_snippets for all using (auth.uid() = user_id);

-- ============================================================
-- Auto-create profile on signup
-- ============================================================
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, name)
  values (new.id, coalesce(new.raw_user_meta_data->>'name', split_part(new.email, '@', 1)));
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
