const path = require('path');

function configSVGIcon(config) {
  // Exclude SVG sprite directory from default svg rule
  config.module
    .rule('svg')
    .exclude.add(path.resolve(__dirname, './src/assets/icons'))
    .end();

  // Options used by svgo-loader to optimize SVG files
  // https://github.com/svg/svgo#what-it-can-do
  const options = {
    plugins: [
      { cleanupAttrs: true },
      { cleanupEnableBackground: true },
      { cleanupIDs: true },
      { cleanupListOfValues: true },
      { cleanupNumericValues: true },
      { collapseGroups: true },
      { convertColors: true },
      { convertPathData: true },
      { convertShapeToPath: true },
      { convertStyleToAttrs: true },
      { convertTransform: true },
      { mergePaths: true },
      { removeComments: true },
      { removeDesc: true },
      { removeDimensions: true },
      { removeDoctype: true },
      { removeEditorsNSData: true },
      { removeEmptyAttrs: true },
      { removeEmptyContainers: true },
      { removeEmptyText: true },
      { removeHiddenElems: true },
      { removeMetadata: true },
      { removeNonInheritableGroupAttrs: true },
      { removeRasterImages: true },
      { removeTitle: true },
      { removeUnknownsAndDefaults: true },
      { removeUselessDefs: true },
      { removeUnusedNS: true },
      { removeUselessStrokeAndFill: true },
      { removeAttrs: { attrs: 'fill' } },
      { removeXMLProcInst: true },
      { removeStyleElement: true },
      { removeUnknownsAndDefaults: true },
      { sortAttrs: true },
    ],
  };

  // Include only SVG sprite directory for new svg-icon rule
  // Use svg-sprite-loader to build SVG sprite
  // Use svgo-loader to optimize SVG files
  config.module
    .rule('svg-icon')
    .test(/\.svg$/)
    .include.add(path.resolve(__dirname, './src/assets/icons'))
    .end()
    .use('svg-sprite-loader')
    .loader('svg-sprite-loader')
    .options({ symbolId: 'icon-[name]' })
    .end()
    .use('svgo-loader')
    .loader('svgo-loader')
    .options(options)
    .end();
}

module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.ya?ml$/,
          type: 'json', // Required by Webpack v4
          use: 'yaml-loader',
        },
      ],
    },
  },
  chainWebpack: (config) => {
    configSVGIcon(config);
  },
  pwa: {
    name: 'Critterpedia',
    themeColor: '#f3cf62',
    msTileColor: '#f3cf62',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black-translucent',
    // workboxPluginMode: 'InjectManifest',
    // workboxOptions: {
    //   swSrc: './service-worker.js',
    // },
    manifestOptions: {
      icons: [{
        src: './favicon/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      }, {
        src: './favicon/android-chrome-256x256.png',
        sizes: '256x256',
        type: 'image/png',
      }],
    },
    iconPaths: {
      favicon32: 'favicon/favicon-32x32.png',
      favicon16: 'favicon/favicon-16x16.png',
      appleTouchIcon: 'favicon/apple-touch-icon.png',
      maskIcon: 'favicon/safari-pinned-tab.svg',
      msTileImage: 'favicon/mstile-150x150.png',
    },
  },
};
