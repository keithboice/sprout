<template>
  <b-card-code title="Pill style">
    <b-card-text>
      <span>Easily switch to pill style buttons by setting the </span>
      <code>pills</code>
      <span> prop</span>
    </b-card-text>
    
    <div>
      <h6>Small Pills</h6>
      <b-pagination-nav
        base-url="#"
        number-of-pages="10"
        pills
        size="sm"
      />
    </div>
    
    <div class="mt-2">
      <h6>Default Pills</h6>
      <b-pagination-nav
        base-url="#"
        number-of-pages="10"
        pills
      />
    </div>
    
    <div class="mt-2">
      <h6>Large Pills</h6>
      <b-pagination-nav
        base-url="#"
        number-of-pages="10"
        pills
        size="lg"
      />
    </div>
    
    <template #code>
      {{ codePill }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode                     from "@core/components/b-card-code";
import { BCardText, BPaginationNav } from "bootstrap-vue";
import { codePill }                  from "./code";


export default {
  components: {
    BCardCode,
    BPaginationNav,
    BCardText
  },
  data () {
    return {
      codePill
    };
  }
};
</script>
