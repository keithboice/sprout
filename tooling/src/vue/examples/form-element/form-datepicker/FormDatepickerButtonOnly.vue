<template>
  <b-card-code
    title="Button only mode"
  >
    <b-card-text>
      <code>button-only</code>
      <span>
        prop to render the datepicker as a dropdown button. The formatted date label will be rendered with the class
      </span>
      <code>sr-only</code>
      <span> (available only to screen readers).</span>
    </b-card-text>
    
    <label for="example-input">Choose a date</label>
    <b-input-group class="mb-1">
      <b-form-input
        id="example-input"
        v-model="value"
        autocomplete="off"
        placeholder="YYYY-MM-DD"
        show-decade-nav
        type="text"
      />
      <b-input-group-append>
        <b-form-datepicker
          v-model="value"
          aria-controls="example-input"
          button-only
          button-variant="outline-primary"
          locale="en-US"
          right
          show-decade-nav
          size="sm"
          @context="onContext"
        />
      </b-input-group-append>
    </b-input-group>
    
    <b-card-text class="mb-1">
      Value: '{{ value }}'
    </b-card-text>
    <b-card-text class="mb-1">
      Selected: '{{ selected }}'
    </b-card-text>
    <span>Formatted: '{{ formatted }}'</span>
    
    <template #code>
      {{ codeButtonOnly }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode                                                                  from "@core/components/b-card-code";
import { BCardText, BFormDatepicker, BFormInput, BInputGroup, BInputGroupAppend } from "bootstrap-vue";
import { codeButtonOnly }                                                         from "./code";


export default {
  components: {
    BCardCode,
    BCardText,
    BFormDatepicker,
    BInputGroup,
    BInputGroupAppend,
    BFormInput
  },
  data () {
    return {
      value:     "",
      formatted: "",
      selected:  "",
      codeButtonOnly
    };
  },
  methods: {
    onContext ( ctx ) {
      // The date formatted in the locale, or the `label-no-date-selected` string
      this.formatted = ctx.selectedFormatted;
      // The following will be an empty string until a valid date is entered
      this.selected = ctx.selectedYMD;
    }
  }
};
</script>
