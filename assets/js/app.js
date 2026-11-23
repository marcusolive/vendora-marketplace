const ICON={
 head:c=>`<svg viewBox="0 0 100 100"><path d="M18 58a32 32 0 0 1 64 0" fill="none" stroke="#1f2a37" stroke-width="7"/><rect x="10" y="52" width="18" height="30" rx="7" fill="${c}"/><rect x="72" y="52" width="18" height="30" rx="7" fill="${c}"/></svg>`,
 watch:c=>`<svg viewBox="0 0 100 100"><rect x="38" y="6" width="24" height="22" rx="5" fill="#1f2a37"/><rect x="38" y="72" width="24" height="22" rx="5" fill="#1f2a37"/><rect x="26" y="24" width="48" height="52" rx="14" fill="#1f2a37"/><rect x="32" y="30" width="36" height="40" rx="9" fill="${c}"/><path d="M42 50h8v-8" stroke="#fff" stroke-width="3" fill="none"/></svg>`,
 laptop:c=>`<svg viewBox="0 0 100 100"><rect x="18" y="22" width="64" height="42" rx="4" fill="#1f2a37"/><rect x="23" y="27" width="54" height="32" fill="${c}"/><path d="M8 68h84l-6 8H14z" fill="#9aa6b5"/></svg>`,
 phone:c=>`<svg viewBox="0 0 100 100"><rect x="30" y="8" width="40" height="84" rx="9" fill="#1f2a37"/><rect x="34" y="16" width="32" height="64" rx="3" fill="${c}"/><circle cx="50" cy="86" r="3" fill="#9aa6b5"/></svg>`,
 speaker:c=>`<svg viewBox="0 0 100 100"><rect x="28" y="14" width="44" height="72" rx="20" fill="${c}"/><circle cx="50" cy="58" r="14" fill="#1f2a37"/><circle cx="50" cy="32" r="6" fill="#1f2a37"/></svg>`,
 coffee:c=>`<svg viewBox="0 0 100 100"><rect x="24" y="10" width="52" height="16" rx="4" fill="#1f2a37"/><rect x="28" y="26" width="44" height="46" fill="${c}"/><rect x="38" y="52" width="24" height="20" rx="3" fill="#fff" stroke="#1f2a37" stroke-width="3"/><rect x="20" y="72" width="60" height="12" rx="4" fill="#1f2a37"/></svg>`,
 fryer:c=>`<svg viewBox="0 0 100 100"><rect x="22" y="14" width="56" height="70" rx="18" fill="${c}"/><rect x="30" y="46" width="40" height="30" rx="6" fill="#1f2a37"/><circle cx="50" cy="30" r="7" fill="#fff"/></svg>`,
 lamp:c=>`<svg viewBox="0 0 100 100"><path d="M30 18h40l10 30H20z" fill="${c}"/><rect x="47" y="48" width="6" height="30" fill="#1f2a37"/><rect x="32" y="78" width="36" height="8" rx="4" fill="#1f2a37"/></svg>`,
 shoe:c=>`<svg viewBox="0 0 100 100"><path d="M8 62c10 0 20-4 28-14l12 8c10 6 28 8 44 10v12H8z" fill="${c}"/><path d="M8 74h84" stroke="#1f2a37" stroke-width="6"/><path d="M40 52l6 4M46 48l6 4" stroke="#fff" stroke-width="3"/></svg>`,
 bag:c=>`<svg viewBox="0 0 100 100"><path d="M22 34h56l-4 54H26z" fill="${c}"/><path d="M36 34v-6a14 14 0 0 1 28 0v6" fill="none" stroke="#1f2a37" stroke-width="5"/></svg>`,
 book:c=>`<svg viewBox="0 0 100 100"><rect x="22" y="12" width="56" height="76" rx="4" fill="${c}"/><rect x="22" y="12" width="10" height="76" fill="#1f2a37" opacity=".35"/><rect x="40" y="28" width="28" height="5" fill="#fff"/><rect x="40" y="38" width="20" height="4" fill="#fff" opacity=".8"/></svg>`,
 game:c=>`<svg viewBox="0 0 100 100"><path d="M20 36h60a14 14 0 0 1 13 18l-5 18a10 10 0 0 1-17 3l-8-9H37l-8 9a10 10 0 0 1-17-3L7 54a14 14 0 0 1 13-18z" fill="${c}"/><path d="M28 50h12M34 44v12" stroke="#1f2a37" stroke-width="4"/><circle cx="66" cy="48" r="3.5" fill="#1f2a37"/><circle cx="74" cy="55" r="3.5" fill="#1f2a37"/></svg>`
};
const P=[
 {id:1,n:'Wireless Noise-Cancelling Headphones, 40h battery',c:'Electronics',i:'head',col:'#ff7a00',p:89.99,o:159.99,r:4.6,rv:18234,free:1,deal:1,stock:4,b:'deal'},
 {id:2,n:'Smartwatch with GPS, heart rate and AMOLED display',c:'Electronics',i:'watch',col:'#3fb6ff',p:129.00,o:199.00,r:4.4,rv:9120,free:1,deal:1,b:'deal'},
 {id:3,n:'14" Ultrabook Laptop, 16GB RAM, 512GB SSD',c:'Electronics',i:'laptop',col:'#8b5cf6',p:479.00,o:649.00,r:4.5,rv:3410,free:1,deal:0,b:'best'},
 {id:4,n:'Smartphone 128GB, 50MP camera, 5G',c:'Electronics',i:'phone',col:'#12c2a3',p:249.00,o:329.00,r:4.3,rv:7802,free:1,deal:1,stock:7},
 {id:5,n:'Portable Bluetooth Speaker, waterproof IPX7',c:'Electronics',i:'speaker',col:'#e02434',p:34.99,o:59.99,r:4.7,rv:25611,free:1,deal:1,b:'best'},
 {id:6,n:'Programmable Coffee Maker, 12 cups',c:'Home',i:'coffee',col:'#c96a3a',p:49.90,o:69.90,r:4.5,rv:6021,free:1,deal:0},
 {id:7,n:'Air Fryer 5.5L, digital touch panel',c:'Home',i:'fryer',col:'#2b2f36',p:79.00,o:119.00,r:4.8,rv:31204,free:1,deal:1,b:'best',stock:3},
 {id:8,n:'Smart LED Desk Lamp with wireless charger',c:'Home',i:'lamp',col:'#ffc933',p:27.50,o:null,r:4.2,rv:1890,free:0,deal:0},
 {id:9,n:'Running Sneakers, breathable mesh',c:'Fashion',i:'shoe',col:'#0b65c2',p:64.90,o:89.90,r:4.4,rv:5530,free:1,deal:1},
 {id:10,n:'Everyday Backpack, 25L laptop compartment',c:'Fashion',i:'bag',col:'#2f4a3a',p:39.90,o:null,r:4.6,rv:12210,free:1,deal:0,b:'best'},
 {id:11,n:'Best-selling Novel, paperback edition',c:'Books',i:'book',col:'#7b1fa2',p:12.99,o:18.99,r:4.7,rv:44102,free:0,deal:1},
 {id:12,n:'Wireless Game Controller for PC and console',c:'Games',i:'game',col:'#ff3e6c',p:44.99,o:64.99,r:4.5,rv:8840,free:1,deal:1,stock:5},
 {id:13,n:'Kids Graphic Novel Box Set (4 books)',c:'Books',i:'book',col:'#ff7a00',p:29.90,o:39.90,r:4.9,rv:3021,free:1,deal:0},
 {id:14,n:'Tote Bag, recycled canvas',c:'Fashion',i:'bag',col:'#e0a458',p:18.00,o:null,r:4.1,rv:640,free:0,deal:0},
 {id:15,n:'Retro Mini Console, 400 built-in games',c:'Games',i:'game',col:'#3fb6ff',p:59.00,o:89.00,r:4.0,rv:2210,free:1,deal:1},
 {id:16,n:'Over-ear Kids Headphones, volume limited',c:'Electronics',i:'head',col:'#12c2a3',p:24.99,o:34.99,r:4.3,rv:4402,free:0,deal:0}
];
const $=id=>document.getElementById(id), money=v=>'$'+v.toFixed(2);
const pct=p=>p.o?Math.round((1-p.p/p.o)*100):0;
const stars=r=>'★'.repeat(Math.floor(r))+(r%1>=.5?'½':'')+'☆'.repeat(5-Math.ceil(r));
const priceHTML=p=>{const [a,b]=p.p.toFixed(2).split('.');return `<span class="price"><sup>$</sup>${a}<sup>${b}</sup>${p.o?`<s>${money(p.o)}</s>`:''}</span>`};
const tomorrow=()=>{const d=new Date();d.setDate(d.getDate()+1);return d.toLocaleDateString('en-US',{weekday:'short',month:'short',day:'numeric'})};
let st={cat:'All',q:'',free:false,deal:false,r:0,max:500,sort:'feat'},cart={},step=0,pay='Card';

