const path = require( "path" )

module.exports = {
  publicPath:            "/",
  css:                   {
    loaderOptions: {
      sass: {
        sassOptions: {
          includePaths: [ "./node_modules", "./src/assets" ]
        }
      }
    }
  },
  configureWebpack:      {
    resolve: {
      alias: {
        "@assets":      path.resolve( __dirname, "src/assets" ),
        "@axios":       path.resolve( __dirname, "src/libs/axios" ),
        "@conf":        path.resolve( __dirname, "src/conf" ),
        "@components":  path.resolve( __dirname, "src/components" ),
        "@core":        path.resolve( __dirname, "src/core" ),
        "@images":      path.resolve( __dirname, "src/assets/images" ),
        "@layouts":     path.resolve( __dirname, "src/layouts" ),
        "@libs":        path.resolve( __dirname, "src/libs" ),
        "@navigation":  path.resolve( __dirname, "src/navigation" ),
        "@router":      path.resolve( __dirname, "src/router" ),
        "@scss":        path.resolve( __dirname, "src/assets/scss" ),
        "@store":       path.resolve( __dirname, "src/store" ),
        "@themeConfig": path.resolve( __dirname, "src/conf/theme.js" ),
        "@utils":       path.resolve( __dirname, "src/utils" ),
        "@validations": path.resolve( __dirname, "src/core/utils/validations/validations.js" )
      }
    }
  },
  chainWebpack:          config => {
    config.module
      .rule( "vue" )
      .use( "vue-loader" )
      .loader( "vue-loader" )
    /*.tap( options => {
     // eslint-disable-next-line no-param-reassign
     options.transformAssetUrls = {
     img:                "src",
     image:              "xlink:href",
     "b-avatar":         "src",
     "b-img":            "src",
     "b-img-lazy":       [ "src", "blank-src" ],
     "b-card":           "img-src",
     "b-card-img":       "src",
     "b-card-img-lazy":  [ "src", "blank-src" ],
     "b-carousel-slide": "img-src",
     "b-embed":          "src"
     }
     return options
     } )*/
  },
  transpileDependencies: [ "vue-echarts", "resize-detector" ]
}
