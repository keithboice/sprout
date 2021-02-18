<template>
  <b-row>
    <b-col cols="12">
      <basic-form-tags />
      <separators-form-tags />
      <removal-form-tags />
      <styling-form-tags />
      <validation-form-tags />
      <detecting-form-tags />
      <native-input-form-tags />
      <custom-form-tags />
      <advance-custom-form-tags />
    </b-col>
  </b-row>
</template>

<script>
import { BCol, BRow }        from "bootstrap-vue";
import AdvanceCustomFormTags from "./FormTagsAdvanceCustom.vue";
import BasicFormTags         from "./FormTagsBasic.vue";
import CustomFormTags        from "./FormTagsCustom.vue";
import DetectingFormTags     from "./FormTagsDetecting.vue";
import NativeInputFormTags   from "./FormTagsNativeInput.vue";
import RemovalFormTags       from "./FormTagsRemoval.vue";
import SeparatorsFormTags    from "./FormTagsSeparators.vue";
import StylingFormTags       from "./FormTagsStyling.vue";
import ValidationFormTags    from "./FormTagsValidation.vue";


export default {
  components: {
    BRow,
    BCol,
    
    BasicFormTags,
    SeparatorsFormTags,
    RemovalFormTags,
    StylingFormTags,
    ValidationFormTags,
    DetectingFormTags,
    NativeInputFormTags,
    CustomFormTags,
    AdvanceCustomFormTags
  }
};
</script>
