<template>
  <b-card-code title="Initials">
    <b-card-text class="mb-0">
      <span>You can specify a short string as the content of an avatar via the </span>
      <code>text</code>
      <span> prop.</span>
    </b-card-text>
    
    <div class="demo-inline-spacing">
      <b-avatar
        size="sm"
        text="PI"
        variant="light-primary"
      />
      <b-avatar
        text="PI"
        variant="light-secondary"
      />
      <b-avatar
        size="lg"
        text="PI"
        variant="light-success"
      />
      <b-avatar
        size="70px"
        text="PI"
        variant="light-danger"
      />
    </div>
    
    <template #code>
      {{ codeInitials }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode              from "@core/components/b-card-code";
import { BAvatar, BCardText } from "bootstrap-vue";
import { codeInitials }       from "./code";


export default {
  components: {
    BCardCode,
    BAvatar,
    BCardText
  },
  data () {
    return {
      codeInitials
    };
  }
};
</script>