/* categories */
const CATS=['All','Electronics','Home','Fashion','Books','Games'];
$('cats').innerHTML=`<button class="hot" data-c="__deals">🔥 Today's Deals</button>`+CATS.map(c=>`<button data-c="${c}" class="${c==='All'?'on':''}">${c==='All'?'☰ All':c}</button>`).join('')+'<button data-c="All">Customer Service</button><button data-c="All">Gift Cards</button>';
$('scat').innerHTML=CATS.map(c=>`<option>${c}</option>`).join('');
$('cats').onclick=e=>{const b=e.target.closest('button');if(!b)return;if(b.dataset.c==='__deals'){$('fdeal').checked=true;st.deal=true;st.cat='All'}else st.cat=b.dataset.c;
  [...$('cats').children].forEach(x=>x.classList.toggle('on',x===b));render();$('results').scrollIntoView({behavior:'smooth'})};

/* hero carousel */
let si=0;const slides=document.querySelectorAll('.slide'),dots=document.querySelectorAll('#dots i');
setInterval(()=>{slides[si].classList.remove('on');dots[si].classList.remove('on');si=(si+1)%slides.length;slides[si].classList.add('on');dots[si].classList.add('on')},4500);
document.querySelectorAll('.cta').forEach(a=>a.onclick=e=>{e.preventDefault();st.cat=a.dataset.cat;[...$('cats').children].forEach(x=>x.classList.toggle('on',x.dataset.c===st.cat));render();$('results').scrollIntoView({behavior:'smooth'})});

