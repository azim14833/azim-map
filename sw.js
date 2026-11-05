/* AZİMap servis çalışanı: uygulama dosyasını ve kütüphaneleri çevrimdışı önbelleğe alır; harita kutucukları her zaman ağdan gelir. */
const V='azimap-v6';
const SHELL=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>Promise.all(SHELL.map(u=>c.add(u).catch(()=>{})))).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==V).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{
  const r=e.request;if(r.method!=='GET')return;
  const u=new URL(r.url);
  const own=u.origin===location.origin,lib=/(^|\.)(cdnjs\.cloudflare\.com|cdn\.jsdelivr\.net)$/.test(u.hostname);
  if(!own&&!lib)return;                       /* harita kutucukları ve diğer ağ istekleri: ağdan */
  if(own&&(r.mode==='navigate'||u.pathname.endsWith('/')||u.pathname.endsWith('index.html'))){   /* uygulama sayfası: önce ağ (yeni sürüm hemen gelsin), çevrimdışıysa önbellek */
    e.respondWith(fetch(r).then(n=>{if(n&&n.ok){const c=n.clone();caches.open(V).then(x=>x.put(r,c)).catch(()=>{});}return n;}).catch(()=>caches.match(r,{ignoreSearch:true}).then(h=>h||caches.match('./index.html'))));
    return;
  }
  e.respondWith(caches.match(r,{ignoreSearch:true}).then(hit=>{
    const net=fetch(r).then(n=>{if(n&&(n.ok||n.type==='opaque')){const c=n.clone();caches.open(V).then(x=>x.put(r,c)).catch(()=>{});}return n;}).catch(()=>hit);
    return hit||net;
  }));
});
