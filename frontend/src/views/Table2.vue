<template>
  <b-row>
    <b-col cols="12">
      <good-table-basic />
      <good-table-row-group />
      <good-table-column-search />
      <good-table-advance-search />
      <good-table-i18n />
      <good-table-ssr />
    </b-col>
  </b-row>
</template>

<script>
import { BCol, BRow }         from "bootstrap-vue";
import GoodTableAdvanceSearch from "../components/table/vue-good-table/GoodTableAdvanceSearch.vue";
import GoodTableBasic         from "../components/table/vue-good-table/GoodTableBasic.vue";
import GoodTableColumnSearch  from "../components/table/vue-good-table/GoodTableColumnSearch.vue";
import GoodTableI18n          from "../components/table/vue-good-table/GoodTableI18n.vue";
import GoodTableRowGroup      from "../components/table/vue-good-table/GoodTableRowGroup.vue";
import GoodTableSsr           from "../components/table/vue-good-table/GoodTableSsr.vue";


export default {
  components: {
    BRow,
    BCol,
    
    GoodTableBasic,
    GoodTableRowGroup,
    GoodTableColumnSearch,
    GoodTableAdvanceSearch,
    GoodTableI18n,
    GoodTableSsr
  }
};
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-good-table.scss';
</style>
