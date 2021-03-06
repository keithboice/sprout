<template>
  <div
    :class="[
      { 'expanded': !isVerticalMenuCollapsed || (isVerticalMenuCollapsed && isMouseHovered) },
      'menu-light'
    ]"
    class="main-menu menu-fixed menu-accordion bg-secondary border-right"
    @mouseenter="updateMouseHovered(true)"
    @mouseleave="updateMouseHovered(false)"
  >
    
    <!-- Shadow -->
    <div class="my-2">
      
      <!-- main menu content-->
      <vue-perfect-scrollbar
        :settings="perfectScrollbarSettings"
        class="main-menu-content scroll-area"
        tagname="div"
        @ps-scroll-y="evt => { shallShadowBottom = evt.srcElement.scrollTop > 0 }"
      >
        <vertical-nav-menu-items
          :items="navMenuItems"
          class="navigation navigation-main"
        />
      </vue-perfect-scrollbar>
      <!-- /main menu content-->
    </div>
  </div>
</template>

<script>
import navMenuItems               from "@conf/menu"
import VuePerfectScrollbar        from "vue-perfect-scrollbar"
import { provide, computed, ref } from "@vue/composition-api"
import useAppConfig               from "@conf/app"
import { $themeConfig }     from "@conf/theme"
import VerticalNavMenuItems from "../ChatMenuItems/VerticalNavMenuItems.vue"
import useVerticalNavMenu   from "./useVerticalNavMenu"


export default {
  components: {
    VuePerfectScrollbar,
    VerticalNavMenuItems
  },
  props:      {
    isVerticalMenuActive:     {
      type:     Boolean,
      required: true
    },
    toggleVerticalMenuActive: {
      type:     Function,
      required: true
    }
  },
  setup ( props ) {
    const {
            isMouseHovered,
            isVerticalMenuCollapsed,
            collapseTogglerIcon,
            toggleCollapsed,
            updateMouseHovered
          } = useVerticalNavMenu( props )
    
    const { skin } = useAppConfig()
    
    // Shadow bottom is UI specific and can be removed by user => It's not in `useVerticalNavMenu`
    const shallShadowBottom = ref( false )
    
    provide( "isMouseHovered", isMouseHovered )
    
    const perfectScrollbarSettings = {
      maxScrollbarLength: 60,
      wheelPropagation:   false
    }
    
    const collapseTogglerIconFeather = computed( () => (
      collapseTogglerIcon.value === "unpinned" ? "ToggleLeftIcon" : "ToggleRightIcon"
    ) )
    
    // App Name
    const {
            appName,
            appLogoImage
          } = $themeConfig.app
    
    return {
      navMenuItems,
      perfectScrollbarSettings,
      isVerticalMenuCollapsed,
      collapseTogglerIcon,
      toggleCollapsed,
      isMouseHovered,
      updateMouseHovered,
      collapseTogglerIconFeather,
      
      // Shadow Bottom
      shallShadowBottom,
      
      // Skin
      skin,
      
      // App Name
      appName,
      appLogoImage
    }
  }
}
</script>

<style lang="scss">
@import '~@scss/base/core/menu/menu-types/vertical-menu.scss';
</style>