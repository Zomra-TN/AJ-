let PRODUCTS = [ // catalogue local (fallback si cloud injoignable)
{id:'tee-noir',cat:'tops',price:79,old:99,img:'Aja_tshirt_mockup.png',badge:'BEST',
 name:{fr:'Tee Oversize AJÀ Noir — Broderie Or',en:'AJÀ Black Oversize Tee — Gold Embroidery',ar:'تي شيرت AJÀ أسود أوفرسايز — تطريز ذهبي'},
 desc:{fr:'Coton lourd 240g, coupe femme oversize, logo or poitrine.',en:'Heavy 240g cotton, women oversize fit, gold chest logo.',ar:'قطن ثقيل، قصّة نسائية واسعة، شعار ذهبي على الصدر.'}},
{id:'tee-creme',cat:'tops',price:79,old:99,img:'Aja_tshirt_mockup.png',badge:'NEW',
 name:{fr:'Tee Crème AJÀ — Col rond',en:'AJÀ Cream Tee — Round neck',ar:'تي شيرت AJÀ كريمي — ياقة مستديرة'},
 desc:{fr:'Crème doux, broderie feuille de laurier manche.',en:'Soft cream, laurel sleeve embroidery.',ar:'لون كريمي ناعم، تطريز ورق الغار على الكم.'}},
{id:'robe-creme',cat:'dresses',price:129,old:159,img:'robe-creme.jpg',badge:'-20%',
 name:{fr:'Robe Midi Crème AJÀ',en:'AJÀ Cream Midi Dress',ar:'فستان AJÀ كريمي ميدي'},
 desc:{fr:'Fluide, taille cintrée, parfaite été.',en:'Flowy, fitted waist, perfect summer.',ar:'خفيف، خصر محدد، مثالي للصيف.'}},
{id:'robe-noire',cat:'dresses',price:139,old:169,img:'hero-model.jpg',badge:'LIMITED',
 name:{fr:'Robe Noire Élégante AJÀ',en:'AJÀ Elegant Black Dress',ar:'فستان AJÀ أسود أنيق'},
 desc:{fr:'Noir profond, détail or, coupe intemporelle.',en:'Deep black, gold detail, timeless cut.',ar:'أسود عميق، تفاصيل ذهبية، قصّة خالدة.'}},
{id:'set-noir',cat:'sets',price:159,old:189,img:'Aja_cap_mockup.png',badge:'SET',
 name:{fr:'Ensemble Noir + Casquette Or',en:'Black Set + Gold Cap',ar:'طقم أسود + قبعة ذهبية'},
 desc:{fr:'Tee + pantalon + casquette brodée.',en:'Tee + pants + embroidered cap.',ar:'تي شيرت + سروال + قبعة مطرزة.'}},
{id:'set-creme',cat:'sets',price:149,old:179,img:'Aja_tshirt_mockup.png',badge:'SET',
 name:{fr:'Ensemble Crème Chic',en:'Chic Cream Set',ar:'طقم كريمي شيك'},
 desc:{fr:'Ensemble deux pièces crème, confort luxe.',en:'Two-piece cream set, luxe comfort.',ar:'طقم قطعتين كريمي، راحة فاخرة.'}},
{id:'cap-or',cat:'access',price:49,old:65,img:'Aja_cap_mockup.png',badge:'TOP',
 name:{fr:'Casquette AJÀ Or',en:'AJÀ Gold Cap',ar:'قبعة AJÀ ذهبية'},
 desc:{fr:'Broderie or, réglable, unisexe femme.',en:'Gold embroidery, adjustable.',ar:'تطريز ذهبي، قابلة للتعديل.'}},
{id:'tote-tag',cat:'access',price:39,old:55,img:'Aja_accessory_tag.png',badge:'GIFT',
 name:{fr:'Tote Bag + Tag AJÀ',en:'AJÀ Tote Bag + Tag',ar:'حقيبة AJÀ + بطاقة'},
 desc:{fr:'Tote noir + tag doré, idéal cadeau.',en:'Black tote + gold tag, perfect gift.',ar:'حقيبة سوداء + بطاقة ذهبية، مثالية كهدية.'}},
];

