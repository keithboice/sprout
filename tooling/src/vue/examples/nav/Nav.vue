<template>
  <b-row class="match-height">
    <b-col md="6">
      <nav-basic />
    </b-col>
    <b-col md="6">
      <nav-border />
    </b-col>
    <b-col md="6">
      <nav-fill />
    </b-col>
    <b-col md="6">
      <nav-justified />
    </b-col>
    <b-col md="6">
      <nav-alignment />
    </b-col>
    <b-col md="6">
      <nav-dropdown />
    </b-col>
    <b-col md="6">
      <nav-vertical />
    </b-col>
    <b-col md="6">
      <nav-vertical-border />
    </b-col>
    <b-col md="6">
      <nav-square-border />
    </b-col>
    <b-col md="6">
      <nav-divider />
    </b-col>
  </b-row>
</template>

<script>
import { BCol, BRow } from "bootstrap-vue";
import NavAlignment   from "./NavAlignment.vue";

import NavBasic          from "./NavBasic.vue";
import NavBorder         from "./NavBorder.vue";
import NavDivider        from "./NavDivider.vue";
import NavDropdown       from "./NavDropdown.vue";
import NavFill           from "./NavFill.vue";
import NavJustified      from "./NavJustified.vue";
import NavSquareBorder   from "./NavSquareBorder.vue";
import NavVertical       from "./NavVertical.vue";
import NavVerticalBorder from "./NavVerticalBorder.vue";


export default {
  components: {
    BRow,
    BCol,
    
    NavBasic,
    NavBorder,
    NavFill,
    NavJustified,
    NavAlignment,
    NavDropdown,
    NavVertical,
    NavVerticalBorder,
    NavSquareBorder,
    NavDivider
  }
};
</script>
