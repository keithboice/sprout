<template>
  <b-row class="match-height">
    <b-col cols="12">
      <form-input-basic />
    </b-col>
    <b-col md="6">
      <form-input-size />
    </b-col>
    <b-col md="6">
      <form-input-horizontal-lable-size />
    </b-col>
    <b-col cols="12">
      <form-floating-label />
    </b-col>
    <b-col cols="12">
      <form-input-contextual-states />
    </b-col>
    <b-col cols="12">
      <form-input-validate-tooltips />
    </b-col>
    <b-col md="6">
      <form-input-datalist />
    </b-col>
    <b-col md="6">
      <form-input-debounce />
    </b-col>
    <b-col cols="12">
      <form-input-formatter />
    </b-col>
  </b-row>
</template>

<script>
import { BCol, BRow }    from "bootstrap-vue";
import FormFloatingLabel from "./FormFloatingLabel.vue";

import FormInputBasic               from "./FormInputBasic.vue";
import FormInputContextualStates    from "./FormInputContextualStates.vue";
import FormInputDatalist            from "./FormInputDatalist.vue";
import FormInputDebounce            from "./FormInputDebounce.vue";
import FormInputFormatter           from "./FormInputFormatter.vue";
import FormInputHorizontalLableSize from "./FormInputHorizontalLableSize.vue";
import FormInputSize                from "./FormInputSize.vue";
import FormInputValidateTooltips    from "./FormInputValidateTooltips.vue";


export default {
  components: {
    BRow,
    BCol,
    
    FormInputBasic,
    FormInputSize,
    FormInputHorizontalLableSize,
    FormFloatingLabel,
    FormInputContextualStates,
    FormInputValidateTooltips,
    FormInputDatalist,
    FormInputDebounce,
    FormInputFormatter
  }
};
</script>
