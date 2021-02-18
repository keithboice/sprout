<template>
  <b-card-code title="Glow Badges">
    <b-card-text class="mb-0">
      <span>Use class </span>
      <code>.badge-glow</code>
      <span> to add glow effect to contextual badge.</span>
    </b-card-text>
    
    <!-- glow badges -->
    <div class="demo-inline-spacing">
      <b-badge
        class="badge-glow"
        variant="primary"
      >
        Primary
      </b-badge>
      <b-badge class="badge-glow">
        Secondary
      </b-badge>
      <b-badge
        class="badge-glow"
        variant="success"
      >
        Success
      </b-badge>
      <b-badge
        class="badge-glow"
        variant="danger"
      >
        Danger
      </b-badge>
      <b-badge
        class="badge-glow"
        variant="warning"
      >
        Warning
      </b-badge>
      <b-badge
        class="badge-glow"
        variant="info"
      >
        Info
      </b-badge>
      <b-badge
        class="badge-glow"
        variant="dark"
      >
        Dark
      </b-badge>
    </div>
    
    <template #code>
      {{ codeGlow }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode             from "@core/components/b-card-code";
import { BBadge, BCardText } from "bootstrap-vue";
import { codeGlow }          from "./code";


export default {
  components: {
    BCardCode,
    BCardText,
    BBadge
  },
  data () {
    return {
      codeGlow
    };
  }
};
</script>
