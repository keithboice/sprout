<template>
  <b-card-code title="Slider Colors - Handles">
    <b-card-text>
      <span>You can use </span> <code>process-style</code> <span> and </span> <code>dot-style</code> <span> for style process bar and dot</span>
    </b-card-text>
    
    <!-- primary -->
    <h6>Default / Primary Color Slider</h6>
    <vue-slider v-model="value" :direction="direction" :tooltip="'none'" class="mb-2" />
    
    <!-- secondary -->
    <h6>Secondary Color Slider</h6>
    <vue-slider v-model="value1" :direction="direction" :tooltip="'none'" class="mb-2 vue-slider-secondary" />
    
    <!-- success -->
    <h6>Success Color Slider</h6>
    <vue-slider v-model="value2" :direction="direction" :tooltip="'none'" class="mb-2 vue-slider-success" />
    
    <!-- danger -->
    <h6>Danger Color Slider</h6>
    <vue-slider v-model="value4" :direction="direction" :fixed="true" :tooltip="'none'" class="mb-2 vue-slider-danger" />
    
    <!-- warning -->
    <h6>Warning Color Slider</h6>
    <vue-slider v-model="value3" :direction="direction" :tooltip="'none'" class="mb-2 vue-slider-warning" />
    
    <!-- info -->
    <h6>Info Color Slider</h6>
    <vue-slider v-model="value5" :direction="direction" :max-range="50" :min-range="20" :tooltip="'none'" class="mb-2 vue-slider-info" />
    
    <template #code>
      {{ codeColors }}
    </template>
  </b-card-code>
</template>

<script>
import { BCardText }  from "bootstrap-vue"
import BCardCode      from "@core/components/b-card-code/BCardCode.vue"
import VueSlider      from "vue-slider-component"
import store          from "@/store"
import { codeColors } from "./code"


export default {
  components: {
    BCardText,
    VueSlider,
    BCardCode
  },
  data () {
    return {
      codeColors,
      value:  50,
      value1: [ 0, 50 ],
      value2: [ 0, 30, 100 ],
      value3: 45,
      value4: [ 30, 60 ],
      value5: [ 20, 40 ],
      value6: [ 0, 20, 40, 60, 80, 100 ],
      dir:    "ltr"
    }
  },
  computed: {
    direction () {
      if ( store.state.chat.isRTL ) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.dir = "rtl"
        return this.dir
      }
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.dir = "ltr"
      return this.dir
    }
  }
}
</script>
