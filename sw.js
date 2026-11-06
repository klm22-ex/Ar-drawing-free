const CACHE_NAME = "ar-drawing-free-v4";
const APP_FILES = ["./","./index.html","./manifest.webmanifest","./icons/icon-180.png","./icons/icon-192.png","./icons/icon-512.png","./models/house.svg","./models/cat.svg","./models/flower.svg","./models/butterfly.svg","./models/fish.svg","./models/tree.svg"].map(path => new URL(path, self.location.href).href);
const INDEX_URL = new URL("./index.html", self.location.href).href;
self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_FILES)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", event => {
  if (event.request.method !== "GET" || new URL(event.request.url).origin !== self.location.origin) return;
  if (event.request.mode === "navigate") {
    event.respondWith(fetch(event.request).then(response => {
      const copy=response.clone();caches.open(CACHE_NAME).then(cache=>cache.put(INDEX_URL,copy));return response;
    }).catch(()=>caches.match(INDEX_URL)));
    return;
  }
  event.respondWith(caches.match(event.request).then(cached => {
    if(cached)return cached;
    return fetch(event.request).then(response => {
      if(response.ok){const copy=response.clone();caches.open(CACHE_NAME).then(cache=>cache.put(event.request,copy));}
      return response;
    });
  }));
});