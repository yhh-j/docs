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
    "revision": "22434ad05a5c3595a5c175fcc50e9703"
  },
  {
    "url": "about.html",
    "revision": "af656b1dce4046e52bfd037b17f1e553"
  },
  {
    "url": "about1.html",
    "revision": "9172fc206d12eb995c0fbda2545b6cca"
  },
  {
    "url": "assets/css/0.styles.eaebb698.css",
    "revision": "aa45bbe17b5ab495096b9ef2f291c1a0"
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
    "url": "assets/img/hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.a76096a1.js",
    "revision": "49cbc2192545c56b73e3662e69a90780"
  },
  {
    "url": "assets/js/11.3ac38298.js",
    "revision": "ce0e5b1553f710590e8085c79ef7f455"
  },
  {
    "url": "assets/js/12.51870fcb.js",
    "revision": "ed2145f2d633bf3d59bad4c49c4fdf65"
  },
  {
    "url": "assets/js/13.a27fe85d.js",
    "revision": "914f0607e26f0ed4a8cbe796c693acd3"
  },
  {
    "url": "assets/js/14.29c70643.js",
    "revision": "698f3a33db9c0820be306993eb3a5eca"
  },
  {
    "url": "assets/js/15.ff304aa9.js",
    "revision": "cac165695cb0ff74d0ebe461760fa787"
  },
  {
    "url": "assets/js/16.5e07a7a7.js",
    "revision": "db42b841bda1d836b16a069e39c0f71a"
  },
  {
    "url": "assets/js/17.dce81447.js",
    "revision": "d48a2543ff950b8188736e0a62b31244"
  },
  {
    "url": "assets/js/18.89f6badd.js",
    "revision": "a0baa182905c868efa3856c29c0de881"
  },
  {
    "url": "assets/js/2.916c6ec3.js",
    "revision": "d25e2c4ef770aef0182fc7ca440e8a0d"
  },
  {
    "url": "assets/js/3.54c0abe6.js",
    "revision": "a0d0f701edfa573250739666ee00f0e7"
  },
  {
    "url": "assets/js/4.6281f96e.js",
    "revision": "a78b608b0894647f86dd610a3dd26778"
  },
  {
    "url": "assets/js/5.2c3d1076.js",
    "revision": "3e894beab062a582356661c69b1aa4f1"
  },
  {
    "url": "assets/js/6.ff74f60f.js",
    "revision": "d552027bbd0345432dcc5ee3ae685db1"
  },
  {
    "url": "assets/js/7.1205b5bd.js",
    "revision": "49317b28aff46b7324834057d8768630"
  },
  {
    "url": "assets/js/8.bc236e9c.js",
    "revision": "c7485d76e57ea611f8e993bf2f0a0bda"
  },
  {
    "url": "assets/js/9.d9a7613e.js",
    "revision": "7b724b7534226d26d6ffe31a469afe71"
  },
  {
    "url": "assets/js/app.86368ef5.js",
    "revision": "20f1094f2cbdb783afb35a3cbab9cfab"
  },
  {
    "url": "countup.html",
    "revision": "da69873e60ba893ba9c895a89ce972a0"
  },
  {
    "url": "css/c-a.html",
    "revision": "e3e76035562477bb9216237b7e9d2c1d"
  },
  {
    "url": "css/c-b.html",
    "revision": "4924376572731f6017b525eb36300e45"
  },
  {
    "url": "css/c-c.html",
    "revision": "2a66554bc0dc81173cc4b8f4fe66e659"
  },
  {
    "url": "css/index.html",
    "revision": "de36a3b1365dd33eaab7b5cfab3973c7"
  },
  {
    "url": "index.html",
    "revision": "fc10f9a5a76f5241b6c5df2b09d3d68f"
  },
  {
    "url": "quanxue.html",
    "revision": "dda0bc9c56d60353f929247e7edaa72d"
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
