const CACHE_NAME = 'kropp-fitness-v1'

const ASSETS = [
  './',
  './index.html',
  './styles/main.css',
  './scripts/main.js',

  './assets/fonts/Heebo-Light.woff2',
  './assets/fonts/Heebo-Bold.woff2',
  './assets/fonts/Yantramanav-Bold.woff2',

  './assets/icons/plus.svg',
  './assets/icons/arrow-top-right.svg',
  './assets/icons/bold-arrow-down-right.svg',
  './assets/icons/transparent-arrow-bottom-left.svg',

  './assets/images/logo.png',
  './assets/images/motivation/1.jpg',
  './assets/images/motivation/2.jpg',
  './assets/images/training-types/1.svg',
  './assets/images/training-types/2.svg',
  './assets/images/training-types/3.svg',
  './assets/images/training-types/4.svg',
  './assets/images/training-types/5.svg',
  './assets/images/training-types/6.svg',
  './assets/images/join-us/video-placeholder.jpg',
  './assets/images/join-us/join-us-bg.jpg',
  './assets/images/map.jpg',
  './assets/images/family/1.jpg',
  './assets/images/family/2.jpg',
  './assets/images/family/3.jpg',
  './assets/images/family/4.jpg',
  './assets/images/family/5.jpg',
]

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)))
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
      )
  )
})

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request)
    })
  )
})
