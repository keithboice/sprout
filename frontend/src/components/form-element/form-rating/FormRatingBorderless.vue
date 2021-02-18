<template>
  <b-card-code title="Borderless">
    <b-card-text>
      <span>By default, </span>
      <code>&lt;b-from-rating&gt;</code>
      <span>
        has borders around rating. Simply set the
      </span>
      <code>no-border</code>
      <span> prop to </span>
      <code>true</code>
      <span> to remove border.</span>
    </b-card-text>
    
    <div>
      <label
        class="mr-1"
        for="rating-sm-no-border"
      >Small rating with no border</label>
      <b-form-rating
        id="rating-sm-no-border"
        v-model="value"
        inline
        no-border
        size="sm"
        variant="warning"
      />
    </div>
    <div class="mt-1">
      <label
        class="mr-1"
        for="rating-md-no-border"
      >Default rating (medium) with border</label>
      <b-form-rating
        id="rating-md-no-border"
        v-model="value"
        inline
        variant="warning"
      />
    </div>
    <div class="mt-1">
      <label
        class="mr-1"
        for="rating-lg-no-border"
      >Large rating with no border</label>
      <b-form-rating
        id="rating-lg-no-border"
        v-model="value"
        inline
        no-border
        size="lg"
        variant="warning"
      />
    </div>
    
    <template #code>
      {{ codeBorderLess }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode                  from "@core/components/b-card-code";
import { BCardText, BFormRating } from "bootstrap-vue";
import { codeBorderLess }         from "./code";


export default {
  components: {
    BCardCode,
    BCardText,
    BFormRating
  },
  data () {
    return {
      value: null,
      codeBorderLess
    };
  }
};
</script>
