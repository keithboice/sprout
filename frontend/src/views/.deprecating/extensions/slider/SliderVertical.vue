<template>
  <div>
    <h4 class="card-title">
      VERTICAL SLIDERS </h4>
    <p>
      <span>When the value of direction is </span> <code>btt</code> <span> or </span> <code>ttb</code>
      <span>, you need to set the component height</span>
    </p>
    
    <b-row>
      
      <!-- default vertical slider -->
      <b-col lg="4" md="6">
        <b-card-code title="Default Vertical Slider">
          <div class="d-flex justify-content-center">
            <vue-slider v-model="value" :height="200" :process="false" :tooltip="'none'" class="mr-1" direction="btt" />
            <vue-slider v-model="value1" :height="200" :process="false" :tooltip="'none'" class="mr-1 vue-slider-secondary" direction="btt" />
            <vue-slider v-model="value2" :height="200" :process="false" :tooltip="'none'" class="mr-1 vue-slider-success" direction="btt" />
            <vue-slider v-model="value3" :height="200" :process="false" :tooltip="'none'" class="mr-1 vue-slider-warning" direction="btt" />
            <vue-slider v-model="value4" :height="200" :process="false" :tooltip="'none'" class="mr-1 vue-slider-danger" direction="btt" />
            <vue-slider v-model="value5" :height="200" :process="false" :tooltip="'none'" class="mr-1 vue-slider-info" direction="btt" />
          </div>
          
          <template #code>
            {{ codeVerticalDefault }}
          </template>
        </b-card-code>
      </b-col>
      
      <!-- connect to lower -->
      <b-col lg="4" md="6">
        <b-card-code title="Connect to lower">
          <div class="d-flex justify-content-center">
            <vue-slider v-model="value6" :height="200" :tooltip="'none'" class="mr-1" direction="ttb" />
            <vue-slider v-model="value7" :height="200" :tooltip="'none'" class="mr-1 vue-slider-secondary" direction="ttb" />
            <vue-slider v-model="value8" :height="200" :tooltip="'none'" class="mr-1 vue-slider-success" direction="ttb" />
            <vue-slider v-model="value9" :height="200" :tooltip="'none'" class="mr-1 vue-slider-warning" direction="ttb" />
            <vue-slider v-model="value10" :height="200" :tooltip="'none'" class="mr-1 vue-slider-danger" direction="ttb" />
            <vue-slider v-model="value11" :height="200" :tooltip="'none'" class="mr-1 vue-slider-info" direction="ttb" />
          </div>
          
          <template #code>
            {{ codeConntectLower }}
          </template>
        </b-card-code>
      </b-col>
      
      <!-- connect to uper -->
      <b-col lg="4" md="6">
        <b-card-code title="Connect to upper">
          <div class="d-flex justify-content-center">
            <vue-slider v-model="value12" :height="200" :tooltip="'none'" class="mr-1" direction="btt" />
            <vue-slider v-model="value13" :height="200" :tooltip="'none'" class="mr-1 vue-slider-secondary" direction="btt" />
            <vue-slider v-model="value14" :height="200" :tooltip="'none'" class="mr-1 vue-slider-success" direction="btt" />
            <vue-slider v-model="value15" :height="200" :tooltip="'none'" class="mr-1 vue-slider-warning" direction="btt" />
            <vue-slider v-model="value16" :height="200" :tooltip="'none'" class="mr-1 vue-slider-danger" direction="btt" />
            <vue-slider v-model="value17" :height="200" :tooltip="'none'" class="mr-1 vue-slider-info" direction="btt" />
          </div>
          
          <template #code>
            {{ codeConnectUpper }}
          </template>
        </b-card-code>
      </b-col>
      
      <!-- Tooltips -->
      <b-col lg="4" md="6">
        <b-card-code title="Tooltips">
          <div class="d-flex justify-content-center">
            <vue-slider v-model="value18" :height="200" :process="false" :tooltip="'always'" class="mr-4" direction="btt" />
            <vue-slider v-model="value19" :height="200" :process="false" :tooltip="'always'" class="mr-4 vue-slider-success" direction="btt" />
            <vue-slider v-model="value20" :height="200" :process="false" :tooltip="'always'" class="mr-4 vue-slider-warning" direction="btt" />
          </div>
          
          <template #code>
            {{ codeTooltips }}
          </template>
        </b-card-code>
      </b-col>
      
      <!-- Direction top to bottom -->
      <b-col lg="4" md="6">
        <b-card-code title="Direction Top To Bottom">
          <div class="d-flex justify-content-center">
            <vue-slider v-model="value21" :adsorb="true" :height="200" :interval="20" :marks="true" :tooltip="'none'" class="mr-4" direction="btt" />
            <vue-slider v-model="value22" :adsorb="true" :data="data" :height="200" :marks="true" :tooltip="'none'" class="mr-4 vue-slider-success" direction="btt" />
            <vue-slider v-model="value23" :adsorb="true" :height="200" :included="true" :marks="marks" :tooltip="'none'" class="mr-4 vue-slider-warning" direction="btt" />
          </div>
          
          <template #code>
            {{ codeTopBottom }}
          </template>
        </b-card-code>
      </b-col>
      
      <!-- limit -->
      <b-col lg="4" md="6">
        <b-card-code title="Limit">
          <div class="d-flex justify-content-center">
            <vue-slider v-model="value24" :height="200" :max-range="50" :min-range="20" :tooltip="'none'" class="mr-1" direction="btt" />
            <vue-slider v-model="value25" :fixed="true" :height="200" :tooltip="'none'" class="mr-1 vue-slider-secondary" direction="btt" />
            <vue-slider v-model="value26" :height="200" :max-range="50" :min-range="20" :tooltip="'none'" class="mr-1 vue-slider-success" direction="btt" />
            <vue-slider v-model="value27" :fixed="true" :height="200" :tooltip="'none'" class="mr-1 vue-slider-warning" direction="btt" />
            <vue-slider v-model="value28" :height="200" :max-range="50" :min-range="20" :tooltip="'none'" class="mr-1 vue-slider-danger" direction="btt" />
            <vue-slider v-model="value29" :fixed="true" :height="200" :tooltip="'none'" class="mr-1 vue-slider-info" direction="btt" />
          </div>
          
          <template #code>
            {{ codeLimit }}
          </template>
        </b-card-code>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import BCardCode                                                                                            from "@core/components/b-card-code/BCardCode.vue"
