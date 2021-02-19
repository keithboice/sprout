<template>
  <b-card-code title="Colored Progress">
    <b-card-text>
      <span>Use</span>
      <code>variant</code>
      <span>prop to add different colors to progressbar and add </span>
      <code>.progress-bar-{color_name}</code>.
    </b-card-text>
    
    <div class="demo-vertical-spacing">
      <b-progress
        max="100"
        value="25"
      />
      <b-progress
        class="progress-bar-secondary"
        max="100"
        value="35"
        variant="secondary"
      />
      <b-progress
        class="progress-bar-success"
        max="100"
        value="45"
        variant="success"
      />
      <b-progress
        class="progress-bar-danger"
        max="100"
        value="55"
        variant="danger"
      />
      <b-progress
        class="progress-bar-warning"
        max="100"
        value="65"
        variant="warning"
      />
      <b-progress
        class="progress-bar-info"
        max="100"
        value="75"
        variant="info"
      />
      <b-progress
        class="progress-bar-dark"
        max="100"
        value="85"
        variant="dark"
      />
    </div>
    
    <template #code>
      {{ codeColored }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode                from "@core/components/b-card-code";
import { BCardText, BProgress } from "bootstrap-vue";
import { codeColored }          from "./code";


export default {
  components: {
    BCardCode,
    BProgress,
    BCardText
  },
  data () {
    return {
      codeColored
    };
  }
};
</script>
