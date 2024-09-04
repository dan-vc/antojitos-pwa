const STATIC_CACHE = 'static'

const APP_SHELL = [
  'index.html',
  'contacto.html',
  'nosotros.html',
  'css/estilos.css',
  'img/logo.png',
  'img/chicharrones.jpg',
  'img/chorizo.jpg',
  'img/clasica.jpg',
  'img/deshilachado.jpg',
  'img/email.gif',
  'img/filete.jpg',
  'img/historia-1.jpg',
  'img/mapa.jpg',
  'img/muslo.jpeg',
  'img/pecho.jpg',
  'img/pierna.jpg',
  'img/quienes-somos.jpg',
  'img/quienes-somos2.jpg',
  'img/royal.jpg',
  'img/salchipapa.jpg',
  'img/servicios.jpg',
  'img/wsp-icon.png',
  'manifest.json'
]

self.addEventListener('install', e => {
  const cacheStatic = caches
    .open(STATIC_CACHE)
    .then(cache => cache.addAll(APP_SHELL))

  e.waitUntil(cacheStatic)
})

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request)
      .then(res => res)
  )
})