/* deals strip + timer */
$('strip').innerHTML=P.filter(p=>p.deal).slice(0,6).map((p,i)=>{const claimed=[62,48,81,35,90,57][i];return `<div class="mini" data-id="${p.id}"><div class="im">${ICON[p.i](p.col)}</div><span class="off">${pct(p)}% off</span><span class="lbl">Limited deal</span><div style="font-weight:700;margin-top:4px">${money(p.p)} <small style="text-decoration:line-through">${money(p.o)}</small></div><div class="bar"><i style="width:${claimed}%"></i></div><small>${claimed}% claimed</small></div>`}).join('');
$('strip').onclick=e=>{const m=e.target.closest('.mini');if(m)openModal(+m.dataset.id)};
$('seedeals').onclick=e=>{e.preventDefault();$('fdeal').checked=true;st.deal=true;render();$('results').scrollIntoView({behavior:'smooth'})};
let left=6*3600-1;setInterval(()=>{left=left>0?left-1:6*3600;const h=String(Math.floor(left/3600)).padStart(2,'0'),m=String(Math.floor(left%3600/60)).padStart(2,'0'),s=String(left%60).padStart(2,'0');$('timer').textContent=`Ends in ${h}:${m}:${s}`},1000);

/* search with suggestions */
function suggest(){const q=$('q').value.trim().toLowerCase();if(!q){$('sugg').style.display='none';return}
  const m=P.filter(p=>p.n.toLowerCase().includes(q)||p.c.toLowerCase().includes(q)).slice(0,6);
  $('sugg').innerHTML=m.length?m.map(p=>`<div data-id="${p.id}"><span>${p.n.replace(new RegExp(q.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'),'i'),x=>`<b>${x}</b>`)}</span><small>in ${p.c}</small></div>`).join(''):'<div><small>No suggestions</small></div>';
  $('sugg').style.display='block'}
$('q').oninput=suggest;
$('q').onkeydown=e=>{if(e.key==='Enter')doSearch()};
$('go').onclick=doSearch;
$('sugg').onclick=e=>{const d=e.target.closest('[data-id]');if(d){$('sugg').style.display='none';openModal(+d.dataset.id)}};
document.addEventListener('click',e=>{if(!e.target.closest('.search'))$('sugg').style.display='none'});
function doSearch(){st.q=$('q').value.trim().toLowerCase();st.cat=$('scat').value;$('sugg').style.display='none';render();$('results').scrollIntoView({behavior:'smooth'})}

/* filters */
$('ffree').onchange=e=>{st.free=e.target.checked;render()};
$('fdeal').onchange=e=>{st.deal=e.target.checked;render()};
document.querySelectorAll('input[name=r]').forEach(r=>r.onchange=()=>{st.r=+r.value;render()});
$('fprice').oninput=e=>{st.max=+e.target.value;$('pv').textContent='$'+st.max;render()};
$('sort').onchange=e=>{st.sort=e.target.value;render()};

