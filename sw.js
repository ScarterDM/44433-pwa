const CACHE='44433-pwa-v3';
const FILES=['./','./index.html','./manifest.webmanifest','./icons/icon-192.png','./icons/icon-512.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(x=>{let copy=x.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));return x}).catch(()=>caches.match('./index.html')))));
