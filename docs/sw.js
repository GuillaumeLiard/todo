importScripts('/todo/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/todo/_nuxt/2b5e59700468a4ebce11.js",
    "revision": "1159a2ecb708b86b41bb2309234c50a2"
  },
  {
    "url": "/todo/_nuxt/5c898696fd0277049301.js",
    "revision": "7aa38d6533163bf31c4d51f272f3eb30"
  },
  {
    "url": "/todo/_nuxt/6518d0babc54c215b6ec.js",
    "revision": "2add3bc66e9ca741d6273b60a669ff96"
  },
  {
    "url": "/todo/_nuxt/b86a3a869f57cef879c6.js",
    "revision": "cc07381353b43a18c377166eeaa1dc23"
  },
  {
    "url": "/todo/_nuxt/d0c32bb85a2a563c2591.js",
    "revision": "daf3b7d437f7050f0ce7fa87b9abb29c"
  }
], {
  "cacheId": "todo",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/todo/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/todo/.*'), workbox.strategies.networkFirst({}), 'GET')
