const CACHE_NAME = "educlick-v1";

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll([
        "/404.html",
        "/en_construccion.html",
        "/firebase.json",
        "/index.html",
        "/jugar.html",
        "/main.html",
        "/manifest.json",
        "/puntajes.html",
        "/service-worker.js",
        "/.vscode/settings.json",
        "/css/estilo.css",
        "/css/estilo_general.css",
        "/css/estilo_logros.css",
        "/css/estilo_main.css",
        "/games/antonimos/carrera.html",
        "/games/estados/salta.html",
        "/games/floppy/flappy.html",
        "/games/fuerzas/squidgame.html",
        "/games/probabilidades/index.html",
        "/games/metales/obstaculos.html",
        "/games/prefijos/prefijos.html",
        "/games/soga/ahorcado.html",
        "/games/sufijos/sufijos.html",
        "/games/sinonimos/memoria.html",
        "/games/probabilidades/index.html",
        "/icons/exit.svg",
        "/icons/home.svg",
        "/icons/videogame.svg",
        "/icons/win.svg",
        "/img/educlick-logo-white.png",
        "/img/educlick-logo.png",
        "/img/fondo_juegos.jpg",
        "/img/fondo_salon.jpg",
        "/img/fondo.png",
        "/img/juego_cuerda.webp",
        "/img/kid_playing.png",
        "/img/letras.webp",
        "/img/platon.webp",
        "/img/probabilidades.jpg",
        "/img/squid_background.jpg",
        "/img/user.avif",
        "/js/check_loggin.js",
        "/js/sw-register.js",
        "/audio/correct.mp3",
        "/audio/error.mp3",
        "/audio/timeout.mp3",
        "/audio/playground_kids.mp3",
        "/audio/squidgame.mp3",
      ]);
    })
  );
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      );
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
