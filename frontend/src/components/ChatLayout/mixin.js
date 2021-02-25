import { $themeBreakpoints } from "@conf/theme"


export default {
  watch: {
    $route () {
      if ( this.$store.state.chat.windowWidth < $themeBreakpoints.xl ) {
        this.isVerticalMenuActive = false
      }
    }
  }
}