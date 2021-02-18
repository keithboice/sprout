<template>
  <b-row>
    <b-col cols="12">
      <form-checkbox-basic />
      <form-checkbox-custom />
      <form-checkbox-color />
      <form-checkbox-multiple />
      <form-checkbox-change-names />
      <form-checkbox-stacked-inline />
      <form-checkbox-states />
      <form-checkbox-indeterminate />
    </b-col>
  </b-row>
</template>

<script>
import { BCol, BRow }            from "bootstrap-vue";
import FormCheckboxBasic         from "./FormCheckboxBasic.vue";
import FormCheckboxChangeNames   from "./FormCheckboxChangeNames.vue";
import FormCheckboxColor         from "./FormCheckboxColor.vue";
import FormCheckboxCustom        from "./FormCheckboxCustom.vue";
import FormCheckboxIndeterminate from "./FormCheckboxIndeterminate.vue";
import FormCheckboxMultiple      from "./FormCheckboxMultiple.vue";
import FormCheckboxStackedInline from "./FormCheckboxStackedInline.vue";
import FormCheckboxStates        from "./FormCheckboxStates.vue";


export default {
  components: {
    BRow,
    BCol,
    FormCheckboxBasic,
    FormCheckboxCustom,
    FormCheckboxColor,
    FormCheckboxStates,
    FormCheckboxMultiple,
    FormCheckboxChangeNames,
    FormCheckboxStackedInline,
    FormCheckboxIndeterminate
  }
};
</script>
