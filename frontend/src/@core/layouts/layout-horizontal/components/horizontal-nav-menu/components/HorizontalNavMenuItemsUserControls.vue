<template>
  <div>

    <!-- Right Col -->
    <b-navbar-nav>
      <search-bar />
      <notification-dropdown />
      <user-dropdown />
    </b-navbar-nav>
  </div>
</template>

<script>
import { BNavbarNav }       from "bootstrap-vue";
import NotificationDropdown from "./NotificationDropdown.vue";
import SearchBar            from "./SearchBar.vue";
import UserDropdown         from "./UserDropdown.vue";


export default {
  components: {

    // Navbar Components
    BNavbarNav,
    SearchBar,
    NotificationDropdown,
    UserDropdown,
  },
  props: {
    toggleVerticalMenuActive: {
      type: Function,
      default: () => {},
    },
  },

}
</script>
