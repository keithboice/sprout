<template>
  <b-card-code title="Color Option">
    <b-card-text>
      <span>To add pagination with different color option, use class</span>
      <code>.pagination-{colorName}</code>
      <span>with </span>
      <code>&lt;b-pagination&gt;</code>
      <span>components.</span>
    </b-card-text>
    
    <!-- pagination -->
    <div class="demo-spacing-0">
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        class="pagination-success"
        first-number
        last-number
      >
        <template #prev-text>
          <feather-icon
            icon="ChevronLeftIcon"
            size="18"
          />
        </template>
        <template #next-text>
          <feather-icon
            icon="ChevronRightIcon"
            size="18"
          />
        </template>
      </b-pagination>
      
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        class="pagination-danger mt-2"
        first-number
        last-number
      >
        <template #prev-text>
          <feather-icon
            icon="ChevronLeftIcon"
            size="18"
          />
        </template>
        <template #next-text>
          <feather-icon
            icon="ChevronRightIcon"
            size="18"
          />
        </template>
      </b-pagination>
      
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        class="pagination-info mb-0"
        first-number
        last-number
      >
        <template #prev-text>
          <feather-icon
            icon="ChevronLeftIcon"
            size="18"
          />
        </template>
        <template #next-text>
          <feather-icon
            icon="ChevronRightIcon"
            size="18"
          />
        </template>
      </b-pagination>
    </div>
    
    <template #code>
      {{ codeColorOption }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode                  from "@core/components/b-card-code";
import { BCardText, BPagination } from "bootstrap-vue";
import { codeColorOption }        from "./code";


export default {
  components: {
    BCardCode,
    BPagination,
    BCardText
  },
  data () {
    return {
      codeColorOption,
      currentPage: 4,
      perPage:     1,
      rows:        200
    };
  }
};
</script>
