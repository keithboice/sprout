<template>
  <div
    :class="[layoutClasses]"
    :data-col="isNavMenuHidden ? '1-column' : null"
    class="vertical-layout h-100 d-flex flex-row justify-content-start align-items-start vw-100"
  >
    
    
    <!-- Vertical Nav Menu -->
    <div
      id="inbox-nav"
      class="inbox-vert-nav"
    >
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
    </div>
    <!-- /Vertical Nav Menu -->
    
    
    
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
    <!--    <footer
      :class="[footerTypeClass]"
      class="footer footer-light"
    >
      <slot name="footer">
        <app-footer />
      </slot>
    </footer>
    &lt;!&ndash; /Footer &ndash;&gt;
    
    <slot name="customizer" />-->
  </div>
</template>

<script>
  import { onUnmounted } from "@vue/composition-api"
  import AppFooter       from "@/components/_deprecating/app-footer/AppFooter.vue"
  import useAppConfig    from "@conf/app"
  import { BNavbar }                  from "bootstrap-vue"
  import AppNavbarVerticalLayout           from "@/components/_deprecating/app-navbar/AppNavbar.vue"
  import LayoutContentRendererDefault      from "@/components/LayoutContentRender/LayoutContentRendererDefault.vue"
  import LayoutContentRendererLeft         from "@/components/LayoutContentRender/LayoutContentRendererLeft.vue"
  import LayoutContentRendererLeftDetached from "@/components/LayoutContentRender/LayoutContentRendererLeftDetached.vue"
  import VerticalNavMenu                   from "@/components/ChatMenu/VerticalNavMenu.vue"
  import useVerticalLayout                 from "@components/ChatLayout/use"
  import mixinVerticalLayout from "@components/ChatLayout/mixin"

  export default {
    name: 'ChatLayoutWrapper',
    components: {
      // AppBreadcrumb,
      AppNavbarVerticalLayout,
      AppFooter,
      VerticalNavMenu,
      BNavbar,
      LayoutContentRendererLeftDetached,
      LayoutContentRendererLeft,
      LayoutContentRendererDefault
    },
    mixins:     [mixinVerticalLayout],
    computed:   {
      layoutContentRenderer () {
        const rendererType = this.$route.meta.contentRenderer
        if (rendererType === "sidebar-left") {
          return "layout-content-renderer-left"
        }
        if (rendererType === "sidebar-left-detached") {
          return "layout-content-renderer-left-detached"
        }
        return "layout-content-renderer-default"
      }
    },
    setup () {
      const {
              routerTransition,
              navbarBackgroundColor,
              navbarType,
              footerType,
              isNavMenuHidden
            } = useAppConfig()
      
      const {
              isVerticalMenuActive,
              toggleVerticalMenuActive,
              isVerticalMenuCollapsed,
              layoutClasses,
              overlayClasses,
              resizeHandler,
              navbarTypeClass,
              footerTypeClass
            } = useVerticalLayout(navbarType, footerType)
      
      // Resize handler
      resizeHandler()
      window.addEventListener("resize", resizeHandler)
      onUnmounted(() => {
        window.removeEventListener("resize", resizeHandler)
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
        isNavMenuHidden
      }
    }
  }
</script>

<style lang="scss">
  @import '~@scss/bordered-layout.scss';
</style>