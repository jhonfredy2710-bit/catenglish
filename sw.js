// Service worker mínimo, requerido por PWABuilder para el empaquetado Android.
// No cachea nada: solo deja pasar las peticiones normales a la red.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
