<template>
  <b-card-code title="Variants">
    <b-card-text class="mb-0">
      <span>Easily apply one of the Bootstrap theme color variants to the rating icon via the </span> <code>variant</code> <span> prop.</span>
    </b-card-text>
    
    <div class="demo-inline-spacing">
      
      <!-- Primary -->
      <b-form-radio v-model="selected" class="custom-control-primary" name="some-radio9" value="primary">
        Primary
      </b-form-radio>
      
      <!-- secondary -->
      <b-form-radio v-model="selected" class="custom-control-secondary" name="some-radio9" value="secondary">
        Secondary
      </b-form-radio>
      
      <!-- success -->
      <b-form-radio v-model="selected" class="custom-control-success" name="some-radio9" value="success">
        Success
      </b-form-radio>
      
      <!-- danger -->
      <b-form-radio v-model="selected" class="custom-control-danger" name="some-radio9" value="danger">
        Danger
      </b-form-radio>
      
      <!-- warning -->
      <b-form-radio v-model="selected" class="custom-control-warning" name="some-radio9" value="warning">
        Warning
      </b-form-radio>
      
      <!-- info -->
      <b-form-radio v-model="selected" class="custom-control-info" name="some-radio9" value="info">
        Info
      </b-form-radio>
    </div>
    
    <!-- Rating -->
    <b-form-rating v-model="value" :variant="selected" class="mt-1" inline no-border />
    
    <template #code>
      {{ codeVariant }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode                              from "@core/components/b-card-code"
import { BFormRating, BFormRadio, BCardText } from "bootstrap-vue"
import { codeVariant }                        from "./code"


export default {
  components: {
    BCardCode,
    BFormRadio,
    BFormRating,
    BCardText
  },
  data () {
    return {
      value:    3,
      selected: "primary",
      codeVariant
    }
  }
}
</script>
