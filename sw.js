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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.0.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "24ebdea21daa6c27afd81c5d64e47266"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "e5376ee4f88957a6b08eb1c6b94a663d"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "02ab60957484b300d2e5cec907dd7e75"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "c8954531f8358f67714ac65daa9d2743"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "a5d8d87eb24b017debdefb95d6691fc0"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "e87224e68ed4e05a83ecdb408099130d"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "f130b7b68e2c0b633df77123f0689d5c"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "5888d7ad0e4d55314317e88ba6819db8"
  },
  {
    "url": "index.html",
    "revision": "024ddb60f0bc32cf66755d5cea139de4"
  },
  {
    "url": "manifest.json",
    "revision": "282401e7fb35cd4ee82c52a4408fa7cc"
  },
  {
    "url": "welcome.png",
    "revision": "71ea792a5fa94bae4c78c2e5fae30a9f"
  },
  {
    "url": "workbox-config.js",
    "revision": "784c072caf1333646dbd773ce8e03cfb"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https:\/\/cdn.ampproject.org/, workbox.strategies.staleWhileRevalidate({ plugins: [new workbox.cacheableResponse.Plugin({"statuses":[0,200]})] }), 'GET');
