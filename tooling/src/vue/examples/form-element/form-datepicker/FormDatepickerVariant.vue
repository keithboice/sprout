<template>
  <b-card-code title="Variants">
    <b-card-text>
      <span>The selected date button (background color) defaults to the </span>
      <code>'primary'</code>
      <span> theme variant. You can change this to any of the Bootstrap v4 theme variant colors: </span>
      <code>'secondary', 'success', 'danger', 'warning', 'info',</code>
      <span> etc, via the </span>
      <code>selected-variant</code>
      <span> prop.</span>
    </b-card-text>
    
    <b-row>
      <b-col
        lg="4"
        md="6"
      >
        <b-form-datepicker
          class="mb-1"
          local="en"
          placeholder="Primary Variant"
          selected-variant="primary"
        />
      </b-col>
      <b-col
        lg="4"
        md="6"
      >
        <b-form-datepicker
          class="mb-1"
          local="en"
          placeholder="Secondary Variant"
          selected-variant="secondary"
        />
      </b-col>
      <b-col
        lg="4"
        md="6"
      >
        <b-form-datepicker
          class="mb-1"
          local="en"
          placeholder="Success Variant"
          selected-variant="success"
        />
      </b-col>
      <b-col
        lg="4"
        md="6"
      >
        <b-form-datepicker
          class="mb-1"
          local="en"
          placeholder="Warning Variant"
          selected-variant="warning"
        />
      </b-col>
      <b-col
        lg="4"
        md="6"
      >
        <b-form-datepicker
          class="mb-1"
          local="en"
          placeholder="Danger Variant"
          selected-variant="danger"
        />
      </b-col>
      <b-col
        lg="4"
        md="6"
      >
        <b-form-datepicker
          class="mb-1"
          local="en"
          placeholder="Info Variant"
          selected-variant="info"
        />
      </b-col>
    </b-row>
    
    <template #code>
      {{ codeVariant }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode                                  from "@core/components/b-card-code";
import { BCardText, BCol, BFormDatepicker, BRow } from "bootstrap-vue";
import { codeVariant }                            from "./code";


export default {
  components: {
    BCardCode,
    BCardText,
    BFormDatepicker,
    BRow,
    BCol
  },
  data () {
    return {
      codeVariant
    };
  }
};
</script>
