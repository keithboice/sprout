<template>
  <b-row class="match-height">
    <b-col lg="6">
      <pagination-nav-basic />
    </b-col>
    <b-col lg="6">
      <pagination-nav-number-gen />
    </b-col>
    <b-col lg="6">
      <pagination-nav-array />
    </b-col>
    <b-col lg="6">
      <pagination-nav-button-content />
    </b-col>
    <b-col lg="6">
      <pagination-nav-goto />
    </b-col>
    <b-col lg="6">
      <pagination-nav-size />
    </b-col>
    <b-col lg="6">
      <pagination-nav-pill />
    </b-col>
    <b-col lg="6">
      <pagination-nav-alignment />
    </b-col>
  </b-row>
</template>

<script>
import { BCol, BRow }         from "bootstrap-vue";
import PaginationNavAlignment from "./PaginationNavAlignment.vue";
import PaginationNavArray     from "./PaginationNavArray.vue";

import PaginationNavBasic         from "./PaginationNavBasic.vue";
import PaginationNavButtonContent from "./PaginationNavButtonContent.vue";
import PaginationNavGoto          from "./PaginationNavGoto.vue";
import PaginationNavNumberGen     from "./PaginationNavNumberGen.vue";
import PaginationNavPill          from "./PaginationNavPill.vue";
import PaginationNavSize          from "./PaginationNavSize.vue";


export default {
  components: {
    BRow,
    BCol,
    
    PaginationNavBasic,
    PaginationNavArray,
    PaginationNavNumberGen,
    PaginationNavButtonContent,
    PaginationNavGoto,
    PaginationNavSize,
    PaginationNavPill,
    PaginationNavAlignment
  }
};
</script>
