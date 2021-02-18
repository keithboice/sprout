<template>
  <b-card-code title="Button content">
    <b-card-text>
      <span>For a full list of all available slots see the</span>
      <code>Slots</code>
      <span>section below.</span>
    </b-card-text>
    
    <div class="demo-spacing-0">
      <!-- Use text in props -->
      <b-pagination
        v-model="currentPage"
        :per-page="perPage"
        :total-rows="rows"
        align="left"
        first-text="First"
        last-text="Last"
        next-text="Next"
        prev-text="Prev"
      />
      
      <!-- Use emojis in props -->
      <b-pagination
        v-model="currentPage"
        :per-page="perPage"
        :total-rows="rows"
        align="left"
        class="mt-2"
        first-text="⏮"
        last-text="⏭"
        next-text="⏩"
        prev-text="⏪"
      />
      
      <!-- Use HTML and sub-components in slots -->
      <b-pagination
        v-model="currentPage"
        :per-page="perPage"
        :total-rows="rows"
        align="left"
        class="mt-2"
      >
        <template
          #first-text
        >
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
      </b-pagination>
    </div>
    
    <template #code>
      {{ codeContent }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode                            from "@core/components/b-card-code";
import { BCardText, BPagination, BSpinner } from "bootstrap-vue";
import { codeContent }                      from "./code";


export default {
  components: {
    BCardCode,
    BPagination,
    BSpinner,
    BCardText
  },
  data () {
    return {
      codeContent,
      currentPage: 1,
      perPage:     10,
      rows:        100
    };
  }
};
</script>
