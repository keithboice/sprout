<template>
  <div class="navbar-container d-flex content align-items-center">

    <!-- Left Col -->
    <div
      class="nav align-items-start mr-auto"
    >
      <p
        class="
      clearfix
      mb-0"
      >
        <span class="float-md-left d-block d-md-inline-block mt-25">
          COPYRIGHT  © {{ new Date().getFullYear() }}
          <b-link
            class="ml-25"
            href="https://crm.sprout.online"
            target="_blank"
          >Sprout</b-link>
          <span class="d-none d-sm-inline-block">, All rights Reserved</span>
        </span>
      </p>
    </div>

    <!-- center Col -->
    <div
      class="nav align-items-center mx-auto"
    >
      <dark-Toggler />
    </div>

    <!-- Right Col -->
    <div class="nav align-items-end ml-auto">
      <locale />

      <!--      <bookmarks />-->
    </div>

  </div>
</template>

<script>
import { BLink } from 'bootstrap-vue'
/* import Bookmarks from './app-navbar/components/Bookmarks.vue' */
import DarkToggler from './app-navbar/components/DarkToggler.vue'
import Locale from './app-navbar/components/Locale.vue'

export default {
  components: {
    BLink,

    // Navbar Components
    /* Bookmarks, */
    Locale,
    DarkToggler,
  },
  props: {
    toggleVerticalMenuActive: {
      type: Function,
      default: () => {},
    },
  },

}
</script>
