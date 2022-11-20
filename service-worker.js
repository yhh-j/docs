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
    "revision": "156299f4dba83ccf4b8187c2acc0a746"
  },
  {
    "url": "about.html",
    "revision": "dd7d74ccb89042f851453bd41b6d77f2"
  },
  {
    "url": "about1.html",
    "revision": "9b42b0ac04dd165611388b44ca78251f"
  },
  {
    "url": "assets/css/0.styles.2f3626ab.css",
    "revision": "16f412c213121440d5d025e288944d93"
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
    "url": "assets/js/10.4fe01b83.js",
    "revision": "6f1f3bfe31f428d8e76b36a1a433f075"
  },
  {
    "url": "assets/js/11.c2801df6.js",
    "revision": "e09b2a79eb9e9f642c84f5a96c9125ae"
  },
  {
    "url": "assets/js/12.486acf2d.js",
    "revision": "d4cba1b24d3e4cb22ba67932ee98c367"
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
    "url": "assets/js/5.1460a68a.js",
    "revision": "b7eddab34c2dd8ad30a7d13de35d01a4"
  },
  {
    "url": "assets/js/6.90041a99.js",
    "revision": "2d418ca9a5f1c72b6b8d114606c3c85b"
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
    "url": "assets/js/app.abddbed2.js",
    "revision": "3b4e438af6c0d3cbffd9ad793e870003"
  },
  {
    "url": "countup.html",
    "revision": "4272ba823e366797382c9f7d954a02d1"
  },
  {
    "url": "css/c-a.html",
    "revision": "3b89d897f72c6f63a93e0cbd4d77167f"
  },
  {
    "url": "css/c-b.html",
    "revision": "57a2455a3a7e6ea280fa3d5465b72207"
  },
  {
    "url": "css/c-c.html",
    "revision": "58b8851c951a747730d040d758eb8b1b"
  },
  {
    "url": "css/index.html",
    "revision": "cd666c6e86b0bb121cfccd8b9fffb94c"
  },
  {
    "url": "index.html",
    "revision": "c702f096b8735d54baa00c01243a7acb"
  },
  {
    "url": "quanxue.html",
    "revision": "fce6157ba09e26f6811c33f3ea207a1d"
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
