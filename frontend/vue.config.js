const path = require( "path" )

// Value used for consistent naming of build output files.
const chunkPrefix = 'inbox.[name]'

module.exports = {
  publicPath:            "/",
  css:                   {
    loaderOptions: {
      sass: {
        sassOptions: {
          includePaths: [ "./node_modules", "./src/assets", "./src/components", "./src/views", "./src/layouts" ]
        }
      }
    },
    extract: false
  },
  configureWebpack:      {
    optimization: {
      splitChunks: false
    },
    entry: "./src/main.js",
    output: {
      filename:      `${ chunkPrefix }.js`,
    },
    resolve: {
      alias: {
        "@assets":      path.resolve( __dirname, "src/assets" ),
        "@axios":       path.resolve( __dirname, "src/libs/axios" ),
        "@conf":        path.resolve( __dirname, "config" ),
        "@components":  path.resolve( __dirname, "src/components" ),
        "@core":        path.resolve( __dirname, "src/assets" ),
        "@images":      path.resolve( __dirname, "src/assets/images" ),
        "@libs":        path.resolve( __dirname, "src/libs" ),
        "@router":      path.resolve( __dirname, "src/router" ),
        "@scss":        path.resolve( __dirname, "src/assets/scss" ),
        "@store":       path.resolve( __dirname, "src/store" ),
        "@themeConfig": path.resolve( __dirname, "config/theme.js" ),
        "@utils":       path.resolve( __dirname, "src/utils" ),
        "@nodemods": path.resolve(__dirname, "node_modules"),
      }
    }
  },
  chainWebpack:          config => {
    config.module
      .rule( "vue" )
      .use( "vue-loader" )
      .loader( "vue-loader" )
      .tap( options => {
            // eslint-disable-next-line no-param-reassign
           options.transformAssetUrls = {
               img:                "src",
               image:              "xlink:href",
               /*"b-avatar":         "src",*/
               "b-img":            "src",
               "b-img-lazy":       [ "src", "blank-src" ],
               "b-card":           "img-src",
               "b-card-img":       "src",
               "b-card-img-lazy":  [ "src", "blank-src" ],
               "b-carousel-slide": "img-src",
               "b-embed":          "src"
           }
       return options
       } )
    config
      .plugin('html')
      .tap(args => {
        args[ 0 ].template = 'build/php/inbox.php'
        return args
      })
  }
}