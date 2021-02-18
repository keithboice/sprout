<template>
  <b-card-code title="Striped Progress">
    <b-card-text>Set striped to apply a stripe via CSS gradient over the progress bar's background variant.</b-card-text>
    
    <div class="demo-vertical-spacing">
      <b-progress
        max="100"
        striped
        value="25"
      />
      <b-progress
        class="progress-bar-secondary"
        max="100"
        striped
        value="35"
        variant="secondary"
      />
      <b-progress
        class="progress-bar-success"
        max="100"
        striped
        value="45"
        variant="success"
      />
      <b-progress
        class="progress-bar-danger"
        max="100"
        striped
        value="55"
        variant="danger"
      />
      <b-progress
        class="progress-bar-warning"
        max="100"
        striped
        value="65"
        variant="warning"
      />
      <b-progress
        class="progress-bar-info"
        max="100"
        striped
        value="75"
        variant="info"
      />
      <b-progress
        class="progress-bar-dark"
        max="100"
        striped
        value="85"
        variant="dark"
      />
    </div>
    
    <template #code>
      {{ codeStripped }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode                from "@core/components/b-card-code";
import { BCardText, BProgress } from "bootstrap-vue";
import { codeStripped }         from "./code";


export default {
  components: {
    BCardCode,
    BProgress,
    BCardText
  },
  data () {
    return {
      codeStripped
    };
  }
};
</script>
