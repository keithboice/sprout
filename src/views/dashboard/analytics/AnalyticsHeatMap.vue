<template>
  <b-card no-body>
    <b-card-header>
      <b-card-title class="mb-sm-0 mb-1">
        Opt-ins
      </b-card-title>
    </b-card-header>

    <b-card-body>
      <vue-apex-charts
        type="radialBar"
        height="400"
        :options="apexChatData.radialBarChart.chartOptions"
        :series="apexChatData.radialBarChart.series"
      />
    </b-card-body>
  </b-card>
</template>

<script>
import {
  BCard, BCardHeader, BCardTitle, BCardBody,
} from 'bootstrap-vue'
import VueApexCharts from 'vue-apexcharts'
// import { $themeColors } from '@themeConfig'
import apexChatData from '../../charts-and-maps/charts/apex-chart/apexChartData'

export default {
  components: {
    VueApexCharts,
    BCard,
    BCardHeader,
    BCardTitle,
    BCardBody,
  },
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      apexChatData,
    }
  },
}
</script>
