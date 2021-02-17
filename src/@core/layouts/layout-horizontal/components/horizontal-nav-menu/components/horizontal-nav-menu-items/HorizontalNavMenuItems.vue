<template>

  <div
    id="main-menu-navigation"
    class="nav navbar-navw-100 d-flex flex-row flex-grow-1 justify-content-center align-items-center"
  >

    <div
      :is="resolveNavComponent(item)"
      v-for="item in items"
      :key="item.header || item.title"
      :item="item"
      class="nav-link btn-flat btn-lg"
    />
  </div>
</template>

<script>
import HorizontalNavMenuHeaderGroup from '../horizontal-nav-menu-header-group/HorizontalNavMenuHeaderGroup.vue'
import HorizontalNavMenuHeaderLink from '../horizontal-nav-menu-header-link/HorizontalNavMenuHeaderLink.vue'

export default {
  components: {
    HorizontalNavMenuHeaderLink,
    HorizontalNavMenuHeaderGroup,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  setup() {
    const resolveNavComponent = item => {
      if (item.children) return 'horizontal-nav-menu-header-group'
      return 'horizontal-nav-menu-header-link'
    }

    return {
      resolveNavComponent,
    }
  },
}
</script>
