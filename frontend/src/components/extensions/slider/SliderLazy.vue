<template>
  <b-card-code title="Lazy Slider">
    <b-card-text>
      The value will only be updated when the drag is over
    </b-card-text>
    <b-card-text>value: {{ value }}</b-card-text>
    
    <!-- slider -->
    <vue-slider
      v-model="value"
      :direction="direction"
      :lazy="true"
    />
    
    <template #code>
      {{ codeLazy }}
    </template>
  </b-card-code>
</template>

<script>
import store         from "@/store";
import BCardCode     from "@core/components/b-card-code/BCardCode.vue";
import { BCardText } from "bootstrap-vue";
import VueSlider     from "vue-slider-component";
import { codeLazy }  from "./code";


export default {
  components: {
    BCardText,
    VueSlider,
    BCardCode
  },
  data () {
    return {
      codeLazy,
      value: 0,
      dir:   "ltr"
    };
  },
  computed: {
    direction () {
      if ( store.state.appConfig.isRTL ) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.dir = "rtl";
        return this.dir;
      }
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.dir = "ltr";
      return this.dir;
    }
  }
};
</script>
