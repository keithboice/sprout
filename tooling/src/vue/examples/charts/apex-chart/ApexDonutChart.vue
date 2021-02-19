<template>
  <b-card>
    <b-card-title class="mb-1">
      Expense Ratio
    </b-card-title>
    <b-card-sub-title class="mb-2">
      Spending on various categories
    </b-card-sub-title>
    
    <vue-apex-charts
      :options="apexChatData.donutChart.chartOptions"
      :series="apexChatData.donutChart.series"
      height="350"
      type="donut"
    />
  </b-card>
</template>

<script>
import { BCard, BCardSubTitle, BCardTitle } from "bootstrap-vue";
import VueApexCharts                        from "vue-apexcharts";
import apexChatData                         from "./apexChartData";


export default {
  components: {
    VueApexCharts,
    BCard,
    BCardTitle,
    BCardSubTitle
  },
  data () {
    return {
      apexChatData
    };
  }
};
</script>
