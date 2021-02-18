<template>
  <b-card-code title="Basic Checkbox">
    <b-card-text class="mb-0">
      <span>You can have </span>
      <code>&lt;b-form-checkbox-group&gt;</code>
      <span> or </span>
      <code>&lt;b-form-checkbox&gt;</code>
      <span> render a browser native checkbox input by setting the <code>plain</code> prop.</span>
    </b-card-text>
    
    <div class="demo-inline-spacing">
      <b-form-checkbox
        v-model="selected"
        plain
        value="A"
      >
        Checked
      </b-form-checkbox>
      <b-form-checkbox
        v-model="selected"
        plain
        value="B"
      >
        Unchecked
      </b-form-checkbox>
      <b-form-checkbox
        v-model="selected"
        disabled
        plain
        value="C"
      >
        Checked disabled
      </b-form-checkbox>
      <b-form-checkbox
        v-model="selected"
        disabled
        plain
        value="D"
      >
        Unchecked disabled
      </b-form-checkbox>
    </div>
    
    <template #code>
      {{ codeBasic }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode                    from "@core/components/b-card-code";
import { BCardText, BFormCheckbox } from "bootstrap-vue";
import { codeBasic }                from "./code";


export default {
  components: {
    BCardCode,
    BFormCheckbox,
    BCardText
  },
  data () {
    return {
      selected: [ "A", "C" ],
      codeBasic
    };
  }
};
</script>
