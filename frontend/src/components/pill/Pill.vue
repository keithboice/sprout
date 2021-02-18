<template>
  <b-row>
    <b-col lg="6">
      <pill-basic />
    </b-col>
    <b-col lg="6">
      <pill-vertical />
    </b-col>
    <b-col lg="6">
      <pill-filled />
    </b-col>
    <b-col lg="6">
      <pill-justified />
    </b-col>
    <b-col cols="12">
      <pill-alignment />
    </b-col>
    <b-col cols="12">
      <pill-themes />
    </b-col>
  </b-row>
</template>

<script>
import { BCol, BRow } from "bootstrap-vue";
import PillAlignment  from "./PillAlignment.vue";

import PillBasic     from "./PillBasic.vue";
import PillFilled    from "./PillFilled.vue";
import PillJustified from "./PillJustified.vue";
import PillThemes    from "./PillThemes.vue";
import PillVertical  from "./PillVertical.vue";


export default {
  components: {
    BRow,
    BCol,
    PillBasic,
    PillFilled,
    PillVertical,
    PillJustified,
    PillAlignment,
    PillThemes
  }
};
</script>
