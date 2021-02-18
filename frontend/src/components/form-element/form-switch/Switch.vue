<template>
  <b-row>
    <b-col cols="12">
      <switch-basic />
      <switch-color />
      <switch-icon />
      <switch-grouped />
    </b-col>
  </b-row>
</template>

<script>
import { BCol, BRow } from "bootstrap-vue";
import SwitchBasic    from "./SwitchBasic.vue";
import SwitchColor    from "./SwitchColor.vue";
import SwitchGrouped  from "./SwitchGrouped.vue";
import SwitchIcon     from "./SwitchIcon.vue";


export default {
  components: {
    BRow,
    BCol,
    
    SwitchBasic,
    SwitchColor,
    SwitchIcon,
    SwitchGrouped
  }
};
</script>