const I18N = {
fr:{topbar:"Livraison partout en Tunisie — Paiement à la livraison",nav_home:"Accueil",nav_shop:"Boutique",nav_story:"Notre histoire",nav_look:"Lookbook",nav_faq:"FAQ",nav_contact:"Contact",hero_title:"L'élégance intemporelle, pensée pour elle.",hero_sub:"T-shirts oversize, ensembles, robes et accessoires brodés or. Commande en 1 minute, paie à la livraison.",hero_cta1:"Découvrir la collection",hero_cta2:"Paiement à la livraison",trust1:"gouvernorats livrés",trust2:"échange facile",trust3:"paie à la porte",cat_title:"Nos univers femme",cat_all:"Tout",cat_tops:"Tops & T-shirts",cat_dresses:"Robes",cat_sets:"Ensembles",cat_access:"Accessoires",shop_title:"La Boutique",shop_sub:"Tailles XS à XL • Stock limité • Broderie or",story_title:"Authentique. Urbain. Intemporel.",story_p1:"AJÀ est née entre Paris et Tunis, pour les femmes qui veulent du simple, du beau, du durable. Coupe oversize, coton lourd, broderie or feuille de laurier.",story_p2:"Chaque pièce est pensée pour le quotidien : ville, soleil, sorties. Noir profond, crème doux, or délicat.",v1:"Coton premium 240g",v2:"Broderie or faite main",v3:"Tailles pensées femmes",look_title:"Lookbook",look_sub:"Porte-le à ta façon — ville, plage, soir.",rev_title:"Elles en parlent",r1:"« Qualité wooo ! T-shirt oversize parfait, livraison à Sfax en 2 jours, payée à la porte. »",r2:"« La broderie dorée est trop fine. La robe crème me va trop bien. »",r3:"« Service WhatsApp rapide, échange de taille sans problème. »",faq_title:"Paiement à la livraison — comment ça marche ?",q1:"Comment commander ?",a1:"Choisis tes articles + taille, clique Panier → Commander, remplis nom, téléphone et adresse. On t'appelle pour confirmer.",q2:"Combien la livraison ?",a2:"7 DT Grand Tunis, 8 DT reste Tunisie. Offerte dès 200 DT d'achat.",q3:"Puis-je vérifier avant de payer ?",a3:"Oui. Tu paies en cash à la livraison après vérification rapide du colis. Échange sous 7 jours.",q4:"Paiement en ligne ?",a4:"Bientôt e-Dinar / carte. Pour le moment : cash à la livraison uniquement, simple et sécurisé.",contact_title:"Contact",contact_h:"Réponse en < 2h, 9h–22h, 7j/7",news_l:"-10% sur ta 1ère commande :",rights:"Tous droits réservés",cart:"Panier",subtotal:"Sous-total",delivery:"Livraison",free_ship:"Livraison offerte dès 200 DT",order_btn:"Commander — Paiement à la livraison",checkout:"Finaliser commande — Paiement à la livraison",f_name:"Nom complet *",f_phone:"Téléphone *",f_gov:"Gouvernorat *",f_city:"Ville / Adresse *",f_notes:"Notes (taille, couleur...)",cod:"Cash à la livraison",soon:"bientôt",confirm:"Confirmer la commande",confirm_sub:"On t'appelle pour confirmer avant expédition.",succ_t:"Merci ! Commande reçue.",succ_n:"N° commande :",succ_p:"Garde ton téléphone ouvert, on t'appelle très vite pour confirmer. Paiement en cash à la réception.",add:"Ajouter",details:"Détails",empty:"Panier vide — découvre la collection.",total_pay:"Total à payer à la livraison",sizes:"Tailles"},
en:{topbar:"Delivery all over Tunisia — Cash on delivery",nav_home:"Home",nav_shop:"Shop",nav_story:"Our story",nav_look:"Lookbook",nav_faq:"FAQ",nav_contact:"Contact",hero_title:"Timeless elegance, designed for her.",hero_sub:"Oversize tees, sets, dresses and gold-embroidered accessories. Order in 1 minute, pay on delivery.",hero_cta1:"Shop the collection",hero_cta2:"Cash on delivery",trust1:"regions delivered",trust2:"easy exchange",trust3:"pay at door",cat_title:"Our women universes",cat_all:"All",cat_tops:"Tops & Tees",cat_dresses:"Dresses",cat_sets:"Sets",cat_access:"Accessories",shop_title:"The Shop",shop_sub:"Sizes XS to XL • Limited stock • Gold embroidery",story_title:"Authentic. Urban. Timeless.",story_p1:"AJÀ was born between Paris and Tunis, for women who want simple, beautiful, durable. Oversize fit, heavy cotton, gold laurel embroidery.",story_p2:"Each piece is made for daily life: city, sun, nights out. Deep black, soft cream, delicate gold.",v1:"Premium 240g cotton",v2:"Handmade gold embroidery",v3:"Women-fit sizes",look_title:"Lookbook",look_sub:"Wear it your way — city, beach, night.",rev_title:"They love it",r1:"“Amazing quality! Perfect oversize tee, delivered to Sfax in 2 days, paid at door.”",r2:"“The gold embroidery is so fine. The cream dress fits me perfectly.”",r3:"“Fast WhatsApp service, easy size exchange.”",faq_title:"Cash on delivery — how it works?",q1:"How to order?",a1:"Pick items + size, click Cart → Order, fill name, phone and address. We call to confirm.",q2:"Delivery fee?",a2:"7 DT Greater Tunis, 8 DT rest of Tunisia. Free over 200 DT.",q3:"Can I check before paying?",a3:"Yes. You pay cash on delivery after quick check. 7-day exchange.",q4:"Online payment?",a4:"Soon e-Dinar / card. For now: cash on delivery only, simple and safe.",contact_title:"Contact",contact_h:"Reply in < 2h, 9am–10pm, 7/7",news_l:"-10% on your 1st order:",rights:"All rights reserved",cart:"Cart",subtotal:"Subtotal",delivery:"Delivery",free_ship:"Free delivery over 200 DT",order_btn:"Order — Cash on delivery",checkout:"Checkout — Cash on delivery",f_name:"Full name *",f_phone:"Phone *",f_gov:"Region *",f_city:"City / Address *",f_notes:"Notes (size, color...)",cod:"Cash on delivery",soon:"soon",confirm:"Confirm order",confirm_sub:"We call you to confirm before shipping.",succ_t:"Thank you! Order received.",succ_n:"Order No:",succ_p:"Keep your phone on, we call very soon to confirm. Pay cash on receipt.",add:"Add",details:"Details",empty:"Empty cart — discover the collection.",total_pay:"Total to pay on delivery",sizes:"Sizes"},
ar:{topbar:"التوصيل لكامل تونس — الدفع عند الاستلام",nav_home:"الرئيسية",nav_shop:"المتجر",nav_story:"قصتنا",nav_look:"لوك بوك",nav_faq:"أسئلة",nav_contact:"اتصل بنا",hero_title:"أناقة خالدة، مصممة لها.",hero_sub:"تي شيرتات واسعة، أطقم، فساتين وإكسسوارات بتطريز ذهبي. اطلبي في دقيقة وادفعي عند الاستلام.",hero_cta1:"اكتشفي المجموعة",hero_cta2:"الدفع عند الاستلام",trust1:"ولاية نوصلو لها",trust2:"تبديل سهل",trust3:"تخلصي عند الباب",cat_title:"عوالم AJÀ للنساء",cat_all:"الكل",cat_tops:"توب وتي شيرت",cat_dresses:"فساتين",cat_sets:"أطقم",cat_access:"إكسسوارات",shop_title:"المتجر",shop_sub:"مقاسات XS إلى XL • كمية محدودة • تطريز ذهبي",story_title:"أصيل. عصري. خالد.",story_p1:"ولدت AJÀ بين باريس وتونس، للنساء اللي يحبو البساطة والجمال والجودة. قصّة واسعة، قطن ثقيل، تطريز ذهبي.",story_p2:"كل قطعة مصممة للحياة اليومية: مدينة، شمس، سهرات. أسود عميق، كريمي ناعم، ذهبي راقي.",v1:"قطن فاخر 240غ",v2:"تطريز ذهبي يدوي",v3:"مقاسات نسائية",look_title:"لوك بوك",look_sub:"البسيها على طريقتك — مدينة، بحر، سهرة.",rev_title:"شنو قالو علينا",r1:"« جودة روعة! تي شيرت مثالي، وصلني لصفاقس في يومين وخلصت عند الباب. »",r2:"« التطريز الذهبي يجنن. الفستان الكريمي جاني parfait. »",r3:"« خدمة واتساب سريعة، بدلت المقاس بلا مشكلة. »",faq_title:"الدفع عند الاستلام — كيفاش؟",q1:"كيفاش نعدي كوموند؟",a1:"اختاري المقال + المقاس، انزلي على Panier ثم Commander، عمري الاسم والهاتف والعنوان. نكلموك للتأكيد.",q2:"بقداش التوصيل؟",a2:"7 د تونس الكبرى، 8 د بقية الولايات. بلاش فوق 200 د.",q3:"نجم نشوف قبل ما نخلص؟",a3:"أي. تخلصي كاش عند الاستلام بعد ما تشوفي الكولي. التبديل خلال 7 أيام.",q4:"الخلاص بالانترنت؟",a4:"قريب e-Dinar / بطاقة. توا: كاش عند الاستلام فقط، سهل وآمن.",contact_title:"اتصل بنا",contact_h:"نجاوبو في أقل من ساعتين، 9ص–10م",news_l:"-10% على أول كوموند:",rights:"كل الحقوق محفوظة",cart:"السلة",subtotal:"المجموع",delivery:"التوصيل",free_ship:"توصيل مجاني فوق 200 د",order_btn:"عدي كوموند — الدفع عند الاستلام",checkout:"تأكيد الطلب — الدفع عند الاستلام",f_name:"الاسم الكامل *",f_phone:"الهاتف *",f_gov:"الولاية *",f_city:"المدينة / العنوان *",f_notes:"ملاحظات (مقاس، لون...)",cod:"كاش عند الاستلام",soon:"قريبا",confirm:"أكدي الطلب",confirm_sub:"نكلموك للتأكيد قبل الشحن.",succ_t:"شكرا! وصلتنا الكوموند.",succ_n:"رقم الطلب:",succ_p:"خلي تليفونك محلول، نكلموك للتأكيد. الخلاص كاش عند الاستلام.",add:"أضيفي",details:"تفاصيل",empty:"السلة فارغة — اكتشفي المجموعة.",total_pay:"المجموع عند الاستلام",sizes:"المقاسات"}
};

