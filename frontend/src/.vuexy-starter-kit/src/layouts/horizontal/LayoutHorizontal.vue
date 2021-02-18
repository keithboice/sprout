<template>
  <layout-horizontal>
    
    <router-view />
    
    <template #navbar="{ toggleVerticalMenuActive }">
      <app-navbar-horizontal-layout-brand />
      <navbar :toggle-vertical-menu-active="toggleVerticalMenuActive" />
    </template>
    
    <!-- <styles-customizer
      v-if="showCustomizer"
      slot="customizer"
    /> -->
  </layout-horizontal>
</template>

<script>
// import AppCustomizer from '@core/layouts/components/styles-customizer/AppCustomizer.vue'
// import { $themeConfig } from '@themeConfig'
import AppNavbarHorizontalLayoutBrand from "@core/layouts/components/app-navbar/AppNavbarHorizontalLayoutBrand.vue";
import LayoutHorizontal               from "@core/layouts/layout-horizontal/LayoutHorizontal.vue";
import Navbar                         from "../components/Navbar.vue";


export default {
  components: {
    LayoutHorizontal, // AppCustomizer,
    Navbar,
    AppNavbarHorizontalLayoutBrand
  },
  data () {
    return {
      // showCustomizer: $themeConfig.layout.customizer,
    };
  }
};
</script>
