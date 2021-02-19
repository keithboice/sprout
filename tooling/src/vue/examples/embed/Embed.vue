<template>
  <b-row>
    <b-col cols="12">
      <embed-types />
    </b-col>
  </b-row>
</template>

<script>
import { BCol, BRow } from "bootstrap-vue";
import EmbedTypes     from "./EmbedTypes.vue";


export default {
  components: {
    EmbedTypes,
    BRow,
    BCol
  }
};
</script>
