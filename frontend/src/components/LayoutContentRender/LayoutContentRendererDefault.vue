<template>
  <div
    :class="[{'show-overlay': $store.state.chat.shallShowOverlay}, $route.meta.contentClass]"
    class="inbox-app-content content"
  >
    <div class="inbox-content-overlay" />
    <div class="header-navbar-shadow" />
    <div
      :class="contentWidth === 'boxed' ? 'container p-0' : null"
      class="inbox-content-wrapper"
    >
      <slot name="breadcrumb">
        <app-breadcrumb />
      </slot>
      <div class="content-body">
        <transition
          :name="routerTransition"
          mode="out-in"
        >
          <slot />
        </transition>
      </div>
    </div>
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