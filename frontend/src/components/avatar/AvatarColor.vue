<template>
  <b-card-code title="Colors">
    <b-card-text class="mb-0">
      <span>Use the </span>
      <code>variant</code>
      <span> prop to specify one of Bootstrap theme variant colors.</span>
    </b-card-text>
    
    <div class="demo-inline-spacing">
      <b-avatar
        text="PI"
        variant="primary"
      />
      <b-avatar
        text="PI"
        variant="secondary"
      />
      <b-avatar
        text="PI"
        variant="success"
      />
      <b-avatar
        text="PI"
        variant="danger"
      />
      <b-avatar
        text="PI"
        variant="warning"
      />
      <b-avatar
        text="PI"
        variant="info"
      />
    </div>
    
    <template #code>
      {{ codeColor }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode              from "@core/components/b-card-code";
import { BAvatar, BCardText } from "bootstrap-vue";
import { codeColor }          from "./code";


export default {
  components: {
    BCardCode,
    BAvatar,
    BCardText
  },
  data () {
    return {
      codeColor
    };
  }
};
</script>
