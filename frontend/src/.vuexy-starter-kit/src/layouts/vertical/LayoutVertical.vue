<template>
  <layout-vertical>
    
    <router-view />
    
    <template #navbar="{ toggleVerticalMenuActive }">
      <navbar :toggle-vertical-menu-active="toggleVerticalMenuActive" />
    </template>
    
    <!-- <styles-customizer
      v-if="showCustomizer"
      slot="customizer"
    /> -->
  </layout-vertical>
</template>

<script>
import LayoutVertical from "@core/layouts/layout-vertical/LayoutVertical.vue";
// import AppCustomizer from '@core/layouts/components/styles-customizer/AppCustomizer.vue'
// import { $themeConfig } from '@themeConfig'
import Navbar         from "../components/Navbar.vue";


export default {
  components: {
    // AppCustomizer,
    LayoutVertical,
    Navbar
  },
  data () {
    return {
      // showCustomizer: $themeConfig.layout.customizer,
    };
  }
};
</script>
