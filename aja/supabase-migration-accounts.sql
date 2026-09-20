-- ============================================================
-- AJÀ — Migration : comptes clients + suivi commandes
-- À exécuter dans Supabase Dashboard > SQL Editor > New query > Run
-- ============================================================

-- 1) Lier chaque commande au compte client (optionnel : NULL = invité)
alter table public.aja_orders
  add column if not exists user_id uuid references auth.users(id) on delete set null;

-- 2) Téléphone sur le profil (rempli à l'inscription / commande)
alter table public.profiles
  add column if not exists phone text;

-- 3) Le client voit SES commandes (l'admin voit tout via policy existante)
drop policy if exists "aja_orders_select_own" on public.aja_orders;
create policy "aja_orders_select_own" on public.aja_orders
  for select using (user_id = auth.uid());

-- vérif :
-- select column_name from information_schema.columns
-- where table_schema='public' and table_name in ('aja_orders','profiles')
-- and column_name in ('user_id','phone');
