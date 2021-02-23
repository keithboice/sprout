<template>
  <div
    :class="[layoutClasses]"
    :data-col="isNavMenuHidden ? '1-column' : null"
    class="horizontal-layout"
    style="height:inherit"
  >
    
    <!-- NAVBAR -->
    <b-navbar
      :class="{'fixed-top': $store.getters['chat/currentBreakPoint'] !== 'xl'}"
      :style="{
        backgroundColor: navbarType === 'static' && scrolledTo && skin === 'light' ? 'white' : null,
        boxShadow: navbarType === 'static' && scrolledTo ? 'rgba(0, 0, 0, 0.05) 0px 4px 20px 0px' : null,
      }"
      :toggleable="false"
      class="header-navbar navbar-shadow align-items-center navbar-brand-center navbar-fixed"
    >
      <slot
        :toggleVerticalMenuActive="toggleVerticalMenuActive"
        name="navbar"
      >
        <app-navbar-horizontal-layout-brand />
        <app-navbar-horizontal-layout :toggle-vertical-menu-active="toggleVerticalMenuActive" />
      </slot>
    </b-navbar>
    <!--/ NAVBAR -->
    
    <div class="horizontal-menu-wrapper">
      <div
        v-if="!isNavMenuHidden"
        :class="[navbarMenuTypeClass]"
        class="header-navbar navbar-expand-sm navbar navbar-horizontal navbar-light navbar-shadow menu-border d-none d-xl-block"
      >
        <horizontal-nav-menu />
      </div>
      
      <!-- Vertical Nav Menu -->
      <vertical-nav-menu
        :is-vertical-menu-active="isVerticalMenuActive"
        :toggle-vertical-menu-active="toggleVerticalMenuActive"
        class="d-block d-xl-none"
      >
        <template #header="slotProps">
          <slot
            v-bind="slotProps"
            name="vertical-menu-header"
          />
        </template>
      </vertical-nav-menu>
      <!-- /Vertical Nav Menu -->
    </div>
    
    <!-- Vertical Nav Menu Overlay -->
    <div
      :class="overlayClasses"
      class="sidenav-overlay"
      @click="isVerticalMenuActive = false"
    />
    <!-- /Vertical Nav Menu Overlay -->
    
    <!-- CONTENT -->
    <!-- CONTENT TYPE: Left -->
    <transition
      :name="routerTransition"
      mode="out-in"
    >
      <component
        :is="layoutContentRenderer"
        :key="layoutContentRenderer === 'layout-content-renderer-left' ? $route.meta.navActiveLink || $route.name : null"
      >
        <template
          v-for="(index, name) in $scopedSlots"
          v-slot:[name]="data"
        >
          <slot
            v-bind="data"
            :name="name"
          />
        </template>
      </component>
    </transition>
    <!--/ Content -->
    <!--/ CONTENT -->
    
    <!-- Footer -->
    <footer
      :class="[footerTypeClass]"
      class="footer footer-light"
    >
      <slot name="footer">
        <app-footer />
      </slot>
    </footer>
    
    <slot name="customizer" />
  </div>
</template>

<script>
import AppBreadcrumb                  from "@/layouts/components/AppBreadcrumb.vue"
import AppNavbarHorizontalLayout      from "@/layouts/components/app-navbar/AppNavbarHorizontalLayout.vue"
import AppNavbarHorizontalLayoutBrand from "@/layouts/components/app-navbar/AppNavbarHorizontalLayoutBrand.vue"
import AppFooter                      from "@/layouts/components/AppFooter.vue"
import useAppConfig                   from "@/conf/app"
import { BNavbar }                    from "bootstrap-vue"
import { useScrollListener }          from "@/utils/comp-functions/misc/event-listeners"

import { onUnmounted } from "@vue/composition-api"

// Content Renderer
import LayoutContentRendererDefault      from "@/layouts/components/layout-content-renderer/LayoutContentRendererDefault.vue"
import LayoutContentRendererLeft         from "@/layouts/components/layout-content-renderer/LayoutContentRendererLeft.vue"
import LayoutContentRendererLeftDetached from "@/layouts/components/layout-content-renderer/LayoutContentRendererLeftDetached.vue"
import useLayoutHorizontal               from "./useLayoutHorizontal"
import HorizontalNavMenu                 from "./components/horizontal-nav-menu/HorizontalNavMenu.vue"

// Vertical Menu
import VerticalNavMenu       from "@/layouts/layout-vertical/components/vertical-nav-menu/VerticalNavMenu.vue"
import useVerticalLayout     from "@/layouts/layout-vertical/useVerticalLayout"
import mixinLayoutHorizontal from "./mixinLayoutHorizontal"


export default {
  components: {
    AppBreadcrumb,
    AppNavbarHorizontalLayout,
    AppNavbarHorizontalLayoutBrand,
    AppFooter,
    HorizontalNavMenu,
    
    BNavbar,
    
    // Content Renderer
    LayoutContentRendererDefault,
    LayoutContentRendererLeft,
    LayoutContentRendererLeftDetached,
    
    // Vertical Menu
    VerticalNavMenu
  },
  mixins:     [ mixinLayoutHorizontal ],
  computed:   {
    layoutContentRenderer () {
      const rendererType = this.$route.meta.contentRenderer
      if ( rendererType === "sidebar-left" ) {
        return "layout-content-renderer-left"
      }
      if ( rendererType === "sidebar-left-detached" ) {
        return "layout-content-renderer-left-detached"
      }
      return "layout-content-renderer-default"
    }
  },
  setup () {
    const {
            skin,
            navbarType,
            footerType,
            routerTransition,
            isNavMenuHidden
          } = useAppConfig()
    
    // Vertical Menu
    const {
            isVerticalMenuActive,
            toggleVerticalMenuActive,
            overlayClasses,
            resizeHandler
          } = useVerticalLayout( navbarType, footerType )
    
    // Resize handler
    resizeHandler()
    window.addEventListener( "resize", resizeHandler )
    onUnmounted( () => {
      window.removeEventListener( "resize", resizeHandler )
    } )
    
    const {
            navbarMenuTypeClass,
            layoutClasses,
            footerTypeClass
          } = useLayoutHorizontal( navbarType, footerType, isVerticalMenuActive )
    
    // Scroll Listener
    const { scrolledTo } = useScrollListener()
    
    return {
      // skin
      skin,
      
      // Layout
      layoutClasses,
      
      // Navbar
      navbarType,
      navbarMenuTypeClass,
      
      // Menu Hidden
      isNavMenuHidden,
      
      // Router Transition
      routerTransition,
      
      // Footer
      footerTypeClass,
      
      // Scroll Listeners
      scrolledTo,
      
      // Vertical Menu
      isVerticalMenuActive,
      toggleVerticalMenuActive,
      overlayClasses
    }
  }
}
</script>

<style lang="scss">
@import "~@/assets/scss/base/themes/bordered-layout.scss";
</style>