const GOVS = ["Tunis","Ariana","Ben Arous","Manouba","Nabeul","Zaghouan","Bizerte","Béja","Jendouba","Kef","Siliana","Sousse","Monastir","Mahdia","Sfax","Kairouan","Kasserine","Sidi Bouzid","Gabès","Médenine","Tataouine","Gafsa","Tozeur","Kebili"];

let lang = localStorage.getItem('aja_lang') || 'fr';
let cart = JSON.parse(localStorage.getItem('aja_cart') || '[]');
let filter = 'all';

// ---------- Supabase cloud (optionnel, fallback local) ----------
let ajaCloud = null;
async function syncProducts(){
  try{
    if(!window.AJA_SUPABASE_URL || !window.AJA_SUPABASE_ANON || !window.supabase) return;
    ajaCloud = window.supabase.createClient(window.AJA_SUPABASE_URL, window.AJA_SUPABASE_ANON);
    const {data, error} = await ajaCloud.from('aja_products').select('*').eq('active', true).order('created_at');
    if(error || !data || !data.length) return;
    PRODUCTS = data.map(r=>({id:r.id, cat:r.category, price:+r.price, old:+(r.old_price||r.price), img:r.image, badge:r.badge||'',
      name:{fr:r.name_fr||r.id, en:r.name_en||r.name_fr||r.id, ar:r.name_ar||r.name_fr||r.id},
      desc:{fr:r.desc_fr||'', en:r.desc_en||'', ar:r.desc_ar||''}}));
    renderProducts(); renderCart();
  }catch(e){/* offline → catalogue local */}
}
async function pushOrderCloud(order){
  try{
    if(!ajaCloud){
      if(!window.AJA_SUPABASE_URL || !window.AJA_SUPABASE_ANON || !window.supabase) return false;
      ajaCloud = window.supabase.createClient(window.AJA_SUPABASE_URL, window.AJA_SUPABASE_ANON);
    }
    const {error} = await ajaCloud.from('aja_orders').insert([{id:order.num, customer:{name:order.name, phone:order.phone, gov:order.gov, address:order.address, notes:order.notes}, items:order.items, total:order.total, status:'new'}]);
    return !error;
  }catch(e){return false;}
}

