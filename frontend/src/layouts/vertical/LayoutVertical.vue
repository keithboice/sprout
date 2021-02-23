<template>
  <layout-vertical>
    
    <router-view />
  
  </layout-vertical>
</template>

<script>
import LayoutVertical   from "@/layouts/layout-vertical/LayoutVertical.vue"
import { $themeConfig } from "@/conf/theme"


export default {
  components: {
    LayoutVertical
  },
  data () {
    return {
      showCustomizer: $themeConfig.layout.customizer
    }
  }
}
</script>
