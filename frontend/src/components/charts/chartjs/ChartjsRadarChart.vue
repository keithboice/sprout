<template>
  <b-card title="Radar Chart">
    <chartjs-component-radar-chart
      :data="chartjsData.radarChart.data"
      :height="355"
      :options="chartjsData.radarChart.options"
    />
  </b-card>
</template>

<script>
import { BCard }                  from "bootstrap-vue";
import chartjsData                from "./chartjsData";
import ChartjsComponentRadarChart from "./charts-components/ChartjsComponentRadarChart.vue";


export default {
  components: {
    ChartjsComponentRadarChart,
    BCard
  },
  data () {
    return {
      chartjsData
    };
  }
};
</script>
