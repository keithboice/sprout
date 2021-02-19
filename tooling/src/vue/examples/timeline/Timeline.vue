<template>
  <b-row>
    <b-col
      cols="12"
      md="6"
    >
      <timeline-basic />
    </b-col>
    <b-col
      cols="12"
      md="6"
    >
      <timeline-with-icon />
    </b-col>
    <b-col
      cols="12"
      md="6"
    >
      <timeline-custom-content />
    </b-col>
    <b-col
      cols="12"
      md="6"
    >
      <timeline-custom-content-with-icon />
    </b-col>
  </b-row>
</template>

<script>
import { BCol, BRow }                from "bootstrap-vue";
import TimelineBasic                 from "./TimelineBasic.vue";
import TimelineCustomContent         from "./TimelineCustomContent.vue";
import TimelineCustomContentWithIcon from "./TimelineCustomContentWithIcon.vue";
import TimelineWithIcon              from "./TimelineWithIcon.vue";


export default {
  components: {
    BRow,
    BCol,
    TimelineBasic,
    TimelineWithIcon,
    TimelineCustomContent,
    TimelineCustomContentWithIcon
  }
};
</script>

<style>

</style>
