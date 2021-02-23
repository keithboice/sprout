<template>
  <!-- Under maintenance-->
  <div class="misc-wrapper">
    <b-link class="brand-logo">
      <vuexy-logo />
      
      <h2 class="brand-text text-primary ml-1">
        Sprout </h2>
    </b-link>
    
    <div class="misc-inner p-2 p-sm-3">
      <div class="w-100 text-center">
        <h2 class="mb-1">
          Under Maintenance 🛠 </h2>
        
        <p class="mb-3">
          Sorry for the inconvenience but we're performing some maintenance at the moment </p>
        
        <b-form class="justify-content-center row m-0 mb-2" inline @submit.prevent>
          <b-form-input id="notify-email" class="col-12 col-md-5 mb-1 mr-md-2" placeholder="john@example.com" />
          
          <b-button class="mb-1 btn-sm-block" type="submit" variant="primary">
            Notify
          </b-button>
        </b-form>
        
        <!-- img -->
        <b-img :src="imgUrl" alt="Under maintenance page" fluid />
      </div>
    </div>
  </div>
  <!-- / Under maintenance-->
</template>

<script>
/* eslint-disable global-require */
import { BLink, BFormInput, BButton, BForm, BImg } from "bootstrap-vue"
import SproutLogo                                  from "@layouts/components/Logo.vue"
import store                                       from "@/store"


export default {
  components: {
    BLink,
    BFormInput,
    BButton,
    BForm,
    BImg,
    SproutLogo
  },
  data () {
    return {
      downImg: require( "@images/pages/under-maintenance.svg" )
    }
  },
  computed: {
    imgUrl () {
      if ( store.state.chat.layout.skin === "dark" ) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.downImg = require( "@images/pages/under-maintenance-dark.svg" )
        return this.downImg
      }
      return this.downImg
    }
  }
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/page-misc.scss';
</style>
