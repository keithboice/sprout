<template>
  <b-card-code
    title="Control sizing"
  >
    <b-card-text>
      <span>Set text height using the </span>
      <code>size</code>
      <span> prop to </span>
      <code>sm</code>
      <span> or </span>
      <code>lg</code>
      <span> for small or large respectively.</span>
    </b-card-text>
    
    <b-row>
      <b-col sm="2">
        <label
          class="text-nowrap"
          for="textarea-small"
        >Small:</label>
      </b-col>
      <b-col
        class="mb-1"
        sm="10"
      >
        <b-form-textarea
          id="textarea-small"
          placeholder="Small textarea"
          size="sm"
        />
      </b-col>
      <b-col sm="2">
        <label
          class="text-nowrap"
          for="textarea-default"
        >Default:</label>
      </b-col>
      <b-col
        class="mb-1"
        sm="10"
      >
        <b-form-textarea
          id="textarea-default"
          placeholder="Default textarea"
        />
      </b-col>
      <b-col sm="2">
        <label
          class="text-nowrap"
          for="textarea-large"
        >Large:</label>
      </b-col>
      <b-col
        class="mb-1"
        sm="10"
      >
        <b-form-textarea
          id="textarea-large"
          placeholder="Large textarea"
          size="lg"
        />
      </b-col>
    </b-row>
    
    <template #code>
      {{ codeSize }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode                                from "@core/components/b-card-code";
import { BCardText, BCol, BFormTextarea, BRow } from "bootstrap-vue";
import { codeSize }                             from "./code";


export default {
  components: {
    BCardCode,
    BFormTextarea,
    BRow,
    BCardText,
    BCol
  },
  data () {
    return {
      codeSize
    };
  }
};
</script>
