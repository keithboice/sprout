<template>
  <b-card-code title="Color">
    <b-card-text class="mb-0">
      <span>To change the color of the radio use the </span> <code>.custom-control-{value}</code>
      <span> for primary, secondary, success, danger, info, warning.</span>
    </b-card-text>
    
    <div class="demo-inline-spacing">
      <b-form-radio v-model="Selected" class="custom-control-primary" name="some-radio9" value="e">
        Primary (Default)
      </b-form-radio>
      <b-form-radio v-model="Selected" class="custom-control-secondary" name="some-radio9" value="ff">
        Secondary
      </b-form-radio>
      <b-form-radio v-model="Selected" class="custom-control-success" name="some-radio9" value="g">
        Success
      </b-form-radio>
      <b-form-radio v-model="Selected" class="custom-control-danger" name="some-radio9" value="i">
        Danger
      </b-form-radio>
      <b-form-radio v-model="Selected" class="custom-control-warning" name="some-radio9" value="h">
        Warning
      </b-form-radio>
      <b-form-radio v-model="Selected" class="custom-control-info" name="some-radio9" value="j">
        Info
      </b-form-radio>
    </div>
    
    <template #code>
      {{ codeColor }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode                 from "@core/components/b-card-code"
import { BFormRadio, BCardText } from "bootstrap-vue"
import { codeColor }             from "./code"


export default {
  components: {
    BCardCode,
    BFormRadio,
    BCardText
  },
  data () {
    return {
      Selected: "e",
      codeColor
    }
  }
}
</script>
