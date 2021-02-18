<template>
  <b-row>
    <b-col cols="12">
      <toasts-basic />
      <toasts-translucent />
      <toasts-variants />
      <toasts-delay />
      <toasts-target />
      <toasts-links />
      <toasts-advance />
    </b-col>
  </b-row>
</template>

<script>
import { BCol, BRow }    from "bootstrap-vue";
import ToastsAdvance     from "./ToastsAdvance.vue";
import ToastsBasic       from "./ToastsBasic.vue";
import ToastsDelay       from "./ToastsDelay.vue";
import ToastsLinks       from "./ToastsLinks.vue";
import ToastsTarget      from "./ToastsTarget.vue";
import ToastsTranslucent from "./ToastsTranslucent.vue";
import ToastsVariants    from "./ToastsVariants.vue";


export default {
  components: {
    BRow,
    BCol,
    
    ToastsBasic,
    ToastsTranslucent,
    ToastsDelay,
    ToastsTarget,
    ToastsVariants,
    ToastsLinks,
    ToastsAdvance
  }
};
</script>
