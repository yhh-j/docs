/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "9213884bee1f64520d502c24f863a411"
  },
  {
    "url": "assets/css/0.styles.cc3511f1.css",
    "revision": "feef9c59e66649992d120c509d4f8b04"
  },
  {
    "url": "assets/icons/icon-192x192.png",
    "revision": "ae379d28dd1b1e14b24f0fc2f5c53423"
  },
  {
    "url": "assets/icons/icon-256x256.png",
    "revision": "702686d6289a0a2e8f472b6f40b6ddff"
  },
  {
    "url": "assets/icons/icon-384x384.png",
    "revision": "31fc6011887583ad319a1fe03b5dd128"
  },
  {
    "url": "assets/icons/icon-512x512.png",
    "revision": "6237f1ccade457861a295fc45d408ada"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.1c0c20d1.js",
    "revision": "576333228f34eefc0aaa294fcb3d1efe"
  },
  {
    "url": "assets/js/11.785c1ea8.js",
    "revision": "2f8a35833a56547bede375776de1100f"
  },
  {
    "url": "assets/js/12.79e2eb12.js",
    "revision": "b192147bd25910de22dafff5ea6a3f61"
  },
  {
    "url": "assets/js/13.d08e8814.js",
    "revision": "2661054aacf54397e8dd99d2050ac85c"
  },
  {
    "url": "assets/js/14.3fb9e9a9.js",
    "revision": "82ee662353d7816f850ea7b65f65ac24"
  },
  {
    "url": "assets/js/2.d55a0d4d.js",
    "revision": "d7e594769a441e71cdbca74ec6fb5e57"
  },
  {
    "url": "assets/js/3.887aaefa.js",
    "revision": "4e1c4321cd3aa3d009517fdad629b09c"
  },
  {
    "url": "assets/js/4.566c57ce.js",
    "revision": "9f51dd4f1483cc6d54b36e668c011c66"
  },
  {
    "url": "assets/js/5.727a5d29.js",
    "revision": "7218f84aab5b0169bbecfa73c2931fe0"
  },
  {
    "url": "assets/js/6.c869c391.js",
    "revision": "d1012203c2a79bfe898d5a5158f6b99e"
  },
  {
    "url": "assets/js/7.615f5f1c.js",
    "revision": "2896832b870d37ad882268fa32f14ad7"
  },
  {
    "url": "assets/js/8.dc4c8f85.js",
    "revision": "eb56bb8b53003352e35595ec48ca0083"
  },
  {
    "url": "assets/js/9.efe3bcc6.js",
    "revision": "8bf48e78923622ef79552747c125addb"
  },
  {
    "url": "assets/js/app.aae41518.js",
    "revision": "883703bff3d81e8f9fa08605f05ca81d"
  },
  {
    "url": "countup.html",
    "revision": "f8ae2232dac9a163b6fefc3f010c48b9"
  },
  {
    "url": "frontend/javascript/array.html",
    "revision": "d2eb72644130522cb4c3a7f8c9f8b4ec"
  },
  {
    "url": "frontend/javascript/index.html",
    "revision": "67b0438292c8998159aad3a38270fd47"
  },
  {
    "url": "frontend/javascript/this.html",
    "revision": "9332d63453ef076c4ae7799eba496fe0"
  },
  {
    "url": "hero.jpg",
    "revision": "d79bae4a0ec586da03f8d52d304a8a0e"
  },
  {
    "url": "index.html",
    "revision": "a886a91d22f0563a0ffe3f554bc1720f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
