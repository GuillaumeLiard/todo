importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0197976d8180afbce972.js",
    "revision": "f4f112c0a08051885975f1510199fbf5"
  },
  {
    "url": "/_nuxt/0606067476ab4cbb5541.js",
    "revision": "398aeb93b16f7a51109705a283f6a4ec"
  },
  {
    "url": "/_nuxt/17f6360811d4c4b34ce6.js",
    "revision": "bce9a5f426b16de96757d437501485f3"
  },
  {
    "url": "/_nuxt/1ad84ab35635c84259a4.js",
    "revision": "0cb8a594618fa4f8c5500e0b172bc50f"
  },
  {
    "url": "/_nuxt/b88cf65635fcc7cad4d6.js",
    "revision": "b56e74cb53ab130604e8cd6d311223c7"
  },
  {
    "url": "/_nuxt/c01ae575f0f777998699.js",
    "revision": "377b5d90a54ca16c3887bad052b0472a"
  },
  {
    "url": "/_nuxt/d5705eae4682cf643d6b.js",
    "revision": "35c533f4500be6774603ff4f36eb3258"
  },
  {
    "url": "/_nuxt/dadf088e13dcf4f554f0.js",
    "revision": "03893db0d57ebcbcd1f6c54397fa7c85"
  }
], {
  "cacheId": "todo",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
