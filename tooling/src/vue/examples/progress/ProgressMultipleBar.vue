<template>
  <b-card-code title="Multiple bars">
    <b-card-text>
      <span>Include multiple</span>
      <code>&lt;b-progress-bar&gt;</code>
      <span>sub-components in a</span>
      <code>&lt;b-progress&gt;</code>
      <span>component to build a horizontally stacked set of progress bars.</span>
    </b-card-text>
    
    <b-progress :max="max">
      <b-progress-bar
        :value="values[0]"
        show-progress
        variant="danger"
      />
      <b-progress-bar
        :value="values[1]"
        show-progress
        variant="warning"
      />
      <b-progress-bar
        :value="values[2]"
        show-progress
        variant="primary"
      />
    </b-progress>
    
    <template #code>
      {{ codeMultipleBar }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode                              from "@core/components/b-card-code";
import { BCardText, BProgress, BProgressBar } from "bootstrap-vue";
import { codeMultipleBar }                    from "./code";


export default {
  components: {
    BCardCode,
    BProgressBar,
    BCardText,
    BProgress
  },
  data () {
    return {
      values: [ 15, 50, 10 ],
      max:    100,
      codeMultipleBar
    };
  }
};
</script>
