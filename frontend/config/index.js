// config/index.js
'use strict'
const path = require('path')

module.exports = {
  dev: {
    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {},

    // Various Dev Server settings
    host: 'localhost',
    port: 8080,

    // skipping other options as they are only convenience features
  },
  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../public/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: path.resolve(__dirname, '../'),

    productionSourceMap: true,

    // skipping the rest ...
  },
}
