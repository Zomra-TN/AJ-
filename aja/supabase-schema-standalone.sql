-- ============================================================
-- AJÀ — Base INDÉPENDANTE (projet Supabase dédié, aucun lien ZTC)
-- À exécuter UNE FOIS : SQL Editor > New query > coller > Run
-- Puis : Auth > Providers > Email > désactiver "Confirm email" (recommandé)
-- ============================================================

-- ---------- Profils + admin ----------
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text,
  name text,
  phone text,
  is_admin boolean default false,
  created_at timestamptz default now()
);

create or replace function public.is_admin()
returns boolean
language sql
security definer
set search_path = public
stable
as $$
  select exists (
    select 1 from public.profiles
    where id = auth.uid() and is_admin = true
  );
$$;

-- Anti-escalade : un client CONNECTÉ via l'appli ne peut pas se nommer
-- admin. L'accès direct base (SQL Editor, auth.uid() NULL) reste autorisé.
create or replace function public.prevent_admin_escalation()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if NEW.is_admin is distinct from OLD.is_admin
     and auth.uid() is not null
     and not public.is_admin() then
    raise exception 'Seul un admin peut modifier le rôle admin.';
  end if;
  return NEW;
end;
$$;

drop trigger if exists trg_no_self_admin on public.profiles;
create trigger trg_no_self_admin
  before update on public.profiles
  for each row execute function public.prevent_admin_escalation();

alter table public.profiles enable row level security;
drop policy if exists "profiles_select_own_or_admin" on public.profiles;
create policy "profiles_select_own_or_admin" on public.profiles
  for select using (id = auth.uid() or public.is_admin());
drop policy if exists "profiles_insert_own" on public.profiles;
create policy "profiles_insert_own" on public.profiles
  for insert with check (id = auth.uid());
drop policy if exists "profiles_update_own" on public.profiles;
create policy "profiles_update_own" on public.profiles
  for update using (id = auth.uid()) with check (id = auth.uid());
drop policy if exists "profiles_delete_admin" on public.profiles;
create policy "profiles_delete_admin" on public.profiles
  for delete using (public.is_admin());

-- ---------- Produits ----------
create table if not exists public.aja_products (
  id text primary key,
  category text not null,
  name_fr text not null,
  name_en text,
  name_ar text,
  desc_fr text,
  desc_en text,
  desc_ar text,
  price numeric not null,
  old_price numeric,
  image text,
  badge text,
  active boolean default true,
  created_at timestamptz default now()
);

alter table public.aja_products enable row level security;
drop policy if exists "aja_products_public_read" on public.aja_products;
create policy "aja_products_public_read" on public.aja_products
  for select using (true);
drop policy if exists "aja_products_write_admin" on public.aja_products;
create policy "aja_products_write_admin" on public.aja_products
  for all using (public.is_admin()) with check (public.is_admin());

-- ---------- Commandes COD (invité + compte) ----------
create table if not exists public.aja_orders (
  id text primary key,
  user_id uuid references auth.users(id) on delete set null,
  customer jsonb default '{}'::jsonb,
  items jsonb default '[]'::jsonb,
  total numeric default 0,
  status text default 'new',
  created_at timestamptz default now()
);

alter table public.aja_orders enable row level security;
drop policy if exists "aja_orders_insert_public" on public.aja_orders;
create policy "aja_orders_insert_public" on public.aja_orders
  for insert to anon, authenticated with check (true);
drop policy if exists "aja_orders_select_own_or_admin" on public.aja_orders;
create policy "aja_orders_select_own_or_admin" on public.aja_orders
  for select using (user_id = auth.uid() or public.is_admin());
drop policy if exists "aja_orders_update_admin" on public.aja_orders;
create policy "aja_orders_update_admin" on public.aja_orders
  for update using (public.is_admin());
drop policy if exists "aja_orders_delete_admin" on public.aja_orders;
create policy "aja_orders_delete_admin" on public.aja_orders
  for delete using (public.is_admin());

-- ---------- Chat support ----------
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

