<template>
  <div class="d-flex flex-column justify-content-center align-items-center d-block px-1 bg-secondary">
    <!--    <component
      :is="resolveNavItemComponent(item)"
      v-for="item in items"
      :key="item.header || item.title"
      :item="item"
    />-->
    <div class="my-1 w-100">
      <button
        class="btn btn-flat btn-light btn-block"
        href="/apps/chat/active"
        type="button"
      >
        <span class="py-1 text-muted">Active Conversations 89</span>
      </button>
    </div>
    
    <div class="my-1 w-100">
      <button
        class="btn btn-light w-100"
        href="/apps/chat/new"
        type="button"
      >
        <span class="py-1 text-muted">New Conversations 25</span>
      </button>
    </div>
    <div class="my-1 w-100">
      <button
        class="btn btn-light btn-block"
        href="/apps/chat/started"
        type="button"
      >
        <span class="py-1 text-muted">Started Conversations 12</span>
      </button>
    </div>
    <div class="my-1 w-100">
      <button
        class="btn btn-light btn-block"
        href="apps/chat/closed"
        type="button"
      >
        <span class="py-1 text-muted">Closed Conversations 15</span>
      </button>
    </div>
  </div>
</template>

<script>
import { resolveVerticalNavMenuItemComponent as resolveNavItemComponent } from "@core/layouts/utils"
import { provide, ref }                                                   from "@vue/composition-api"
/* import VerticalNavMenuHeader from '../vertical-nav-menu-header'
 import VerticalNavMenuLink from '../vertical-nav-menu-link/VerticalNavMenuLink.vue'
 import VerticalNavMenuGroup from '../vertical-nav-menu-group/VerticalNavMenuGroup.vue' */

export default {
  /* components: {
   VerticalNavMenuHeader,
   VerticalNavMenuLink,
   VerticalNavMenuGroup,
   }, */
  props: {
    items: {
      type:     Array,
      required: true
    }
  },
  setup () {
    provide( "openGroups", ref( [] ) )
    
    return {
      resolveNavItemComponent
    }
  }
}
</script>
