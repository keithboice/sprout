<template>
  <b-card-code
    title="Inline"
  >
    <b-card-text>
      <span>The spin button will automatically adjust it's width to fit the displayed value. Use the prop </span>
      <code>inline</code>
    </b-card-text>
    
    <div>
      <label
        class="mr-1"
        for="sb-inline"
      >Inline spin button</label>
      <b-form-spinbutton
        id="sb-inline"
        v-model="value"
        inline
      />
    </div>
    
    <template #code>
      {{ codeInline }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode                      from "@core/components/b-card-code";
import { BCardText, BFormSpinbutton } from "bootstrap-vue";
import { codeInline }                 from "./code";


export default {
  components: {
    BFormSpinbutton,
    BCardText,
    BCardCode
  },
  data () {
    return {
      value: 50,
      codeInline
    };
  }
};
</script>
