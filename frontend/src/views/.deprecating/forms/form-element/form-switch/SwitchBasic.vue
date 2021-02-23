<template>
  <b-card-code title="Basic Switch">
    <b-card-text class="mb-0">
      <span>A single checkbox can be rendered with a switch appearance by setting the prop </span> <code>switch</code> <span> to </span>
      <code>true</code>
    </b-card-text>
    
    <!-- switch -->
    <div class="demo-inline-spacing">
      <b-form-checkbox checked="true" inline name="check-button" switch>
        Active Switch
      </b-form-checkbox>
      <b-form-checkbox checked="false" inline name="check-button" switch>
        Inactive Switch
      </b-form-checkbox>
      <b-form-checkbox checked="true" disabled inline name="check-button" switch>
        Disabled Active Switch
      </b-form-checkbox>
      
      <b-form-checkbox checked="false" disabled inline name="check-button" switch>
        Disabled Inactive Switch
      </b-form-checkbox>
    </div>
    
    <template #code>
      {{ codeBasic }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode                    from "@core/components/b-card-code"
import { BFormCheckbox, BCardText } from "bootstrap-vue"
import { codeBasic }                from "./code"


export default {
  components: {
    BCardCode,
    BFormCheckbox,
    BCardText
  },
  data () {
    return {
      codeBasic
    }
  }
}
</script>
