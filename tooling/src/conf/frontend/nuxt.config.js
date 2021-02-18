import { resolve } from 'path'
import { preset } from 'vue-cli-plugin-vuetify-preset-reply/preset'
import webpack from 'webpack'
import { version } from './package.json'

export default {
  // See https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-srcdir
  srcDir: 'sources/',

  // See https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-dev
  dev: process.env.NODE_ENV !== 'production',

  // See https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-env
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
  },

  // See https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-generate
  generate: {
    cache: {
      ignore: [
        'node_modules',
        '.pnpm-store',
        'test',
        '.github',
        '.idea',
        '.nuxt-storybook',
        '.run',
        '.storybook',
        'storybook-static',
        'packages',
      ], // ignore changes applied on this file
    },
  },

  // See https://nuxtjs.org/docs/2.x/directory-structure/nuxt-config#alias
  alias: {
    /*
     In addition to these defaults...
     
     '~~':     `<rootDir>`,
     '@@':     `<rootDir>`,
     '~':      `<srcDir>`,
     '@':      `<srcDir>`,
     'assets': `<srcDir>/assets`,
     'static': `<srcDir>/static`
     
     */
    images: resolve(__dirname, 'assets/images'),
    styles: resolve(__dirname, 'assets/styles'),
    data: resolve(__dirname, 'assets/other/data'),
    scripts: resolve(__dirname, 'assets/scripts'),
  },

  // See https://storybook.nuxtjs.org/setup
  storybook: {
    addons: ['@storybook/addon-controls', '@storybook/addon-notes'],
  },

  // See https://nuxtjs.org/docs/2.x/features/file-system-routing
  router: {
    routeNameSplitter: '/',
  },

  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - sprout',
    title: 'sprout',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content: '',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['styles/_colors', 'styles/_mixins', 'styles/_variables'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module', // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module', // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/style-resources', // https://github.com/nuxt-community/style-resources-module/
  ],

  // Style resources module: https://github.com/nuxt-community/style-resources-module/
  styleResources: {
    sass: ['styles/*.sass'],
    scss: [
      'styles/_colors.scss',
      'styles/_mixins.scss',
      'styles/_variables.scss',
    ],
    less: ['styles/*.less'],
    stylus: [],
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios', // https://go.nuxtjs.dev/axios
    '@nuxtjs/pwa', // https://go.nuxtjs.dev/pwa
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: [
      'styles/_colors.scss',
      'styles/_mixins.scss',
      'styles/_variables.scss',
    ],
    preset,
    rtl: true,
    theme: { dark: true },
    treeShake: true,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // Nuxt.js lets you upload your dist files to your CDN for maximum performances,
    // simply set the publicPath to your CDN.
    // publicPath: 'https://cdn.nuxtjs.org',
    analyze: {
      analyzerMode: 'static',
    },
    devtools: true,
    extractCSS: {
      ignoreOrder: true,
    },
    minimize: true,
    minimizer: [
      'terser-webpack-plugin',
      'optimize-css-assets-webpack-plugin',
      'image-minimizer-webpack-plugin',
    ],
    parallel: true,
    plugins: [
      new webpack.DefinePlugin({
        'process.VERSION': version,
      }),
      new webpack.HotModuleReplacementPlugin(),
    ],
    postcss: {
      plugins: {
        'postcss-import': {},
        'postcss-preset-env': this.preset,
        cssnano: { preset: 'default' }, // disabled in dev mode
        'postcss-url': false,
        'postcss-nested': {},
        'postcss-responsive-type': {},
        'postcss-hexrgba': {},
      },
      order: 'presetEnvAndCssnanoLast',
      preset: {
        stage: 2,
      },
    },
  },
}
