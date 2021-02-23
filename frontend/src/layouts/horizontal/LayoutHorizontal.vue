<template>
  <layout-horizontal>
    
    <router-view />
    
    <!--    <app-customizer
          v-if="showCustomizer"
          slot="customizer"
        />-->
  </layout-horizontal>

</template>

<script>
import LayoutHorizontal from "@/layouts/layout-horizontal/LayoutHorizontal.vue"
/*import AppCustomizer    from "@/layouts/components/app-customizer/AppCustomizer.vue"*/
import { $themeConfig } from "@/conf/theme"


export default {
  components: {
    LayoutHorizontal/*,
     AppCustomizer*/
  },
  data () {
    return {
      showCustomizer: $themeConfig.layout.customizer
    }
  }
}
</script>
