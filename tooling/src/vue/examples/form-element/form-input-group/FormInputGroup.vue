<template>
  <b-row class="match-height">
    <b-col md="6">
      <form-input-group-basic />
    </b-col>
    <b-col md="6">
      <form-input-group-merged />
    </b-col>
    <b-col md="6">
      <form-input-group-size />
    </b-col>
    <b-col md="6">
      <form-input-group-checkbox-radio />
    </b-col>
    <b-col cols="12">
      <form-input-group-button />
    </b-col>
    <b-col cols="12">
      <form-input-group-dropdown />
    </b-col>
  </b-row>
</template>

<script>
import { BCol, BRow } from "bootstrap-vue";

import FormInputGroupBasic         from "./FormInputGroupBasic.vue";
import FormInputGroupButton        from "./FormInputGroupButton.vue";
import FormInputGroupCheckboxRadio from "./FormInputGroupCheckboxRadio.vue";
import FormInputGroupDropdown      from "./FormInputGroupDropdown.vue";
import FormInputGroupMerged        from "./FormInputGroupMerged.vue";
import FormInputGroupSize          from "./FormInputGroupSize.vue";


export default {
  components: {
    BRow,
    BCol,
    
    FormInputGroupBasic,
    FormInputGroupMerged,
    FormInputGroupCheckboxRadio,
    FormInputGroupSize,
    FormInputGroupButton,
    FormInputGroupDropdown
  }
};
</script>
