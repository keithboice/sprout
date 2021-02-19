<template>
  <b-card-code title="Labeled Progress">
    <b-card-text>
      <span>Add labels to your progress bars by either enabling</span>
      <code>show-progress</code>
      <span>(percentage of max) or</span>
      <code>show-value</code>
      <span>
        for the current absolute value. You may also set the precision (number of digits after the decimal) via the
      </span>
      <code>precision</code>
      <span>prop (default is 0digits after the decimal).</span>
    </b-card-text>
    
    <div class="demo-vertical-spacing">
      <div>
        <label>No label</label>
        <b-progress
          max="100"
          value="25"
        />
      </div>
      
      <div>
        <label>Value label</label>
        <b-progress
          class="progress-bar-secondary"
          max="100"
          show-value
          value="35"
          variant="secondary"
        />
      </div>
      
      <div>
        <label>Progress label</label>
        <b-progress
          class="progress-bar-success"
          max="100"
          show-progress
          value="45"
          variant="success"
        />
      </div>
      
      <div>
        <label>Value label with precision</label>
        <b-progress
          class="progress-bar-danger"
          max="100"
          precision="2"
          show-value
          value="55"
          variant="danger"
        />
      </div>
      
      <div>
        <label>Progress label with precision</label>
        <b-progress
          class="progress-bar-warning"
          max="100"
          precision="2"
          show-progress
          value="65"
          variant="warning"
        />
      </div>
    </div>
    
    <template #code>
      {{ codeLabel }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode                from "@core/components/b-card-code";
import { BCardText, BProgress } from "bootstrap-vue";
import { codeLabel }            from "./code";


export default {
  components: {
    BCardCode,
    BProgress,
    BCardText
  },
  data () {
    return {
      codeLabel
    };
  }
};
</script>
