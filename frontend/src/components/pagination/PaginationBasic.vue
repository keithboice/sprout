<template>
  <b-card-code title="Basic">
    <b-card-text>
      <span>
        Quick first, previous, next, last, and page buttons for pagination control of another component (such as
      </span>
      <code>&lt;b-table&gt;</code>
      <span>or lists).</span>
    </b-card-text>
    
    <!-- pagination -->
    <div class="demo-spacing-0">
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        hide-goto-end-buttons
      />
    </div>
    
    <template #code>
      {{ codeBasic }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode                  from "@core/components/b-card-code";
import { BCardText, BPagination } from "bootstrap-vue";
import { codeBasic }              from "./code";


export default {
  components: {
    BCardCode,
    BPagination,
    BCardText
  },
  data () {
    return {
      codeBasic,
      currentPage: 1,
      perPage:     1,
      rows:        100
    };
  }
};
</script>
