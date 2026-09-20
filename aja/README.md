# AJÀ — Site Femme (FR/EN/AR, COD)

Marque AJÀ — Authentique • Urbain • Intemporel. E-commerce vitrine + panier + paiement à la livraison.

## Ouvrir en local
Ouvre `aja/index.html` dans le navigateur. Aucun build requis.

## Pages
- `index.html` — boutique complète (hero, shop, story, lookbook, FAQ COD, contact)
- `admin.html` — dashboard admin (commandes, export CSV)

## Admin
- URL : `admin.html`
- Email autorisé : `ar.asma170@gmail.com`
- Mot de passe par défaut : `Aja2026!` (change-le après 1ère connexion)
- Stockage : `localStorage` du navigateur (`aja_orders`). Pour un admin partagé multi-appareils, brancher Supabase.

## GitHub Pages
1. Crée un repo public `aja-site` sur GitHub
2. Push ce dossier à la racine
3. Settings → Pages → Deploy from branch → `main` / `/root`
4. Site visible sur `https://<user>.github.io/aja-site/`

## Structure
```
aja/
  index.html  boutique trilingue + panier COD
  admin.html  login admin + commandes
  styles.css  thème noir/cream/gold
  app.js      produits, i18n FR/EN/AR, cart, checkout
  hero-model.jpg / robe-creme.jpg  visuels
```
