-- ============================================================
-- AJÀ SITE — Backend partagé (Supabase, même projet que giftcard-shop)
-- À exécuter UNE FOIS dans : Supabase Dashboard > SQL Editor > New query
-- Projet : ytdgkvzzcqjaijcbupfp
-- ============================================================

-- ---------- Tables ----------
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

create table if not exists public.aja_orders (
  id text primary key,
  customer jsonb default '{}'::jsonb,
  items jsonb default '[]'::jsonb,
  total numeric default 0,
  status text default 'new',
  created_at timestamptz default now()
);

-- ---------- RLS ----------
alter table public.aja_products enable row level security;
alter table public.aja_orders enable row level security;

-- catalogue public en lecture, admin seul en écriture (réutilise public.is_admin())
drop policy if exists "aja_products_public_read" on public.aja_products;
create policy "aja_products_public_read" on public.aja_products
  for select using (true);
drop policy if exists "aja_products_write_admin" on public.aja_products;
create policy "aja_products_write_admin" on public.aja_products
  for all using (public.is_admin()) with check (public.is_admin());

-- commandes COD : tout le monde peut commander (insert public),
-- l'admin seul lit / modifie / supprime
drop policy if exists "aja_orders_insert_public" on public.aja_orders;
create policy "aja_orders_insert_public" on public.aja_orders
  for insert to anon, authenticated with check (true);
drop policy if exists "aja_orders_select_admin" on public.aja_orders;
create policy "aja_orders_select_admin" on public.aja_orders
  for select using (public.is_admin());
drop policy if exists "aja_orders_update_admin" on public.aja_orders;
create policy "aja_orders_update_admin" on public.aja_orders
  for update using (public.is_admin());
drop policy if exists "aja_orders_delete_admin" on public.aja_orders;
create policy "aja_orders_delete_admin" on public.aja_orders
  for delete using (public.is_admin());

-- ---------- Realtime (admin voit les commandes en direct) ----------
-- (idempotent : re-exécutable sans erreur 42710)
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_publication_tables WHERE pubname = 'supabase_realtime' AND schemaname = 'public' AND tablename = 'aja_orders') THEN
    ALTER PUBLICATION supabase_realtime ADD TABLE public.aja_orders;
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_publication_tables WHERE pubname = 'supabase_realtime' AND schemaname = 'public' AND tablename = 'aja_products') THEN
    ALTER PUBLICATION supabase_realtime ADD TABLE public.aja_products;
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
-- ADMIN : après le 1er login de ar.asma170@gmail.com sur aja/admin.html,
-- exécute cette ligne pour la nommer ADMIN :
-- ============================================================
-- update public.profiles set is_admin = true where email = 'ar.asma170@gmail.com';
