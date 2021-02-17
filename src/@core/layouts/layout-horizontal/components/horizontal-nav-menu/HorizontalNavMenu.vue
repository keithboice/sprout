<template>
  <div class="navbar-container main-menu-content">

    <div class="container-fluid no-gutters">
      <div class="row no-gutters w-100 flex-grow-1 align-items-center justify-content-between">
        <div class="col-1 nav-logo-container">
          <horizontal-nav-menu-items-logo />
        </div>
        <div class="col flex-grow-1">
          <horizontal-nav-menu-items :items="navMenuItems" />
        </div>
        <div class="col-1 nav-logo-container">
          <div class="d-flex flex-row justify-content-end align-items-center">
            <horizontal-nav-menu-items-user-controls />
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import navMenuItems from '@/navigation/horizontal'
import HorizontalNavMenuItemsLogo from './components/HorizontalNavMenuItemsLogo.vue'
import HorizontalNavMenuItems from './components/horizontal-nav-menu-items/HorizontalNavMenuItems.vue'
import HorizontalNavMenuItemsUserControls from './components/HorizontalNavMenuItemsUserControls.vue'

export default {
  components: {
    HorizontalNavMenuItemsLogo,
    HorizontalNavMenuItems,
    HorizontalNavMenuItemsUserControls,
  },
  setup() {
    return {
      navMenuItems,
    }
  },
}
</script>

<style lang="scss">
@import '~@core/scss/base/core/menu/menu-types/horizontal-menu.scss';
</style>
