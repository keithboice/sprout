<template>
  <b-card-code title="Checkbox and radio addons">
    <b-row>
      
      <!-- checkbox -->
      <b-col md="6">
        <b-form-group>
          <b-input-group>
            <b-input-group-prepend is-text>
              <b-form-checkbox name="checkbox-input" plain />
            </b-input-group-prepend>
            <b-form-input placeholder="Message" />
          </b-input-group>
        </b-form-group>
      </b-col>
      
      <!-- radio -->
      <b-col md="6">
        <b-form-group>
          <b-input-group>
            <b-input-group-prepend is-text>
              <b-form-radio v-model="radio1" name="radio-input1" plain value="radio2" />
            </b-input-group-prepend>
            <b-form-input placeholder="Message" />
          </b-input-group>
        </b-form-group>
      </b-col>
      
      <!-- custome checkbox and radio -->
      <b-col class=" my-1" cols="12">
        <small class="font-weight-semibold">Custom checkbox and radio</small>
      </b-col>
      <b-col md="6">
        <b-form-group>
          <b-input-group>
            <b-input-group-prepend is-text>
              <b-form-checkbox name="checkbox-input" />
            </b-input-group-prepend>
            <b-form-input placeholder="Message" />
          </b-input-group>
        </b-form-group>
      </b-col>
      
      <!-- radio -->
      <b-col md="6">
        <b-form-group>
          <b-input-group>
            <b-input-group-prepend is-text>
              <b-form-radio v-model="radio1" name="radio-input1" value="radio2" />
            </b-input-group-prepend>
            <b-form-input placeholder="Message" />
          </b-input-group>
        </b-form-group>
      </b-col>
    </b-row>
    
    <template #code>
      {{ codeCheckboxRadio }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode                                                                                          from "@core/components/b-card-code"
import { BInputGroup, BFormInput, BInputGroupPrepend, BRow, BCol, BFormCheckbox, BFormRadio, BFormGroup } from "bootstrap-vue"
import { codeCheckboxRadio }                                                                              from "./code"


export default {
  components: {
    BCardCode,
    BFormInput,
    BInputGroup,
    BInputGroupPrepend,
    BRow,
    BCol,
    BFormCheckbox,
    BFormRadio,
    BFormGroup
  },
  data () {
    return {
      codeCheckboxRadio,
      radio1: "radio2"
    }
  }
}
</script>
