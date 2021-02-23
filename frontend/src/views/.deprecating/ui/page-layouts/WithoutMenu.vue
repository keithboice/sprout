<template>
  <div>
    <b-alert show variant="primary">
      <div class="alert-body">
        <p>
          <strong>Info: </strong> <span>Please check the </span>
          <b-link class="alert-link" href="#thisisdocslink" target="blank">
            Layout Without Navigation Menu documentation
          </b-link>
          <span> for more details.</span>
        </p>
      </div>
    </b-alert>
    <ecommerce />
  </div>
</template>

<script>
import Ecommerce         from "@/views/.deprecating/dashboard/ecommerce/Ecommerce.vue"
import { BAlert, BLink } from "bootstrap-vue"


export default {
  components: {
    BAlert,
    BLink,
    Ecommerce
  },
  data () {
    return {
      menuHidden: this.$store.state.chat.layout.menu.hidden
    }
  },
  created () {
    this.$store.commit( "appConfig/UPDATE_NAV_MENU_HIDDEN", true )
  },
  destroyed () {
    this.$store.commit( "appConfig/UPDATE_NAV_MENU_HIDDEN", this.menuHidden )
  }
}
</script>
