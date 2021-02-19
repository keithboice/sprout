<template>
  <b-row>
    <b-col cols="12">
      <alert-default />
      <alert-title />
      <alert-color />
      <alert-icon />
      <alert-auto-dismiss />
      <alert-v-model-support />
      <alert-animation />
      <alert-example />
    </b-col>
  </b-row>
</template>

<script>
import { BCol, BRow }     from "bootstrap-vue";
import AlertAnimation     from "./AlertAnimation.vue";
import AlertAutoDismiss   from "./AlertAutoDismiss.vue";
import AlertColor         from "./AlertColor.vue";
import AlertDefault       from "./AlertDefault.vue";
import AlertExample       from "./AlertExample.vue";
import AlertIcon          from "./AlertIcon.vue";
import AlertTitle         from "./AlertTitle.vue";
import AlertVModelSupport from "./AlertVModelSupport.vue";


export default {
  components: {
    BRow,
    BCol,
    
    AlertDefault,
    AlertTitle,
    AlertIcon,
    AlertColor,
    AlertAutoDismiss,
    AlertVModelSupport,
    AlertAnimation,
    AlertExample
  }
};
</script>
