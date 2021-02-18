<template>
  <b-row>
    <b-col cols="12">
      <progress-basic />
      <progress-colored />
      <progress-label />
      <progress-label-custom />
      <progress-stripped />
      <progress-multiple-bar />
      <progress-animated />
    </b-col>
  </b-row>
</template>

<script>
import { BCol, BRow }      from "bootstrap-vue";
import ProgressAnimated    from "../components/progress/ProgressAnimated.vue";
import ProgressBasic       from "../components/progress/ProgressBasic.vue";
import ProgressColored     from "../components/progress/ProgressColored.vue";
import ProgressLabel       from "../components/progress/ProgressLabel.vue";
import ProgressLabelCustom from "../components/progress/ProgressLabelCustom.vue";
import ProgressMultipleBar from "../components/progress/ProgressMultipleBar.vue";
import ProgressStripped    from "../components/progress/ProgressStripped.vue";


export default {
  components: {
    BRow,
    BCol,
    
    ProgressBasic,
    ProgressColored,
    ProgressLabel,
    ProgressAnimated,
    ProgressStripped,
    ProgressMultipleBar,
    ProgressLabelCustom
  }
};
</script>
