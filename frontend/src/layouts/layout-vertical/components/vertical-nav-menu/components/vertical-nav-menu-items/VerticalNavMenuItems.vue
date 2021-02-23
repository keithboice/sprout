<template>
  <div
    id="inbox-nav"
    class="d-flex flex-column justify-content-center align-items-center pl-1 mt-1 bg-secondary"
  >
    <!--    <component
      :is="resolveNavItemComponent(item)"
      v-for="item in items"
      :key="item.header || item.title"
      :item="item"
    />-->
    <button
      :class="this.$store.state.chat.view === 'active' ? 'active' : ''"
      class="btn btn-flat btn-light btn-block"
      type="button"
      @click="viewTo('active')"
    >
      <span>Active Conversations</span><span class="ml-2"><b>89</b></span>
    </button>
    
    <button
      :class="this.$store.state.chat.view === 'new' ? 'active' : ''"
      class="btn btn-flat btn-light btn-block"
      type="button"
      @click="viewTo('new')"
    >
      <span>New Conversations</span><span class="ml-2"><b>25</b></span>
    </button>
    
    <button
      :class="this.$store.state.chat.view === 'started' ? 'active' : ''"
      class="btn btn-flat btn-light btn-block"
      type="button"
      @click="viewTo('started')"
    >
      <span>Started Conversations</span><span class="ml-2"><b>12</b></span>
    </button>
    
    <button
      :class="this.$store.state.chat.view === 'closed' ? 'active' : ''"
      class="btn btn-flat btn-light btn-block"
      type="button"
      @click="viewTo('closed')"
    >
      <span>Closed Conversations</span><span class="ml-2"><b>15</b></span>
    </button>
  
  </div>
</template>

<script>
import { resolveVerticalNavMenuItemComponent as resolveNavItemComponent } from "@/layouts/utils"
import { provide, ref }                                                   from "@vue/composition-api"
/* import VerticalNavMenuHeader from '../vertical-nav-menu-header'
 import VerticalNavMenuLink from '../vertical-nav-menu-link/VerticalNavMenuLink.vue'
 import VerticalNavMenuGroup from '../vertical-nav-menu-group/VerticalNavMenuGroup.vue' */
import { mapMutations, mapState }                                         from "vuex"


export default {
  
  /* components: {
   VerticalNavMenuHeader,
   VerticalNavMenuLink,
   VerticalNavMenuGroup,
   }, */
  props:    {
    items: {
      type:     Array,
      required: true
    }
  },
  computed: mapState( {
                        // arrow functions can make the code very succinct!
                        view: state => state.chat.view
                      } ),
  setup () {
    provide( "openGroups", ref( [] ) )
    
    return {
      resolveNavItemComponent
    }
  },
  methods: {
    ...mapMutations( {
                       // `mapMutations` also supports payloads:
                       viewTo: "chat/viewTo" // map `this.incrementBy(amount)` to `this.$store.commit('incrementBy', amount)`
                     } )
  }
}
</script>
