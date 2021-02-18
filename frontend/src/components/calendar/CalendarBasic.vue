<template>
  <b-card-code title="Calendar">
    <b-card-text class="mb-0">
      <span>BootstrapVue's custom </span>
      <code>&lt;b-calendar&gt;</code>
      <span>
        component generates a WAI-ARIA compliant calendar style date selection widget, which can be used to control
        other components, or can be used to create customized date picker inputs.
      </span>
    </b-card-text>
    
    <b-row class="text-center">
      <b-col
        class="mt-1"
        md="6"
      >
        
        <!-- calendar -->
        <b-calendar
          v-model="value"
          locale="en-US"
          @context="onContext"
        />
      </b-col>
      <b-col md="6">
        
        <!-- prism -->
        <div class="mt-1">
          <prism
            class="rounded mb-0"
            language="javascript"
          >
            Context: {{ context }}
          </prism>
        </div>
      </b-col>
    </b-row>
    
    <template #code>
      {{ codeBasic }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode                            from "@core/components/b-card-code";
import { BCalendar, BCardText, BCol, BRow } from "bootstrap-vue";
import "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import Prism                                from "vue-prism-component";
import { codeBasic }                        from "./code";


export default {
  components: {
    BCardCode,
    BRow,
    BCol,
    BCalendar,
    BCardText,
    Prism
  },
  data () {
    return {
      value:   "",
      context: null,
      codeBasic
    };
  },
  methods: {
    onContext ( ctx ) {
      this.context = ctx;
    }
  }
};
</script>
