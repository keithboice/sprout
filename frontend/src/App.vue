<template>
  <div
    id="app"
    :class="[skinClasses]"
    class="h-100"
  >
    <component :is="layout">
      <router-view />
    </component>
  
  </div>
</template>

<script>

// This will be populated in `beforeCreate` hook
import { $themeColors, $themeBreakpoints, $themeConfig } from "@/conf/theme"
import { provideToast }                                  from "vue-toastification/composition"
import { watch }                                         from "@vue/composition-api"

import { useWindowSize, useCssVar } from "@vueuse/core"

import store from "@/store"


const LayoutVertical = () => import("@/layouts/vertical/LayoutVertical.vue")
const LayoutHorizontal = () => import("@/layouts/horizontal/LayoutHorizontal.vue")
const LayoutFull = () => import("@/layouts/full/LayoutFull.vue")

export default {
  components: {
    
    // Layouts
    LayoutHorizontal,
    LayoutVertical,
    LayoutFull
    
  },
  computed:   {
    layout () {
      if ( this.$route.meta.layout === "full" ) {
        return "layout-full"
      }
      console.log( `App.vue layout() returns: layout-${ this.contentLayoutType }` )
      return `layout-${ this.contentLayoutType }`
    },
    contentLayoutType () {
      console.log( `App.vue contentLayoutType() returns: ${ this.$store.state.chat.layout.type }` )
      
      return this.$store.state.chat.layout.type
    }
  },
  beforeCreate () {
    // Set colors in theme
    const colors = [ "primary", "secondary", "success", "info", "warning", "danger", "light", "dark" ]
    
    // eslint-disable-next-line no-plusplus
    for ( let i = 0, len = colors.length; i < len; i++ ) {
      $themeColors[ colors[ i ] ] = useCssVar( `--${ colors[ i ] }`, document.documentElement )
        .value
        .trim()
    }
    
    // Set Theme Breakpoints
    const breakpoints = [ "xs", "sm", "md", "lg", "xl" ]
    
    // eslint-disable-next-line no-plusplus
    for ( let i = 0, len = breakpoints.length; i < len; i++ ) {
      $themeBreakpoints[ breakpoints[ i ] ] = Number( useCssVar( `--breakpoint-${ breakpoints[ i ] }`, document.documentElement )
                                                        .value
                                                        .slice( 0, -2 ) )
    }
    
    // Set RTL
    const { isRTL } = $themeConfig.layout
    document.documentElement.setAttribute( "dir", isRTL ? "rtl" : "ltr" )
  },
  setup () {
    /*const {
     /!*skin,*!/
     skinClasses
     } = useAppConfig()*/
    
    const skinClasses = null
    
    provideToast( {
                    hideProgressBar: true,
                    closeOnClick:    false,
                    closeButton:     false,
                    icon:            false,
                    timeout:         3000,
                    transition:      "Vue-Toastification__fade"
                  } )
    
    // Set Window Width in store
    store.commit( "chat/UPDATE_WINDOW_WIDTH", window.innerWidth )
    const { width: windowWidth } = useWindowSize()
    watch( windowWidth, val => {
      store.commit( "chat/UPDATE_WINDOW_WIDTH", val )
    } )
    
    return {
      skinClasses
    }
  }
}
</script>