import { BRow, BCol }                                                                                       from "bootstrap-vue"
import VueSlider                                                                                            from "vue-slider-component"
import { codeVerticalDefault, codeConntectLower, codeConnectUpper, codeTooltips, codeTopBottom, codeLimit } from "./code"


export default {
  components: {
    VueSlider,
    BCardCode,
    BRow,
    BCol
  },
  data () {
    return {
      value:   60,
      value1:  50,
      value2:  40,
      value3:  60,
      value4:  70,
      value5:  85,
      value6:  60,
      value7:  50,
      value8:  40,
      value9:  60,
      value10: 70,
      value11: 85,
      value12: 60,
      value13: 50,
      value14: 40,
      value15: 60,
      value16: 70,
      value17: 85,
      value18: 60,
      value19: 70,
      value20: 85,
      value21: 60,
      value22: "a",
      value23: 60,
      value24: [ 20, 50 ],
      value25: [ 40, 80 ],
      value26: [ 20, 50 ],
      value27: [ 40, 80 ],
      value28: [ 20, 50 ],
      value29: [ 40, 80 ],
      data:    [ "a", "b", "c", "d", "e" ],
      marks:   [ 0, 10, 30, 60, 100 ],
      codeVerticalDefault,
      codeConntectLower,
      codeTooltips,
      codeConnectUpper,
      codeTopBottom,
      codeLimit
    }
  }
}
</script>
