
const CACHE_NAME = "educlick-v1";
const urlsToCache = [
  "index.html",
  "main.html",
  "perfil.html",
  "css/estilo.css",
  "js/sw-register.js",
  "manifest.json",
  "games/quiz/index.html",
  "games/ahorcado/index.html",
  "educlick.png",
  "/img/fondo.png",
  "/img/kid_playing.png",
  "/img/educlick-logo.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
