<template>
  <b-card-code title="Pill Badges As Notification">
    <b-card-text class="mb-">
      <span>Use class </span>
      <code>badge</code>
      <span> prop with </span>
      <code>&lt;feather-icon&gt;</code>
      <span> components to add badges as notification. Use </span>
      <code>badge-classes="badge-{color}"</code>
      <span> prop for change the badge color.</span>
    </b-card-text>
    
    <!-- bages -->
    <div class="demo-inline-spacing">
      <feather-icon
        badge="4"
        class="text-primary"
        icon="BellIcon"
        size="21"
      />
      
      <feather-icon
        badge="4"
        badge-classes="badge-info"
        class="text-info"
        icon="BellIcon"
        size="21"
      />
      <feather-icon
        badge="4"
        badge-classes="badge-danger badge-glow"
        class="text-danger"
        icon="BellIcon"
        size="21"
      />
    </div>
    
    <template #code>
      {{ codeNotification }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode            from "@core/components/b-card-code";
import { BCardText }        from "bootstrap-vue";
import { codeNotification } from "./code";


export default {
  components: {
    BCardCode,
    BCardText
  },
  data () {
    return {
      codeNotification
    };
  }
};
</script>
