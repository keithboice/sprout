<template>
  <b-row class="match-height">
    <b-col cols="12">
      <modal-basic />
    </b-col>
    <b-col cols="12">
      <modal-theme />
    </b-col>
    <b-col cols="12">
      <modal-sizes />
    </b-col>
    <b-col cols="12">
      <modal-form-scroll />
    </b-col>
    <b-col md="6">
      <modal-variant />
    </b-col>
    <b-col md="6">
      <modal-vmodal />
    </b-col>
    <b-col cols="12">
      <modal-prevent />
    </b-col>
    <b-col cols="12">
      <modal-disbale-foooter />
    </b-col>
    <b-col cols="12">
      <modal-message-box />
    </b-col>
    <b-col md="6">
      <modal-footer-button-sizing />
    </b-col>
    <b-col md="6">
      <modal-multiple-support />
    </b-col>
    <b-col cols="12">
      <modal-method />
    </b-col>
  </b-row>
</template>

<script>
import { BCol, BRow }      from "bootstrap-vue";
import ModalBasic          from "../components/modal/ModalBasic.vue";
import ModalDisbaleFoooter from "../components/modal/ModalDisableFooter.vue";

import ModalFooterButtonSizing from "../components/modal/ModalFooterSizing.vue";
import ModalFormScroll         from "../components/modal/ModalFormScroll.vue";
import ModalMessageBox         from "../components/modal/ModalMessageBox.vue";
import ModalMethod             from "../components/modal/ModalMethod.vue";
import ModalMultipleSupport    from "../components/modal/ModalMultiple.vue";
import ModalPrevent            from "../components/modal/ModalPrevent.vue";
import ModalSizes              from "../components/modal/ModalSizes.vue";
import ModalTheme              from "../components/modal/ModalTheme.vue";
import ModalVariant            from "../components/modal/ModalVariant.vue";
import ModalVmodal             from "../components/modal/ModalVmodal.vue";


export default {
  components: {
    BCol,
    BRow,
    
    ModalFooterButtonSizing,
    ModalMultipleSupport,
    ModalPrevent,
    ModalSizes,
    ModalVariant,
    ModalVmodal,
    ModalTheme,
    ModalDisbaleFoooter,
    ModalMessageBox,
    ModalBasic,
    ModalMethod,
    ModalFormScroll
  }
};
</script>
