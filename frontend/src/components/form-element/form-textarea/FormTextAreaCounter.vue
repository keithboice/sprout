<template>
  <b-card-code
    title="Counter"
  >
    <b-card-text>
      There are times when we need the user to only enter a certain number of characters for it, we have the property
      counter, the value is a number and determines the maximum.
    </b-card-text>
    
    <b-form-textarea
      v-model="value"
      :class="value.length >= maxChar ? 'text-danger' : ''"
      :state="value.length <= maxChar"
      class="char-textarea"
      placeholder="Counter"
      rows="3"
    />
    <small
      :class="value.length >= maxChar ? 'bg-danger' : ''"
      class="textarea-counter-value float-right"
    >
      <span class="char-count">{{ value.length }}</span> / {{ maxChar }}
    </small>
    
    <template #code>
      {{ codeCounter }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode                    from "@core/components/b-card-code";
import { BCardText, BFormTextarea } from "bootstrap-vue";
import { codeCounter }              from "./code";


export default {
  components: {
    BCardCode,
    BCardText,
    BFormTextarea
  },
  data () {
    return {
      value:   "",
      maxChar: 20,
      codeCounter
    };
  }
};
</script>
