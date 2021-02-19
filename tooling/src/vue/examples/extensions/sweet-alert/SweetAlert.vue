<template>
  <b-row>
    <b-col cols="12">
      <sweet-alert-basic />
      <sweet-alert-position />
      <sweet-alert-animation />
      <sweet-alert-types />
      <sweet-alert-option />
      <sweet-alert-confirm-option />
    </b-col>
  </b-row>
</template>

<script>
import { BCol, BRow }          from "bootstrap-vue";
import SweetAlertAnimation     from "./SweetAlertAnimation.vue";
import SweetAlertBasic         from "./SweetAlertBasic.vue";
import SweetAlertConfirmOption from "./SweetAlertConfirmOption.vue";
import SweetAlertOption        from "./SweetAlertOption.vue";
import SweetAlertPosition      from "./SweetAlertPosition.vue";
import SweetAlertTypes         from "./SweetAlertTypes.vue";


export default {
  components: {
    BRow,
    BCol,
    
    SweetAlertBasic,
    SweetAlertPosition,
    SweetAlertAnimation,
    SweetAlertTypes,
    SweetAlertOption,
    SweetAlertConfirmOption
  }
};
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-sweetalert.scss';
</style>
