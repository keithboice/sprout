<template>
  <b-card no-body>
    <b-card-header>
      <!-- title and legend -->
      <h4 class="card-title mb-50">
        New Technologies Data
      </h4>
      <!--/ title and legend -->
      
      <!-- button group -->
      <b-button-group>
        <b-button
          v-ripple.400="'rgba(186, 191, 199, 0.15)'"
          variant="outline-primary"
        >
          Daily
        </b-button>
        <b-button
          v-ripple.400="'rgba(186, 191, 199, 0.15)'"
          variant="outline-primary"
        >
          Monthly
        </b-button>
        <b-button
          v-ripple.400="'rgba(186, 191, 199, 0.15)'"
          variant="outline-primary"
        >
          Yearly
        </b-button>
      </b-button-group>
      <!--/ button group -->
    </b-card-header>
    
    <b-card-body>
      <vue-apex-charts
        :options="apexChatData.scatterChart.chartOptions"
        :series="apexChatData.scatterChart.series"
        height="400"
        type="scatter"
      />
    </b-card-body>
  </b-card>
</template>

<script>
import { BButton, BButtonGroup, BCard, BCardBody, BCardHeader } from "bootstrap-vue";
import VueApexCharts                                            from "vue-apexcharts";
import Ripple                                                   from "vue-ripple-directive";
import apexChatData                                             from "./apexChartData";


export default {
  components: {
    BCard,
    VueApexCharts,
    BCardHeader,
    BCardBody,
    BButton,
    BButtonGroup
  },
  directives: {
    Ripple
  },
  data () {
    return {
      apexChatData
    };
  }
};
</script>
