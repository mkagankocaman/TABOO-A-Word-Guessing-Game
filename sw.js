/**
 * TABOO WORD GAME - SERVICE WORKER (OFFLINE PWA ENGINE)
 */

const CACHE_NAME = 'taboo-cache-v3';

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

// 1. Kurulum: Tüm statik dosyaları önbelleğe al ve yeni Service Worker'ı hemen aktif et
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(PRECACHE_ASSETS);
      })
      .then(() => self.skipWaiting())
  );
});

// 2. Aktivasyon: Eski sürüm önbelleklerini temizle ve tüm açık sekmelerin kontrolünü anında devral
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

// 3. İstek Yakalama (Fetch)
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  // Sadece HTTP/HTTPS protokollerini işle
  if (!event.request.url.startsWith('http')) return;

  const isNavigation = event.request.mode === 'navigate' || 
                       (event.request.headers.get('accept') && event.request.headers.get('accept').includes('text/html'));

  // A. HTML / Sayfa Gezintisi: NETWORK-FIRST (Çevrimiçiyken daima en güncel arayüzü getir, çevrimdışıysa önbellekten sun)
  if (isNavigation) {
    event.respondWith(
      fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseClone);
            });
          }
          return networkResponse;
        })
        .catch(() => {
          return caches.match('./index.html') || caches.match('./');
        })
    );
    return;
  }

  // B. Statik Dosyalar (CSS, JS, İkonlar, Kartlar): STALE-WHILE-REVALIDATE (Önbellekten hızlı sun, arka planda güncelle)
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      const fetchPromise = fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseClone);
            });
          }
          return networkResponse;
        })
        .catch(() => {
          // Çevrimdışıyken hata fırlatma, önbellekte varsa zaten dönmüştür
        });

      return cachedResponse || fetchPromise;
    })
  );
});
