<template>
  <div class="navbar-container d-flex content align-items-center">

    <!-- Nav Menu Toggler -->
    <ul class="nav navbar-nav d-xl-none">
      <li class="nav-item">
        <b-link
          class="nav-link"
          @click="toggleVerticalMenuActive"
        >
          <feather-icon
            icon="MenuIcon"
            size="21"
          />
        </b-link>
      </li>
    </ul>

    <horizontal-nav-menu />

  </div>
</template>

<script>
import HorizontalNavMenu from "@core/layouts/layout-horizontal/components/horizontal-nav-menu/HorizontalNavMenu.vue";


export default {
  components: {
    HorizontalNavMenu,

  },
  props: {
    toggleVerticalMenuActive: {
      type: Function,
      default: () => {},
    },
  },
}
</script>
