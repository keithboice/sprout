<template>
  <b-card-code title="Floating Label Inputs">
    <b-card-text class="mb-2">
      <span>For Flating Label Inputs, need to use </span>
      <code>.form-label-group</code>
      <span> class & add prop </span>
      <code>disabled</code>
      <span> for disabled Floating Label Input.</span>
    </b-card-text>
    
    <b-row>
      <b-col md="6">
        <div class="form-label-group">
          <b-form-input
            id="floating-label1"
            placeholder="Label Placeholder"
          />
          <label for="floating-label1">Label-placeholder</label>
        </div>
      </b-col>
      <b-col md="6">
        <div class="form-label-group">
          <b-form-input
            disabled
            placeholder="Disabled-placeholder"
          />
          <label for="floating-label-disable">Disabled-placeholder</label>
        </div>
      </b-col>
    </b-row>
    
    <template #code>
      {{ codeFloatinLabel }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode                             from "@core/components/b-card-code";
import { BCardText, BCol, BFormInput, BRow } from "bootstrap-vue";
import { codeFloatinLabel }                  from "./code";


export default {
  components: {
    BCardCode,
    BCardText,
    BFormInput,
    BRow,
    BCol
  },
  data () {
    return {
      codeFloatinLabel
    };
  }
};
</script>
