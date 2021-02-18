<template>
  <b-card-code title="Dropdown Nav">
    <b-card-text>
      <span>Use </span>
      <code>&lt;b-nav-item-dropdown&gt;</code>
      <span> to place dropdown items within your nav.</span>
    </b-card-text>
    
    <div>
      <b-nav>
        <b-nav-item active>
          Active
        </b-nav-item>
        <b-nav-item>Link</b-nav-item>
        <b-nav-item-dropdown
          id="my-nav-dropdown"
          right
          text="Dropdown"
          toggle-class="nav-link-custom"
        >
          <b-dropdown-item>One</b-dropdown-item>
          <b-dropdown-item>Two</b-dropdown-item>
          <b-dropdown-divider />
          <b-dropdown-item>Three</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-nav>
    </div>
    
    <template #code>
      {{ codeDropdown }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode                                                                        from "@core/components/b-card-code";
import { BCardText, BDropdownDivider, BDropdownItem, BNav, BNavItem, BNavItemDropdown } from "bootstrap-vue";
import { codeDropdown }                                                                 from "./code";


export default {
  components: {
    BCardCode,
    BNav,
    BNavItem,
    BNavItemDropdown,
    BDropdownDivider,
    BDropdownItem,
    BCardText
  },
  data () {
    return {
      codeDropdown
    };
  }
};
</script>
