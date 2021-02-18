<template>
  <!-- Error page-->
  <div class="misc-wrapper">
    <b-link class="brand-logo">
      <sprout-logo />
      <h2 class="brand-text text-primary ml-1">
        Sprout
      </h2>
    </b-link>
    
    <div class="misc-inner p-2 p-sm-3">
      <div class="w-100 text-center">
        <h2 class="mb-1">
          Page Not Found 🕵🏻‍♀️
        </h2>
        <p class="mb-2">
          Oops! 😖 The requested URL was not found on this server.
        </p>
        
        <b-button
          :to="{path:'/'}"
          class="mb-2 btn-sm-block"
          variant="primary"
        >
          Back to home
        </b-button>
        
        <!-- image -->
        <b-img
          :src="imgUrl"
          alt="Error page"
          fluid
        />
      </div>
    </div>
  </div>
  <!-- / Error page-->
</template>

<script>
import store                    from "@/store";
import SproutLogo               from "@core/layouts/components/Logo.vue";
/* eslint-disable global-require */
import { BButton, BImg, BLink } from "bootstrap-vue";


export default {
  components: {
    SproutLogo,
    BLink,
    BButton,
    BImg
  },
  data () {
    return {
      downImg: require( "@/assets/images/pages/error.svg" )
    };
  },
  computed: {
    imgUrl () {
      if ( store.state.appConfig.layout.skin === "dark" ) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.downImg = require( "@/assets/images/pages/error-dark.svg" );
        return this.downImg;
      }
      return this.downImg;
    }
  }
};
</script>

<style lang="scss">
@import '@core/scss/vue/pages/page-misc.scss';
</style>
