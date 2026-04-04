const NOME_CACHE = 'cache-busca-cep-v1';
const ARQUIVOS_CACHE = [
  './',
  './index.html',
  './css/materialize.css',
  './css/style.css',
  './js/materialize.js',
  './js/script.js'
];

self.addEventListener('install', evento => {
  evento.waitUntil(
    caches.open(NOME_CACHE).then(cache => {
      return cache.addAll(ARQUIVOS_CACHE);
    })
  );
});

self.addEventListener('fetch', evento => {
  evento.respondWith(
    caches.match(evento.request).then(resposta => {
      return resposta || fetch(evento.request);
    })
  );
});