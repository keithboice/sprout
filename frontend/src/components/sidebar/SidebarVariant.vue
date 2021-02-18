<template>
  <b-card-code title="Sidebar Variant">
    <b-card-text>
      <span>Use the props </span>
      <code>bg-variant</code>
      <span> and </span>
      <code>text-variant</code>
      <span>
        to control the theme color variant of the background and text, respectively. Alternatively, you can apply styles
        or classes to specify the background and text colors.
      </span>
    </b-card-text>
    
    <div>
      <b-button
        v-b-toggle.sidebar-variant
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        variant="outline-primary"
      >
        Toggle Sidebar
      </b-button>
      <b-sidebar
        id="sidebar-variant"
        backdrop
        bg-variant="dark"
        shadow
        text-variant="light"
      >
        <sidebar-content />
      </b-sidebar>
    </div>
    
    <template #code>
      {{ codeVariant }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode                                  from "@core/components/b-card-code";
import { BButton, BCardText, BSidebar, VBToggle } from "bootstrap-vue";
import Ripple                                     from "vue-ripple-directive";
import { codeVariant }                            from "./code";
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
      codeVariant
    };
  }
};
</script>