-- ---------- Realtime (idempotent) ----------
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_publication_tables WHERE pubname = 'supabase_realtime' AND schemaname = 'public' AND tablename = 'aja_orders') THEN
    ALTER PUBLICATION supabase_realtime ADD TABLE public.aja_orders;
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_publication_tables WHERE pubname = 'supabase_realtime' AND schemaname = 'public' AND tablename = 'aja_products') THEN
    ALTER PUBLICATION supabase_realtime ADD TABLE public.aja_products;
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_publication_tables WHERE pubname = 'supabase_realtime' AND schemaname = 'public' AND tablename = 'aja_messages') THEN
    ALTER PUBLICATION supabase_realtime ADD TABLE public.aja_messages;
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_publication_tables WHERE pubname = 'supabase_realtime' AND schemaname = 'public' AND tablename = 'profiles') THEN
    ALTER PUBLICATION supabase_realtime ADD TABLE public.profiles;
  END IF;
END $$;

-- ---------- Seed catalogue ----------
insert into public.aja_products (id, category, name_fr, name_en, name_ar, desc_fr, desc_en, desc_ar, price, old_price, image, badge) values
('tee-noir','tops','Tee Oversize AJÀ Noir — Broderie Or','AJÀ Black Oversize Tee — Gold Embroidery','تي شيرت AJÀ أسود أوفرسايز — تطريز ذهبي','Coton lourd 240g, coupe femme oversize, logo or poitrine.','Heavy 240g cotton, women oversize fit, gold chest logo.','قطن ثقيل، قصّة نسائية واسعة، شعار ذهبي على الصدر.',79,99,'Aja_tshirt_mockup.png','BEST'),
('tee-creme','tops','Tee Crème AJÀ — Col rond','AJÀ Cream Tee — Round neck','تي شيرت AJÀ كريمي — ياقة مستديرة','Crème doux, broderie feuille de laurier manche.','Soft cream, laurel sleeve embroidery.','لون كريمي ناعم، تطريز ورق الغار على الكم.',79,99,'Aja_tshirt_mockup.png','NEW'),
('robe-creme','dresses','Robe Midi Crème AJÀ','AJÀ Cream Midi Dress','فستان AJÀ كريمي ميدي','Fluide, taille cintrée, parfaite été.','Flowy, fitted waist, perfect summer.','خفيف، خصر محدد، مثالي للصيف.',129,159,'robe-creme.jpg','-20%'),
('robe-noire','dresses','Robe Noire Élégante AJÀ','AJÀ Elegant Black Dress','فستان AJÀ أسود أنيق','Noir profond, détail or, coupe intemporelle.','Deep black, gold detail, timeless cut.','أسود عميق، تفاصيل ذهبية، قصّة خالدة.',139,169,'hero-model.jpg','LIMITED'),
('set-noir','sets','Ensemble Noir + Casquette Or','Black Set + Gold Cap','طقم أسود + قبعة ذهبية','Tee + pantalon + casquette brodée.','Tee + pants + embroidered cap.','تي شيرت + سروال + قبعة مطرزة.',159,189,'Aja_cap_mockup.png','SET'),
('set-creme','sets','Ensemble Crème Chic','Chic Cream Set','طقم كريمي شيك','Ensemble deux pièces crème, confort luxe.','Two-piece cream set, luxe comfort.','طقم قطعتين كريمي، راحة فاخرة.',149,179,'Aja_tshirt_mockup.png','SET'),
('cap-or','access','Casquette AJÀ Or','AJÀ Gold Cap','قبعة AJÀ ذهبية','Broderie or, réglable.','Gold embroidery, adjustable.','تطريز ذهبي، قابلة للتعديل.',49,65,'Aja_cap_mockup.png','TOP'),
('tote-tag','access','Tote Bag + Tag AJÀ','AJÀ Tote Bag + Tag','حقيبة AJÀ + بطاقة','Tote noir + tag doré, idéal cadeau.','Black tote + gold tag, perfect gift.','حقيبة سوداء + بطاقة ذهبية، مثالية كهدية.',39,55,'Aja_accessory_tag.png','GIFT')
on conflict (id) do update set category=excluded.category, name_fr=excluded.name_fr, name_en=excluded.name_en, name_ar=excluded.name_ar, desc_fr=excluded.desc_fr, desc_en=excluded.desc_en, desc_ar=excluded.desc_ar, price=excluded.price, old_price=excluded.old_price, image=excluded.image, badge=excluded.badge;

-- ============================================================
-- ADMIN : après le 1er login de ar.asma170@gmail.com sur
-- https://zomra-tn.github.io/AJ-/aja/admin.html, exécute :
-- ============================================================
-- update public.profiles set is_admin = true where email = 'ar.asma170@gmail.com';
-- (marche direct ici : base dédiée, trigger corrigé)