function list(){let l=P.filter(p=>(st.cat==='All'||p.c===st.cat)&&(!st.q||p.n.toLowerCase().includes(st.q)||p.c.toLowerCase().includes(st.q))&&(!st.free||p.free)&&(!st.deal||p.deal)&&p.r>=st.r&&p.p<=st.max);
  const s={lo:(a,b)=>a.p-b.p,hi:(a,b)=>b.p-a.p,rate:(a,b)=>b.r-a.r,off:(a,b)=>pct(b)-pct(a)}[st.sort];return s?l.sort(s):l}
function render(){const l=list();
  $('rcount').textContent=`${l.length} result${l.length===1?'':'s'}${st.q?` for "${st.q}"`:''}${st.cat!=='All'?` in ${st.cat}`:''}`;
  $('grid').innerHTML=l.length?l.map(p=>`<article class="card">${p.b==='best'?'<span class="badge best">#1 Best Seller</span>':p.deal?`<span class="badge deal">-${pct(p)}% Deal</span>`:''}
    <div class="im" data-open="${p.id}">${ICON[p.i](p.col)}</div>
    <h5 data-open="${p.id}">${p.n}</h5>
    <div class="rate"><span class="stars">${stars(p.r)}</span>${p.rv.toLocaleString('en-US')}</div>
    ${priceHTML(p)}${p.o?`<span class="save">Save ${pct(p)}%</span>`:''}
    <div class="ship">${p.free?`<b>FREE delivery</b> ${tomorrow()}`:'Delivery $4.99'}</div>
    ${p.stock?`<div class="stock">Only ${p.stock} left in stock</div>`:''}
    <button class="add" data-id="${p.id}">Add to cart</button></article>`).join(''):'<div class="empty" style="grid-column:1/-1">No products match these filters. Try clearing some of them.</div>'}
$('grid').onclick=e=>{const a=e.target.closest('.add');if(a){add(+a.dataset.id,1);a.textContent='✓ Added';a.classList.add('ok');setTimeout(()=>{a.textContent='Add to cart';a.classList.remove('ok')},1300);return}
  const o=e.target.closest('[data-open]');if(o)openModal(+o.dataset.open)};

/* product modal */
function openModal(id){const p=P.find(x=>x.id===id);
  $('modal').innerHTML=`<button class="x" id="mx" aria-label="Close">×</button><div class="im">${ICON[p.i](p.col)}</div>
  <div><small style="color:var(--link)">Visit the Vendora ${p.c} store</small><h3>${p.n}</h3><div class="rate" style="margin:6px 0"><span class="stars">${stars(p.r)}</span>${p.r} · ${p.rv.toLocaleString('en-US')} ratings</div>
  ${p.b==='best'?'<span class="badge best" style="position:static">#1 Best Seller</span>':''}<hr style="border:0;border-top:1px solid var(--line);margin:12px 0">
  ${p.o?`<span class="save" style="font-size:20px">-${pct(p)}%</span> `:''}${priceHTML(p)}
  <ul><li>Sample product for this demo store</li><li>1-year warranty and 30-day returns</li><li>Ships from and sold by Vendora</li></ul></div>
  <div class="buybox">${priceHTML(p)}<div class="ship">${p.free?`<b>FREE delivery</b> ${tomorrow()}`:'Delivery $4.99'}</div><div style="color:var(--green);font-weight:700">${p.stock?`Only ${p.stock} left`:'In stock'}</div>
  <div class="qty">Qty <select id="mq">${[1,2,3,4,5].map(n=>`<option>${n}</option>`).join('')}</select></div>
  <button class="add" id="madd" style="margin:0">Add to cart</button><button class="buy" id="mbuy">Buy now</button><small style="color:var(--muted)">🔒 Secure transaction</small></div>`;
  $('modal').classList.add('on');$('shade').classList.add('on');
  $('mx').onclick=closeAll;$('madd').onclick=()=>{add(id,+$('mq').value);closeAll()};$('mbuy').onclick=()=>{add(id,+$('mq').value);closeAll();openCart(1)}}
function closeAll(){$('modal').classList.remove('on');$('drawer').classList.remove('on');$('shade').classList.remove('on')}
$('shade').onclick=closeAll;document.addEventListener('keydown',e=>{if(e.key==='Escape')closeAll()});