const $ = s => document.querySelector(s);
const t = k => (I18N[lang] && I18N[lang][k]) || I18N.fr[k] || k;

function setLang(l){
  lang=l; localStorage.setItem('aja_lang',l);
  document.getElementById('htmlRoot').lang=l;
  document.documentElement.dir = l==='ar'?'rtl':'ltr';
  document.body.classList.toggle('ar',l==='ar');
  document.querySelectorAll('.lang-btn').forEach(b=>b.classList.toggle('active',b.dataset.lang===l));
  document.querySelectorAll('[data-i18n]').forEach(el=>{el.textContent=t(el.dataset.i18n)});
  renderProducts(); renderCart(); fillGovs();
}
function fillGovs(){
  const s=$('#govSelect'); if(!s) return; s.innerHTML='';
  GOVS.forEach(g=>{const o=document.createElement('option');o.value=g;o.textContent=g;s.appendChild(o)});
}
function renderProducts(){
  const grid=$('#productGrid'); grid.innerHTML='';
  PRODUCTS.filter(p=>filter==='all'||p.cat===filter).forEach(p=>{
    const d=document.createElement('div'); d.className='card';
    d.innerHTML=`<div class="card-img"><span class="badge">${p.badge}</span><img loading="lazy" src="${p.img}" alt="${p.name[lang]}"/></div>
    <div class="card-body"><h3>${p.name[lang]}</h3><p class="muted" style="font-size:13px">${p.desc[lang]}</p>
    <div class="price">${p.price} DT <s>${p.old} DT</s></div>
    <div class="sizes"><span>XS</span><span>S</span><span>M</span><span>L</span><span>XL</span></div>
    <div class="card-actions"><button class="small-btn" data-act="view" data-id="${p.id}">${t('details')}</button><button class="small-btn dark" data-act="add" data-id="${p.id}">+ ${t('add')}</button></div></div>`;
    grid.appendChild(d);
  });
}
function saveCart(){localStorage.setItem('aja_cart',JSON.stringify(cart));renderCart();}
function cartTotals(){
  const sub=cart.reduce((s,i)=>s+i.price*i.qty,0);
  const ship=sub===0?0:(sub>=200?0:7);
  return{sub,ship,total:sub+ship};
}
function renderCart(){
  const box=$('#cartItems'); const {sub,ship,total}=cartTotals();
  $('#cartCount').textContent=cart.reduce((s,i)=>s+i.qty,0);
  $('#subtotal').textContent=sub+' DT'; $('#shipCost').textContent=ship+' DT'; $('#grandTotal').textContent=total+' DT';
  const ct=$('#checkoutTotal'); if(ct) ct.textContent=total+' DT';
  document.querySelectorAll('[data-i18n]').forEach(el=>{if(['subtotal','delivery'].includes(el.dataset.i18n)) el.textContent=t(el.dataset.i18n)});
  if(!cart.length){box.innerHTML=`<p class="muted center">${t('empty')}</p>`;}
  else box.innerHTML=cart.map((i,idx)=>`<div class="cart-item"><img src="${i.img}"/><div><strong style="font-size:14px">${i.name}</strong><br/><small>${i.size} • ${i.price} DT</small><div class="qty"><button data-q="-1" data-i="${idx}">−</button>${i.qty}<button data-q="1" data-i="${idx}">+</button></div></div><button data-rm="${idx}" style="border:0;background:none;cursor:pointer">✕</button></div>`).join('');
  const wa=$('#waOrder');
  const msg=encodeURIComponent(`Salem AJÀ! Nheb na3mel commande: ${cart.map(i=>`${i.name} (${i.size}) x${i.qty}`).join(', ')} — Total ${total} DT`);
  wa.href=`https://wa.me/21600000000?text=${msg}`; wa.textContent='WhatsApp Order';
}
function openDrawer(o){$('#cartDrawer').classList.toggle('open',o);$('#overlay').classList.toggle('show',o);}
function openProduct(id){
  const p=PRODUCTS.find(x=>x.id===id); if(!p) return;
  $('#productBox').innerHTML=`<div class="drawer-head"><h3>${p.name[lang]}</h3><button onclick="document.getElementById('productModal').classList.remove('open')">✕</button></div>
  <img src="${p.img}" style="border-radius:16px;margin:12px 0"/>
  <p>${p.desc[lang]}</p><div class="price" style="margin:8px 0">${p.price} DT <s>${p.old} DT</s></div>
  <label>${t('sizes')}<select id="pSize"><option>XS</option><option selected>M</option><option>L</option><option>XL</option><option>S</option></select></label>
  <button class="btn btn-dark full" id="pAdd">+ ${t('add')} — ${p.price} DT</button>`;
  $('#productModal').classList.add('open');
  $('#pAdd').onclick=()=>{addToCart(p.id,$('#pSize').value);$('#productModal').classList.remove('open');openDrawer(true);};
}
function addToCart(id,size='M'){
  const p=PRODUCTS.find(x=>x.id===id);
  const found=cart.find(i=>i.id===id&&i.size===size);
  if(found) found.qty++;
  else cart.push({id,size,qty:1,price:p.price,name:p.name[lang],img:p.img});
  // refresh names to current lang
  cart.forEach(i=>{const pp=PRODUCTS.find(x=>x.id===i.id); if(pp) i.name=pp.name[lang];});
  saveCart();
}

