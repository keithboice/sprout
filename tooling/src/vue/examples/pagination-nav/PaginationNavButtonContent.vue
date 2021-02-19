<template>
  <b-card-code title="Button content">
    <b-card-text>
      <code>&lt;b-pagination-nav&gt;</code>
      <span> supports several props/slots that allow you to customize the appearance.</span>
    </b-card-text>
    
    <!-- Use text in props -->
    <b-pagination-nav
      base-url="#"
      first-text="First"
      last-text="Last"
      next-text="Next"
      number-of-pages="10"
      prev-text="Prev"
    />
    
    <!-- Use emojis in props -->
    <b-pagination-nav
      base-url="#"
      class="mt-2"
      first-text="⏮"
      last-text="⏭"
      next-text="⏩"
      number-of-pages="10"
      prev-text="⏪"
    />
    
    <!-- Use HTML and sub-components in slots -->
    <b-pagination-nav
      base-url="#"
      class="mt-2"
      number-of-pages="10"
    >
      <template #first-text>
        <span class="text-success">First</span>
      </template>
      <template #prev-text>
        <span class="text-danger">Prev</span>
      </template>
      <template #next-text>
        <span class="text-warning">Next</span>
      </template>
      <template #last-text>
        <span class="text-info">Last</span>
      </template>
      <template #ellipsis-text>
        <div>
          <b-spinner
            small
            type="grow"
          />
          <b-spinner
            small
            type="grow"
          />
        </div>
      </template>
      <template #page="{ page, active }">
        <b v-if="active">{{ page }}</b>
        <i v-else>{{ page }}</i>
      </template>
    </b-pagination-nav>
    
    <template #code>
      {{ codeButtonContent }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode                               from "@core/components/b-card-code";
import { BCardText, BPaginationNav, BSpinner } from "bootstrap-vue";
import { codeButtonContent }                   from "./code";


export default {
  components: {
    BCardCode,
    BPaginationNav,
    BCardText,
    BSpinner
  },
  data () {
    return {
      codeButtonContent
    };
  }
};
</script>
