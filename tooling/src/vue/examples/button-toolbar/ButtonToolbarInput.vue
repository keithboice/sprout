<template>
  <b-card-code title="Button Toolbar with Input">
    <b-button-toolbar
      aria-label="Toolbar with button groups and input groups"
      class="demo-inline-spacing"
    >
      <b-button-group size="sm">
        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          variant="outline-primary"
        >
          Save
        </b-button>
        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          variant="outline-primary"
        >
          Cancel
        </b-button>
      </b-button-group>
      <b-input-group
        append=".00"
        prepend="$"
        size="sm"
      >
        <b-form-input
          class="text-right"
          value="100"
        />
      </b-input-group>
    </b-button-toolbar>
    
    <template #code>
      {{ codeInput }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode                                                          from "@core/components/b-card-code/BCardCode.vue";
import { BButton, BButtonGroup, BButtonToolbar, BFormInput, BInputGroup } from "bootstrap-vue";
import Ripple                                                             from "vue-ripple-directive";
import { codeInput }                                                      from "./code";


export default {
  components: {
    BButtonToolbar,
    BButtonGroup,
    BButton,
    BFormInput,
    BInputGroup,
    BCardCode
  },
  directives: {
    Ripple
  },
  data () {
    return {
      codeInput
    };
  }
};
</script>
