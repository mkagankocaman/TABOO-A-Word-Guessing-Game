/**
 * TABOO WORD GAME - SERVICE WORKER (OFFLINE PWA ENGINE)
 */

const CACHE_NAME = 'taboo-cache-v2';

const PRECACHE_ASSETS = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './i18n.js',
  './cards_tr.js',
  './cards_en.js',
  './manifest.json',
  './icons/icon.svg'
];

// 1. Kurulum: Tüm statik dosyaları ve dinamik kart havuzlarını önbelleğe al
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(PRECACHE_ASSETS);
      })
      .then(() => self.skipWaiting())
  );
});

// 2. Aktivasyon: Eski sürüm önbelleklerini temizle ve kontrolü hemen devral
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    }).then(() => self.clients.claim())
  );
});

// 3. İstek Yakalama (Fetch): Cache-First / Stale-While-Revalidate hibrit stratejisi
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  // Sadece HTTP/HTTPS protokollerini işle (chrome-extension vb. hariç)
  if (!event.request.url.startsWith('http')) return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // Önbellekte varsa hemen döndür, arka planda ağı kontrol et (Stale-While-Revalidate)
      if (cachedResponse) {
        if (event.request.url.startsWith(self.location.origin)) {
          fetch(event.request)
            .then((networkResponse) => {
              if (networkResponse && networkResponse.status === 200) {
                const responseClone = networkResponse.clone();
                caches.open(CACHE_NAME).then((cache) => {
                  cache.put(event.request, responseClone);
                });
              }
            })
            .catch(() => {
              // Çevrimdışı durumda sessizce devam et
            });
        }
        return cachedResponse;
      }

      // Önbellekte yoksa ağdan çek ve önbelleğe yaz
      return fetch(event.request)
        .then((networkResponse) => {
          if (!networkResponse || networkResponse.status !== 200 || networkResponse.type === 'opaque') {
            return networkResponse;
          }
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
          return networkResponse;
        })
        .catch(() => {
          // Ağ yoksa ve sayfa gezintisi ise index.html döndür
          if (event.request.headers.get('accept')?.includes('text/html')) {
            return caches.match('./index.html');
          }
        });
    })
  );
});
