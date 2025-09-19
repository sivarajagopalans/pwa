// Basic service worker caching to enable offline
const cacheName = 'profile-card-cache-v1';
const assetsToCache = [
  './',
  './index.html',
  './manifest.json',
  'https://via.placeholder.com/300x200'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(assetsToCache);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      return cachedResponse || fetch(event.request);
    })
  );
});