document.addEventListener('click',e=>{
  const lb=e.target.closest('.lang-btn'); if(lb){setLang(lb.dataset.lang);return;}
  const cat=e.target.closest('.cat'); if(cat){document.querySelectorAll('.cat').forEach(c=>c.classList.remove('active'));cat.classList.add('active');filter=cat.dataset.filter;renderProducts();return;}
  const ab=e.target.closest('[data-act]'); if(ab){if(ab.dataset.act==='add'){addToCart(ab.dataset.id);openDrawer(true);}else openProduct(ab.dataset.id);return;}
  const q=e.target.closest('[data-q]'); if(q){const i=+q.dataset.i;cart[i].qty+=+q.dataset.q;if(cart[i].qty<1)cart.splice(i,1);saveCart();return;}
  const rmBtn=e.target.closest('[data-rm]'); if(rmBtn){const idx=+rmBtn.dataset.rm;cart.splice(idx,1);saveCart();return;}
});
$('#openCart').onclick=()=>openDrawer(true);
$('#closeCart').onclick=()=>openDrawer(false);
$('#overlay').onclick=()=>{openDrawer(false);};
$('#burger').onclick=()=>$('#nav').classList.toggle('open');
document.querySelectorAll('#nav a').forEach(a=>a.onclick=()=>$('#nav').classList.remove('open'));
$('#goCheckout').onclick=()=>{if(!cart.length){alert(t('empty'));return;}openDrawer(false);$('#checkoutForm').style.display='';$('#orderSuccess').style.display='none';$('#checkoutModal').classList.add('open');renderCart();};
$('#closeCheckout').onclick=()=>$('#checkoutModal').classList.remove('open');
$('#productModal').addEventListener('click',e=>{if(e.target.id==='productModal')e.target.classList.remove('open')});
$('#checkoutModal').addEventListener('click',e=>{if(e.target.id==='checkoutModal')e.target.classList.remove('open')});
$('#newsletter').onsubmit=e=>{e.preventDefault();$('#newsMsg').textContent='✓ Merci! Code: AJA10';$('#newsInput').value='';};
$('#successClose').onclick=()=>$('#checkoutModal').classList.remove('open');
$('#checkoutForm').onsubmit=async e=>{
  e.preventDefault();
  const fd=new FormData(e.target);
  const phone=(fd.get('phone')||'').toString().replace(/\D/g,'');
  if(phone.length<8){alert('Vérifie ton numéro / Check phone / تحقق من الرقم');return;}
  const {total}=cartTotals();
  const num='AJ-'+Math.floor(1000+Math.random()*9000);
  const order={num,date:new Date().toISOString(),items:cart,total,name:fd.get('name'),phone:fd.get('phone'),gov:fd.get('gov'),address:fd.get('address'),notes:fd.get('notes')};
  const orders=JSON.parse(localStorage.getItem('aja_orders')||'[]');
  orders.push(order);
  localStorage.setItem('aja_orders',JSON.stringify(orders));
  pushOrderCloud(order); // en ligne si possible, sinon copie locale gardée
  $('#orderNum').textContent=num;
  e.target.style.display='none';$('#orderSuccess').style.display='';
  cart=[];saveCart();
};
setLang(lang); syncProducts();
