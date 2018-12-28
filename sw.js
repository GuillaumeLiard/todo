importScripts('/todo/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/todo/_nuxt/17f6360811d4c4b34ce6.js",
    "revision": "bce9a5f426b16de96757d437501485f3"
  },
  {
    "url": "/todo/_nuxt/3ef10c97693c9a336942.js",
    "revision": "d5de0b98c7296e739f4e85b172b443d0"
  },
  {
    "url": "/todo/_nuxt/7cb4ff396ce2acce5591.js",
    "revision": "badc9ef1ebaa62c790056579d573bfa9"
  },
  {
    "url": "/todo/_nuxt/ab1dfb7d92b87e983cda.js",
    "revision": "3edf93897e177538655b994b1986fe93"
  },
  {
    "url": "/todo/_nuxt/c65fc55c5f3fede43712.js",
    "revision": "8e161001bf305640aea78ab108de6ed0"
  },
  {
    "url": "/todo/_nuxt/d7f8021e8f31b7101198.js",
    "revision": "60e9d9e18e50e187d89a22523fd4b543"
  },
  {
    "url": "/todo/_nuxt/dd2edfdc6501f6535120.js",
    "revision": "c14cefdb2d30cc6cb5a3cb49490ec755"
  },
  {
    "url": "/todo/_nuxt/fc37201de58a6d800230.js",
    "revision": "fb70d6d56f679d7ca8a0dff93c3ad13a"
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

workbox.routing.registerRoute(new RegExp('https://fonts.googleapis.com/.*'), workbox.strategies.staleWhileRevalidate({}), 'GET')

workbox.routing.registerRoute(new RegExp('https://fonts.gstatic.com/.*'), workbox.strategies.cacheFirst({}), 'GET')
