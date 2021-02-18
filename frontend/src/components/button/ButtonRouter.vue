<template>
  <b-card-code title="Router">
    <b-card-text>
      <span>Refer to the </span>
      <code>Router support</code>
      <span> reference docs for the various supported </span>
      <code>&lt;router-link&gt;</code>
      <span> related props.</span>
    </b-card-text>
    
    <!-- alert -->
    <b-alert
      class="mb-0"
      show
      variant="warning"
    >
      <div class="alert-body">
        <span><strong>Note:</strong> Onclick of the Link button will redirect you to another page.</span>
      </div>
    </b-alert>
    
    <div class="demo-inline-spacing">
      <b-button
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        to="/components/breadcrumb"
        variant="primary"
      >
        String Literal
      </b-button>
      <b-button
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        :to="{ path: '/components/breadcrumb' }"
        variant="warning"
      >
        Object Path
      </b-button>
      <b-button
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        :to="{ name: 'components-breadcrumb'}"
        variant="success"
      >
        Named Router
      </b-button>
      <b-button
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        :to="{ path: '/components/breadcrumb', query: { plan: 'private' } }"
        variant="dark"
      >
        With Query
      </b-button>
    </div>
    
    <template #code>
      {{ codeButtonRouter }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode                      from "@core/components/b-card-code";
import { BAlert, BButton, BCardText } from "bootstrap-vue";
import Ripple                         from "vue-ripple-directive";
import { codeButtonRouter }           from "./code";


export default {
  components: {
    BCardCode,
    BButton,
    BCardText,
    BAlert
  },
  directives: {
    Ripple
  },
  data () {
    return {
      codeButtonRouter
    };
  }
};
</script>
