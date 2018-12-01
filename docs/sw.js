importScripts('/todo/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/todo/_nuxt/07354bfaa50a32c6dbb3.js",
    "revision": "b5020e15d4a4f1fbd0a02803ca1f59ad"
  },
  {
    "url": "/todo/_nuxt/45b0abc12c7d98a4fb62.js",
    "revision": "0d462a68c1c0aa7b2c1baed4e020e06e"
  },
  {
    "url": "/todo/_nuxt/b86a3a869f57cef879c6.js",
    "revision": "cc07381353b43a18c377166eeaa1dc23"
  },
  {
    "url": "/todo/_nuxt/bb5e5b18339b2a03005f.js",
    "revision": "fb6b1a80b5a69333233531fd03504ad6"
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
