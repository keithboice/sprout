<template>
  <b-card-code title="Glow Badges">
    <b-card-text class="mb-0">
      <span>Use class</span>
      <code>.badge-glow</code>
      <span>to add glow effect with badges.</span>
    </b-card-text>
    
    <!-- badges -->
    <div class="demo-inline-spacing">
      <b-badge
        class="badge-glow"
        pill
        variant="primary"
      >
        Primary
      </b-badge>
      <b-badge
        class="badge-glow"
        pill
        variant="secondary"
      >
        Secondary
      </b-badge>
      <b-badge
        class="badge-glow"
        pill
        variant="success"
      >
        Success
      </b-badge>
      <b-badge
        class="badge-glow"
        pill
        variant="danger"
      >
        Danger
      </b-badge>
      <b-badge
        class="badge-glow"
        pill
        variant="warning"
      >
        Warning
      </b-badge>
      <b-badge
        class="badge-glow"
        pill
        variant="info"
      >
        Info
      </b-badge>
      <b-badge
        class="badge-glow"
        pill
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
    BBadge,
    BCardText
  },
  data () {
    return {
      codeGlow
    };
  }
};
</script>
