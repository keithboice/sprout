<template>
  <b-card-code
    title="Sidebar Basic"
  >
    <b-card-text>
      <span>BootstrapVue's custom </span>
      <code>&lt;b-sidebar&gt;</code>
      <span> component is a fixed-position toggleable slide out box, which can be used for navigation, menus, details, etc.</span>
    </b-card-text>
    
    <div>
      <b-button
        v-b-toggle.sidebar-1
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        variant="outline-primary"
      >
        Toggle Sidebar
      </b-button>
      <b-sidebar
        id="sidebar-1"
        backdrop
        bg-variant="white"
        shadow
      >
        <sidebar-content />
      </b-sidebar>
    </div>
    
    <template #code>
      {{ codeBasic }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode                                  from "@core/components/b-card-code";
import { BButton, BCardText, BSidebar, VBToggle } from "bootstrap-vue";
import Ripple                                     from "vue-ripple-directive";
import { codeBasic }                              from "./code";
import SidebarContent                             from "./SidebarContent.vue";


export default {
  components: {
    BCardCode,
    BButton,
    BSidebar,
    SidebarContent,
    BCardText
  },
  directives: {
    "b-toggle": VBToggle,
    Ripple
  },
  data () {
    return {
      codeBasic
    };
  }
};
</script>
