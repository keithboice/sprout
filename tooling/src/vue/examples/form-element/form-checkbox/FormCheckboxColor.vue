<template>
  <b-card-code title="Color">
    <b-card-text class="mb-0">
      <span>To change the color of the checkBox use the </span>
      <code>.custom-control-{value}</code>
      <span> for primary, secondary, success, danger, info, warning.</span>
    </b-card-text>
    
    <!-- color -->
    <div class="demo-inline-spacing">
      <b-form-checkbox
        v-model="selected"
        class="custom-control-primary"
        value="A"
      >
        Primary
      </b-form-checkbox>
      <b-form-checkbox
        v-model="selected"
        class="custom-control-secondary"
        value="CC"
      >
        Secondary
      </b-form-checkbox>
      <b-form-checkbox
        v-model="selected"
        class="custom-control-success"
        value="C"
      >
        Success
      </b-form-checkbox>
      
      <b-form-checkbox
        v-model="selected"
        class="custom-control-danger"
        value="F"
      >
        Danger
      </b-form-checkbox>
      
      <b-form-checkbox
        v-model="selected"
        class="custom-control-warning"
        value="D"
      >
        Warning
      </b-form-checkbox>
      <b-form-checkbox
        v-model="selected"
        class="custom-control-info"
        value="G"
      >
        Info
      </b-form-checkbox>
    </div>
    
    <template #code>
      {{ codeColor }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode                    from "@core/components/b-card-code";
import { BCardText, BFormCheckbox } from "bootstrap-vue";
import { codeColor }                from "./code";


export default {
  components: {
    BCardCode,
    BFormCheckbox,
    BCardText
  },
  data () {
    return {
      selected: [ "A", "C", "CC", "B", "D", "E", "F", "G" ],
      codeColor
    };
  }
};
</script>
