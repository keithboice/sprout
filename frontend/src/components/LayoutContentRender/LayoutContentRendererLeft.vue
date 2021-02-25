<template>
  <div
    :class="[{'show-overlay': $store.state.chat.shallShowOverlay}, $route.meta.contentClass]"
    class="inbox-app-content content"
  >
    <div class="inbox-content-overlay" />
    <div class="header-navbar-shadow" />
    <transition
      :name="routerTransition"
      mode="out-in"
    >
      <div
        :class="contentWidth === 'boxed' ? 'container p-0' : null"
        class="content-area-wrapper"
      >
        <slot name="breadcrumb">
          <app-breadcrumb />
        </slot>
        <portal-target
          name="content-renderer-sidebar-left"
          slim
        />
        <div class="content-right">
          <div class="inbox-content-wrapper">
            <div class="content-body">
              <slot />
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import AppBreadcrumb from "@/components/_deprecating/AppBreadcrumb/AppBreadcrumb.vue"
import useAppConfig  from "@conf/app"


export default {
  components: {
    AppBreadcrumb
  },
  setup () {
    const {
            routerTransition,
            contentWidth
          } = useAppConfig()
    
    return {
      routerTransition,
      contentWidth
    }
  }
}
</script>

<style>

</style>