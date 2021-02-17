<template>
  <div
    :class="[layoutClasses]"
    :data-col="isNavMenuHidden ? '1-column' : null"
    class="vertical-layout h-100"
  >
    <!-- Navbar -->
    <b-navbar
      :class="[navbarTypeClass]"
      :toggleable="true"
      :variant="navbarBackgroundColor"
      class="header-navbar navbar navbar-shadow align-items-center"
    >
      <slot
        :navbarBackgroundColor="navbarBackgroundColor"
        :navbarTypeClass="[...navbarTypeClass, 'header-navbar navbar navbar-shadow align-items-center']"
        :toggleVerticalMenuActive="toggleVerticalMenuActive"
        name="navbar"
      >
        <app-navbar-vertical-layout :toggle-vertical-menu-active="toggleVerticalMenuActive" />
      </slot>
    </b-navbar>
    <!--/ Navbar -->

    <!-- Vertical Nav Menu -->
    <vertical-nav-menu
      v-if="!isNavMenuHidden"
      :is-vertical-menu-active="isVerticalMenuActive"
      :toggle-vertical-menu-active="toggleVerticalMenuActive"
    >
      <template #header="slotProps">
        <slot
          v-bind="slotProps"
          name="vertical-menu-header"
        />
      </template>
    </vertical-nav-menu>
    <!-- /Vertical Nav Menu -->

    <!-- Vertical Nav Menu Overlay -->
    <div
      :class="overlayClasses"
      class="sidenav-overlay"
      @click="isVerticalMenuActive = false"
    />
    <!-- /Vertical Nav Menu Overlay -->

    <!-- Content -->

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

    <!-- Footer -->
    <footer
      :class="[footerTypeClass]"
      class="footer footer-light"
    >
      <slot name="footer">
        <app-footer />
      </slot>
    </footer>
    <!-- /Footer -->

    <slot name="customizer" />
  </div>
</template>

<script>
import useAppConfig from '@core/app-config/useAppConfig'
import AppNavbarVerticalLayout from '@core/layouts/components/app-navbar/AppNavbarVerticalLayout.vue'
import AppFooter from '@core/layouts/components/AppFooter.vue'
import LayoutContentRendererDefault
  from '@core/layouts/components/layout-content-renderer/LayoutContentRendererDefault.vue'
import LayoutContentRendererLeft
  from '@core/layouts/components/layout-content-renderer/LayoutContentRendererLeft.vue'
import LayoutContentRendererLeftDetached
  from '@core/layouts/components/layout-content-renderer/LayoutContentRendererLeftDetached.vue'
import { onUnmounted } from '@vue/composition-api'
import { BNavbar } from 'bootstrap-vue'
import VerticalNavMenu from './components/vertical-nav-menu/VerticalNavMenu.vue'
import mixinVerticalLayout from './mixinVerticalLayout'
import useVerticalLayout from './useVerticalLayout'

export default {
  components: {
    // AppBreadcrumb,
    AppNavbarVerticalLayout,
    AppFooter,
    VerticalNavMenu,
    BNavbar,
    LayoutContentRendererLeftDetached,
    LayoutContentRendererLeft,
    LayoutContentRendererDefault,
  },
  mixins: [mixinVerticalLayout],
  computed: {
    layoutContentRenderer() {
      const rendererType = this.$route.meta.contentRenderer
      if (rendererType === 'sidebar-left') return 'layout-content-renderer-left'
      if (rendererType === 'sidebar-left-detached') return 'layout-content-renderer-left-detached'
      return 'layout-content-renderer-default'
    },
  },
  setup() {
    const {
      routerTransition,
      navbarBackgroundColor,
      navbarType,
      footerType,
      isNavMenuHidden,
    } = useAppConfig()

    const {
      isVerticalMenuActive,
      toggleVerticalMenuActive,
      isVerticalMenuCollapsed,
      layoutClasses,
      overlayClasses,
      resizeHandler,
      navbarTypeClass,
      footerTypeClass,
    } = useVerticalLayout(navbarType, footerType)

    // Resize handler
    resizeHandler()
    window.addEventListener('resize', resizeHandler)
    onUnmounted(() => {
      window.removeEventListener('resize', resizeHandler)
    })

    return {
      isVerticalMenuActive,
      toggleVerticalMenuActive,
      isVerticalMenuCollapsed,
      overlayClasses,
      layoutClasses,
      navbarTypeClass,
      footerTypeClass,

      // App Config
      routerTransition,
      navbarBackgroundColor,
      isNavMenuHidden,
    }
  },
}
</script>

<style lang="scss">
@import '~@core/scss/base/themes/bordered-layout.scss';
</style>
