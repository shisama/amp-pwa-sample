module.exports = {
  staticFileGlobs: [
    '**.html',
    '**.json',
    'images/**.*'
  ],
  runtimeCaching: [
    {
      urlPattern: '*',
      handler: 'netFirst'
    },{
      urlPattern: /cdn\.ampproject\.org/,
      handler: 'fastest'
    }]
};