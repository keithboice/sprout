<template>
  <b-row>
    <b-col cols="12">
      <dropdown-basic />
      <dropdown-split />
      <dropdown-outline />
      <dropdown-flat />
      <dropdown-gradient />
      <dropdown-size />
      <dropdown-direction />
      <b-row class="match-height">
        <b-col md="6">
          <dropdown-block />
        </b-col>
        <b-col md="6">
          <dropdown-variation />
        </b-col>
        <b-col md="6">
          <dropdown-link />
        </b-col>
        <b-col md="6">
          <dropdown-lazy />
        </b-col>
      </b-row>
      <dropdown-sub-component />
    </b-col>
  </b-row>
</template>

<script>
import { BCol, BRow } from "bootstrap-vue";

import DropdownBasic        from "./DropdownBasic.vue";
import DropdownBlock        from "./DropdownBlock.vue";
import DropdownDirection    from "./DropdownDirection.vue";
import DropdownFlat         from "./DropdownFlat.vue";
import DropdownGradient     from "./DropdownGradient.vue";
import DropdownLazy         from "./DropdownLazy.vue";
import DropdownLink         from "./DropdownLink.vue";
import DropdownOutline      from "./DropdownOutline.vue";
import DropdownSize         from "./DropdownSize.vue";
import DropdownSplit        from "./DropdownSplit.vue";
import DropdownSubComponent from "./DropdownSubComponent.vue";
import DropdownVariation    from "./DropdownVariation.vue";


export default {
  components: {
    BRow,
    BCol,
    
    DropdownBasic,
    DropdownDirection,
    DropdownSize,
    DropdownSplit,
    DropdownVariation,
    DropdownBlock,
    DropdownSubComponent,
    DropdownLazy,
    DropdownLink,
    DropdownOutline,
    DropdownFlat,
    DropdownGradient
  }
};
</script>
