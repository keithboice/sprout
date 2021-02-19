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
      class="btn btn-flat btn-light btn-block"
      type="button"
      @click="viewTo('active')"
    >
      <span class="h-100 text-muted">Active Conversations</span><span class="ml-2">89</span>
    </button>
    
    <button
      class="btn btn-flat btn-light btn-block"
      type="button"
      @click="viewTo('new')"
    >
      <span class="py-2 text-muted">New Conversations</span><span class="ml-2">25</span>
    </button>
    
    <button
      class="btn btn-flat btn-light btn-block"
      type="button"
      @click="viewTo('started')"
    >
      <span class="py-2 text-muted">Started Conversations</span><span class="ml-2">12</span>
    </button>
    
    <button
      class="btn btn-flat btn-light btn-block"
      type="button"
      @click="viewTo('closed')"
    >
      <span class="py-2 text-muted">Closed Conversations</span><span class="ml-2">15</span>
    </button>
  
  </div>
</template>

<script>
import { resolveVerticalNavMenuItemComponent as resolveNavItemComponent } from "@core/layouts/utils"
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
                        view: state => state[ "chat/view" ],
    
                        // passing the string value 'count' is same as `state => state.count`
                        countAlias: "count",
    
                        // to access local state with `this`, a normal function must be used
                        countPlusLocalState ( state ) {
                          return state.count + this.localCount
                        }
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
