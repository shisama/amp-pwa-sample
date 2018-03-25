module.exports = {
  "globDirectory": ".",
  "globPatterns": [
    "**/*.{png,html,json,js}"
  ],
  "swDest": "sw.js",
  // 以下、手動で修正分
  "runtimeCaching": [{
    urlPattern: new RegExp('^https://cdn.ampproject.org'),
    handler: 'staleWhileRevalidate',
    options: {
      cacheableResponse: {
        statuses: [0, 200]
      }
    }
  }]
};