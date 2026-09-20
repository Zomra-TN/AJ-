-- ============================================================
-- AJÀ — Migration : chat support client <-> admin
-- À exécuter dans Supabase Dashboard > SQL Editor > New query > Run
-- (exécute d'abord supabase-migration-accounts.sql si pas encore fait)
-- ============================================================

create table if not exists public.aja_messages (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  sender text not null check (sender in ('client','admin')),
  text text not null,
  is_read boolean default false,
  created_at timestamptz default now()
);

alter table public.aja_messages enable row level security;

drop policy if exists "aja_messages_select_own_or_admin" on public.aja_messages;
create policy "aja_messages_select_own_or_admin" on public.aja_messages
  for select using (user_id = auth.uid() or public.is_admin());

drop policy if exists "aja_messages_insert_client" on public.aja_messages;
create policy "aja_messages_insert_client" on public.aja_messages
  for insert with check (user_id = auth.uid() and sender = 'client');

drop policy if exists "aja_messages_insert_admin" on public.aja_messages;
create policy "aja_messages_insert_admin" on public.aja_messages
  for insert with check (public.is_admin() and sender = 'admin');

drop policy if exists "aja_messages_update_admin" on public.aja_messages;
create policy "aja_messages_update_admin" on public.aja_messages
  for update using (public.is_admin());

-- realtime (idempotent : re-exécutable sans erreur)
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_publication_tables WHERE pubname = 'supabase_realtime' AND schemaname = 'public' AND tablename = 'aja_messages') THEN
    ALTER PUBLICATION supabase_realtime ADD TABLE public.aja_messages;
  END IF;
END $$;
