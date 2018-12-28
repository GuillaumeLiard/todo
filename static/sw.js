importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/11dc3d83ff874218033b.js",
    "revision": "f72496e6e0913d5f4ee18a972c0a3106"
  },
  {
    "url": "/_nuxt/17f6360811d4c4b34ce6.js",
    "revision": "bce9a5f426b16de96757d437501485f3"
  },
  {
    "url": "/_nuxt/3ef10c97693c9a336942.js",
    "revision": "d5de0b98c7296e739f4e85b172b443d0"
  },
  {
    "url": "/_nuxt/5e856ad1a7108b711484.js",
    "revision": "89238e69062027caef3a805fae33fe96"
  },
  {
    "url": "/_nuxt/7cb4ff396ce2acce5591.js",
    "revision": "badc9ef1ebaa62c790056579d573bfa9"
  },
  {
    "url": "/_nuxt/ab1dfb7d92b87e983cda.js",
    "revision": "3edf93897e177538655b994b1986fe93"
  },
  {
    "url": "/_nuxt/c65fc55c5f3fede43712.js",
    "revision": "8e161001bf305640aea78ab108de6ed0"
  },
  {
    "url": "/_nuxt/d7f8021e8f31b7101198.js",
    "revision": "60e9d9e18e50e187d89a22523fd4b543"
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

workbox.routing.registerRoute(new RegExp('https://fonts.googleapis.com/.*'), workbox.strategies.staleWhileRevalidate({}), 'GET')

workbox.routing.registerRoute(new RegExp('https://fonts.gstatic.com/.*'), workbox.strategies.cacheFirst({}), 'GET')
