<template>
  <b-card-code title="Variants and custom class">
    <b-card-text class="mb-0">
      BootstrapVue's tooltips support contextual color variants via our custom CSS, either by using directive
      modifiers or config options:
    </b-card-text>
    
    <div class="demo-inline-spacing">
      
      <!-- default -->
      <b-button
        v-b-tooltip.hover
        title="Default variant"
        variant="gradient-primary"
      >
        Default
      </b-button>
      
      <!-- primary -->
      <b-button
        v-b-tooltip.hover.v-primary
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        title="Primary variant"
        variant="outline-primary"
      >
        Primary
      </b-button>
      
      <!-- secondary -->
      <b-button
        v-b-tooltip.hover.v-secondary
        v-ripple.400="'rgba(186, 191, 199, 0.15)'"
        title="Secondary variant"
        variant="outline-secondary"
      >
        Secondary
      </b-button>
      
      <!-- success -->
      <b-button
        v-b-tooltip.hover.v-success
        v-ripple.400="'rgba(40, 199, 111, 0.15)'"
        title="Success variant"
        variant="outline-success"
      >
        Success
      </b-button>
      
      <!-- danger -->
      <b-button
        v-b-tooltip.hover.v-danger
        v-ripple.400="'rgba(234, 84, 85, 0.15)'"
        title="Danger variant"
        variant="outline-danger"
      >
        Danger
      </b-button>
      
      <!-- warning -->
      <b-button
        v-b-tooltip.hover.v-warning
        v-ripple.400="'rgba(255, 159, 67, 0.15)'"
        title="Warning variant"
        variant="outline-warning"
      >
        Warning
      </b-button>
      
      <!-- info -->
      <b-button
        v-b-tooltip.hover.v-info
        v-ripple.400="'rgba(0, 207, 232, 0.15)'"
        title="Info variant"
        variant="outline-info"
      >
        Info
      </b-button>
      
      <!-- dark -->
      <b-button
        v-b-tooltip.hover.v-dark
        v-ripple.400="'rgba(30, 30, 30, 0.15)'"
        title="Dark variant"
        variant="outline-dark"
      >
        Dark
      </b-button>
    </div>
    
    <template #code>
      {{ codeVariantCustom }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode                         from "@core/components/b-card-code";
import { BButton, BCardText, VBTooltip } from "bootstrap-vue";
import Ripple                            from "vue-ripple-directive";
import { codeVariantCustom }             from "./code";


export default {
  components: {
    BCardCode,
    BButton,
    BCardText
  },
  directives: {
    "b-tooltip": VBTooltip,
    Ripple
  },
  data () {
    return {
      codeVariantCustom
    };
  }
};
</script>
