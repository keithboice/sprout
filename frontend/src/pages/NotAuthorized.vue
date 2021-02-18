<template>
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
          You are not authorized! 🔐
        </h2>
        <p class="mb-2">
          You don’t have permission to access this page. Go Home!!
        </p>
        <b-button
          :to="loginRoute()"
          class="mb-1 btn-sm-block"
          variant="primary"
        >Back to Home
        </b-button>
        <b-img
          :src="imgUrl"
          alt="Not authorized page"
          fluid
        />
      </div>
    </div>
  </div>
</template>

<script>
import { getHomeRouteForLoggedInUser } from "@/auth/utils";
import store                           from "@/store";
import SproutLogo                      from "@core/layouts/components/Logo.vue";
/* eslint-disable global-require */
import { BButton, BImg, BLink }        from "bootstrap-vue";


export default {
  components: {
    BLink,
    BImg,
    BButton,
    SproutLogo
  },
  data () {
    return {
      downImg: require( "@/assets/images/pages/not-authorized.svg" )
    };
  },
  computed: {
    imgUrl () {
      if ( store.state.appConfig.layout.skin === "dark" ) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.downImg = require( "@/assets/images/pages/not-authorized-dark.svg" );
        return this.downImg;
      }
      return this.downImg;
    }
  },
  methods:  {
    loginRoute () {
      const user = JSON.parse( localStorage.getItem( "userData" ) );
      return getHomeRouteForLoggedInUser( user ? user.role : null );
    }
  }
};
</script>

<style lang="scss">
@import '@core/scss/vue/pages/page-misc.scss';
</style>
