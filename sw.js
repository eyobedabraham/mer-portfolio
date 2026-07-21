<<<<<<< HEAD
const CACHE = "mer-v1";
=======
const CACHE = "mer-v2";
>>>>>>> 6386d5d (Add PWA manifest, service worker, and icons)
const ASSETS = [
  "/",
  "/index.html",
  "/manifest.json",
<<<<<<< HEAD
  // Add your CSS/JS/fonts if you host them locally (optional)
];

// Install event – cache core assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

// Activate event – clean old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((key) => key !== CACHE).map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
=======
  "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Amiri:ital,wght@0,400;0,700;1,400&display=swap",
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
];

// Install – cache core assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE)
      .then((cache) => {
        console.log("Caching assets...");
        return cache.addAll(ASSETS);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate – clean old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => {
        return Promise.all(
          keys.filter((key) => key !== CACHE)
              .map((key) => caches.delete(key))
        );
      })
      .then(() => self.clients.claim())
  );
>>>>>>> 6386d5d (Add PWA manifest, service worker, and icons)
});

// Fetch – serve from cache, fallback to network
self.addEventListener("fetch", (event) => {
  event.respondWith(
<<<<<<< HEAD
    caches.match(event.request).then((response) => response || fetch(event.request))
=======
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        return response || fetch(event.request).catch(() => {
          // Optional: fallback offline page if needed
        });
      })
>>>>>>> 6386d5d (Add PWA manifest, service worker, and icons)
  );
});
