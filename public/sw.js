/* Learn Raspberry Pi: offline support.
   Pages: network first, cached copy when offline.
   Language files, icons, three.js and fonts: served from cache, refreshed in the background. */
const V = 'lrp-v2';
const CORE = ['/', '/favicon.svg', '/icon-192.png', '/manifest.webmanifest'];
const CDN = ['cdnjs.cloudflare.com', 'fonts.googleapis.com', 'fonts.gstatic.com'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(V).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(ks => Promise.all(ks.filter(k => k !== V).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const r = e.request;
  if (r.method !== 'GET') return;
  const u = new URL(r.url);
  if (r.mode === 'navigate') {
    e.respondWith(fetch(r).then(res => {
      if (res.ok && u.pathname === '/') { const c = res.clone(); caches.open(V).then(x => x.put('/', c)); }
      return res;
    }).catch(() => caches.match('/')));
    return;
  }
  if (u.origin !== location.origin && !CDN.includes(u.host)) return;
  if (u.pathname === '/sw.js') return;
  e.respondWith(caches.open(V).then(async c => {
    const hit = await c.match(r);
    const net = fetch(r).then(res => {
      if (res.ok || res.type === 'opaque') c.put(r, res.clone());
      return res;
    }).catch(() => hit || Response.error());
    if (hit) { e.waitUntil(net.catch(() => {})); return hit; }
    return net;
  }));
});