/* cart */
function add(id,q){cart[id]=(cart[id]||0)+q;const c=$('count');c.textContent=Object.values(cart).reduce((a,b)=>a+b,0);c.classList.add('pop');setTimeout(()=>c.classList.remove('pop'),250);toast(`Added to cart · ${P.find(p=>p.id===id).n.split(',')[0]}`);if($('drawer').classList.contains('on'))drawCart()}
function toast(t){$('toast').textContent=t;$('toast').classList.add('on');clearTimeout(window._t);window._t=setTimeout(()=>$('toast').classList.remove('on'),1800)}
function totals(){const ids=Object.keys(cart).filter(k=>cart[k]>0);const sub=ids.reduce((a,k)=>a+P.find(p=>p.id==k).p*cart[k],0);const ship=sub===0||sub>=35?0:4.99;return {ids,sub,ship,tax:sub*.08}}
function openCart(s){step=s||0;$('drawer').classList.add('on');$('shade').classList.add('on');drawCart()}
$('cartbtn').onclick=()=>openCart(0);$('dclose').onclick=closeAll;
function drawCart(){const t=totals();$('count').textContent=t.ids.reduce((a,k)=>a+cart[k],0);
  const need=Math.max(0,35-t.sub);$('free').innerHTML=t.ids.length?`${need>0?`Add <b>${money(need)}</b> for FREE delivery`:'<b style="color:var(--green)">✓ Your order qualifies for FREE delivery</b>'}<div class="bar"><i style="width:${Math.min(100,t.sub/35*100)}%"></i></div>`:'';
  $('dtitle').textContent=['Shopping cart','Delivery address','Payment'][step];
  if(!t.ids.length){$('items').innerHTML='<p class="empty">Your cart is empty.<br>Check out today\'s deals!</p>';$('foot').innerHTML='';return}
  if(step===0)$('items').innerHTML=t.ids.map(k=>{const p=P.find(x=>x.id==k);return `<div class="it"><div class="th">${ICON[p.i](p.col)}</div><div><div style="font-size:14px;font-weight:600">${p.n}</div><small>${p.stock?'Only '+p.stock+' left':'In stock'}</small><div class="q"><button data-a="-" data-id="${k}">−</button>${cart[k]}<button data-a="+" data-id="${k}">+</button></div></div><b>${money(p.p*cart[k])}</b></div>`}).join('');
  if(step===1)$('items').innerHTML=`<div style="display:grid;gap:10px;padding:10px 0"><label>Full name<input style="width:100%;padding:10px;border:1px solid var(--line);border-radius:8px;margin-top:4px" value="Alex Sample"></label><label>Address<input style="width:100%;padding:10px;border:1px solid var(--line);border-radius:8px;margin-top:4px" value="350 5th Ave, New York, NY 10001"></label><div class="ship" style="font-size:14px">📦 Arrives <b>${tomorrow()}</b> · ${t.ship?'Standard delivery':'FREE delivery'}</div></div>`;
  if(step===2)$('items').innerHTML=`<div style="padding:10px 0;display:grid;gap:12px"><b>Choose a payment method</b><div class="pay">${['Card','PIX','PayPal'].map(m=>`<button class="${m===pay?'on':''}" data-pay="${m}">${m}</button>`).join('')}</div><div style="font-size:13.5px;color:var(--muted)">${pay==='PIX'?'A PIX QR code is generated and the order is confirmed in seconds.':pay==='PayPal'?'You will be redirected to PayPal to approve the payment.':'Card data is handled by the payment provider and never touches our servers.'}</div></div>`;
  $('items').querySelectorAll('[data-a]').forEach(b=>b.onclick=()=>{cart[b.dataset.id]+=b.dataset.a==='+'?1:-1;drawCart()});
  $('items').querySelectorAll('[data-pay]').forEach(b=>b.onclick=()=>{pay=b.dataset.pay;drawCart()});
  $('foot').innerHTML=`<div class="steps">${['Cart','Address','Payment'].map((s,i)=>`<span class="${i<=step?'on':''}">${s}</span>`).join('')}</div>
   <div class="line"><span>Subtotal</span><span>${money(t.sub)}</span></div><div class="line"><span>Delivery</span><span>${t.ship?money(t.ship):'FREE'}</span></div><div class="line"><span>Estimated tax</span><span>${money(t.tax)}</span></div>
   <div class="line t"><span>Order total</span><span>${money(t.sub+t.ship+t.tax)}</span></div>
   <button class="${step<2?'add':'buy'}" id="next" style="margin:0">${['Proceed to checkout','Continue to payment','Place your order'][step]}</button>${step?'<button id="back" style="background:none;color:var(--link)">← Back</button>':''}`;
  $('next').onclick=()=>{if(step<2){step++;drawCart()}else{closeAll();cart={};$('count').textContent=0;$('done').classList.add('on')}};
  if($('back'))$('back').onclick=()=>{step--;drawCart()}}
$('doneok').onclick=()=>$('done').classList.remove('on');

render();
