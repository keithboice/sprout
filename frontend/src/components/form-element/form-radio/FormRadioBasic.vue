<template>
  <b-card-code title="Basic Radio Buttons">
    <b-card-text class="mb-0">
      You can have <code>&lt;b-form-radio&gt;</code> and
      <code>&lt;b-form-radio-group&gt;</code> render a browser native-styled radio input by setting the plain prop.
    </b-card-text>
    
    <div class="demo-inline-spacing">
      <b-form-radio
        v-model="Selected"
        name="some-radios3"
        plain
        value="A"
      >
        Checked
      </b-form-radio>
      <b-form-radio
        v-model="Selected"
        name="some-radios3"
        plain
        value="B"
      >
        Unchecked
      </b-form-radio>
      <b-form-radio
        v-model="Selected1"
        disabled
        name="some-radios4"
        plain
        value="c"
      >
        Checked Disabled
      </b-form-radio>
      <b-form-radio
        v-model="Selected1"
        disabled
        name="some-radios4"
        plain
        value="d"
      >
        Unchecked Disabled
      </b-form-radio>
    </div>
    
    <template #code>
      {{ codeBasic }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode                 from "@core/components/b-card-code";
import { BCardText, BFormRadio } from "bootstrap-vue";
import { codeBasic }             from "./code";


export default {
  components: {
    BCardCode,
    BCardText,
    BFormRadio
  },
  data () {
    return {
      codeBasic,
      Selected:  "A",
      Selected1: "c"
    };
  }
};
</script>
