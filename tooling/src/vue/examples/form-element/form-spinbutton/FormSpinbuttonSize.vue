<template>
  <b-card-code
    title="Size"
  >
    <b-card-text>
      <span>As with other form controls, </span>
      <code>&lt;b-form-spinbutton&gt;</code>
      <span> supports small and large sizing via setting the </span>
      <code>size</code>
      <span> prop to either </span>
      <code>'sm'</code>
      <span> or </span>
      <code>'lg'</code>
      <span>, respectively.</span>
    </b-card-text>
    
    <div>
      <label for="sb-small">Spin button - Small size</label>
      <b-form-spinbutton
        id="sb-small"
        class="mb-1"
        placeholder="--"
        size="sm"
      />
      
      <label for="sb-default">Spin button - Default size</label>
      <b-form-spinbutton
        id="sb-default"
        class="mb-1"
        placeholder="--"
      />
      
      <label for="sb-large">Spin button - Large size</label>
      <b-form-spinbutton
        id="sb-large"
        class="mb-1"
        placeholder="--"
        size="lg"
      />
    </div>
    
    <template #code>
      {{ codeSize }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode                      from "@core/components/b-card-code";
import { BCardText, BFormSpinbutton } from "bootstrap-vue";
import { codeSize }                   from "./code";


export default {
  components: {
    BFormSpinbutton,
    BCardCode,
    BCardText
  },
  data () {
    return {
      codeSize
    };
  }
};
</script>
