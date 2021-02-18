<template>
  <b-row>
    <b-col cols="12">
      <overlay-basic />
      <overlay-backdrop />
      <overlay-fade />
      <overlay-spinner />
      <overlay-corner-round />
      <overlay-custom-content />
      <overlay-no-wrap-mode />
      <overlay-form />
      <overlay-busy-state />
    </b-col>
  </b-row>
</template>

<script>
import { BCol, BRow }       from "bootstrap-vue";
import OverlayBackdrop      from "../components/overlay/OverlayBackdrop.vue";
import OverlayBasic         from "../components/overlay/OverlayBasic.vue";
import OverlayBusyState     from "../components/overlay/OverlayBusyState.vue";
import OverlayCornerRound   from "../components/overlay/OverlayCornerRound.vue";
import OverlayCustomContent from "../components/overlay/OverlayCustomContent.vue";
import OverlayFade          from "../components/overlay/OverlayFade.vue";
import OverlayForm          from "../components/overlay/OverlayForm.vue";
import OverlayNoWrapMode    from "../components/overlay/OverlayNoWrapMode.vue";
import OverlaySpinner       from "../components/overlay/OverlaySpinner.vue";


export default {
  components: {
    BRow,
    BCol,
    
    OverlayBasic,
    OverlayBackdrop,
    OverlayFade,
    OverlaySpinner,
    OverlayCornerRound,
    OverlayCustomContent,
    OverlayNoWrapMode,
    OverlayForm,
    OverlayBusyState
  }
};
</script>

<style lang="scss" scoped>
@import '~@core/scss/base/bootstrap-extended/_include';
@import '~@core/scss/base/components/_variables-dark';

.dark-layout {
  div ::v-deep .card .card-body {
    .b-overlay {
      .bg-light {
        background-color: $theme-dark-body-bg !important;
      }
    }
  }
}
</style>
