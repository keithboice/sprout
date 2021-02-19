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
    <!-- main menu header-->
    <div class="navbar-header expanded">
      <slot
        :collapseTogglerIcon="collapseTogglerIcon"
        :toggleCollapsed="toggleCollapsed"
        :toggleVerticalMenuActive="toggleVerticalMenuActive"
        name="header"
      >
        <div class="ml-auto text-light">
          
          <!-- Toggler Button -->
          <b-link class="nav-link modern-nav-toggle">
            <feather-icon
              class="d-block d-xl-none"
              icon="XIcon"
              size="20"
              @click="toggleVerticalMenuActive"
            />
            <feather-icon
              :icon="collapseTogglerIconFeather"
              class="d-none d-xl-block ml-auto collapse-toggle-icon align-self-end"
              size="20"
              @click="toggleCollapsed"
            />
          </b-link>
        </div>
      </slot>
    </div>
    <!-- / main menu header-->
    
    <!-- Shadow -->
    <div
      :class="{'d-block': shallShadowBottom}"
      class="shadow-bottom"
    />
    
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
</template>

<script>
import navMenuItems               from "@/navigation/vertical"
import VuePerfectScrollbar        from "vue-perfect-scrollbar"
import { BLink }                  from "bootstrap-vue"
import { provide, computed, ref } from "@vue/composition-api"
import useAppConfig               from "@core/app-config/useAppConfig"
import { $themeConfig }           from "@themeConfig"
import VerticalNavMenuItems       from "./components/vertical-nav-menu-items/VerticalNavMenuItems.vue"
import useVerticalNavMenu         from "./useVerticalNavMenu"


export default {
  components: {
    VuePerfectScrollbar,
    VerticalNavMenuItems,
    BLink
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
@import '~@core/scss/base/core/menu/menu-types/vertical-menu.scss';
</style>
