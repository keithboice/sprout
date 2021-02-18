<template>
  <b-row>
    <b-col cols="12">
      <table-basic />
      <table-style-options />
      <table-row-col-style />
      <table-responsive />
      <table-formatter-callback />
      <table-custom-render />
      <table-sticky-columns-headers />
      <table-rowdetails-support />
      <table-row-select-support />
      <table-kitchen-sink />
      <table-light-weight />
      <table-simple />
    </b-col>
  </b-row>
</template>

<script>
import { BCol, BRow }            from "bootstrap-vue";
import TableBasic                from "../components/table/bs-table/TableBasic.vue";
import TableCustomRender         from "../components/table/bs-table/TableCustomRender.vue";
import TableFormatterCallback    from "../components/table/bs-table/TableFormatterCallback.vue";
import TableKitchenSink          from "../components/table/bs-table/TableKitchenSink.vue";
import TableLightWeight          from "../components/table/bs-table/TableLightWeight.vue";
import TableResponsive           from "../components/table/bs-table/TableResponsive.vue";
import TableRowColStyle          from "../components/table/bs-table/TableRowColStyle.vue";
import TableRowdetailsSupport    from "../components/table/bs-table/TableRowdetailsSupport.vue";
import TableRowSelectSupport     from "../components/table/bs-table/TableRowSelectSupport.vue";
import TableSimple               from "../components/table/bs-table/TableSimple.vue";
import TableStickyColumnsHeaders from "../components/table/bs-table/TableStickyColumnsHeaders.vue";
import TableStyleOptions         from "../components/table/bs-table/TableStyleOptions.vue";


export default {
  components: {
    BRow,
    BCol,
    
    TableBasic,
    TableStyleOptions,
    TableRowColStyle,
    TableResponsive,
    TableFormatterCallback,
    TableCustomRender,
    TableStickyColumnsHeaders,
    TableRowdetailsSupport,
    TableRowSelectSupport,
    TableLightWeight,
    TableSimple,
    TableKitchenSink
  }
};
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';
</style>
