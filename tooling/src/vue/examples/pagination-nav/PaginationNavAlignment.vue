<template>
  <b-card-code title="Alignment">
    <b-card-text>
      <span>By default the pagination component is left aligned. Change the alignment to </span>
      <code>center, right</code>
      <span> (</span>
      <code>right</code>
      <span> is an alias for </span>
      <code>end</code>
      <span> )</span>
      <span>, or </span>
      <code>fill</code>
      <span> by setting the prop </span>
      <code>align</code>
      <span> to the appropriate value.</span>
    </b-card-text>
    
    <div>
      <span>Radios using options</span>
      <div class="my-1">
        <b-form-radio
          v-model="selected"
          inline
          name="vuexy-radio"
          value="default"
        >
          Default
        </b-form-radio>
        <b-form-radio
          v-model="selected"
          inline
          name="vuexy-radio"
          value="right"
        >
          Right
        </b-form-radio>
        <b-form-radio
          v-model="selected"
          inline
          name="vuexy-radio"
          value="center"
        >
          Center
        </b-form-radio>
        <b-form-radio
          v-model="selected"
          inline
          name="vuexy-radio"
          value="fill"
        >
          Fill
        </b-form-radio>
      </div>
      
      <!-- pagination nav -->
      <b-pagination-nav
        :align="selected"
        base-url="#"
        number-of-pages="10"
      />
    </div>
    
    <template #code>
      {{ codeAlignment }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode                                 from "@core/components/b-card-code";
import { BCardText, BFormRadio, BPaginationNav } from "bootstrap-vue";
import { codeAlignment }                         from "./code";


export default {
  components: {
    BCardCode,
    BPaginationNav,
    BFormRadio,
    BCardText
  },
  data () {
    return {
      selected: "default",
      codeAlignment
    };
  }
};
</script>
