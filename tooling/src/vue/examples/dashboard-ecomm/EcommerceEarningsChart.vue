<template>
  <b-card no-body>
    <b-card-header>
      <!-- title and subtitle -->
      <div>
        <b-card-title class="mb-1">
          Avg Balance
        </b-card-title>
      </div>
      <!--/ title and subtitle -->
      
      <!-- badge -->
      <div class="d-flex align-items-center flex-wrap mt-sm-0 mt-1">
        <h5 class="font-weight-bolder mb-0 mr-1">
          $ 100,000
        </h5>
        <b-badge variant="light-secondary">
          <feather-icon
            class="text-danger mr-25"
            icon="ArrowDownIcon"
            size="16"
          />
          <span class="align-middle">20%</span>
        </b-badge>
      </div>
      <!--/ badge -->
    </b-card-header>
    
    <b-card-body>
      <vue-apex-charts
        :options="apexChatData.lineChartSimple.chartOptions"
        :series="apexChatData.lineChartSimple.series"
        height="400"
        type="line"
      />
    </b-card-body>
  </b-card>
</template>

<script>
import { BBadge, BCard, BCardBody, BCardHeader, BCardTitle } from "bootstrap-vue";
import VueApexCharts                                         from "vue-apexcharts";
import apexChatData                                          from "../charts/apex-chart/apexChartData";


export default {
  components: {
    VueApexCharts,
    BCardHeader,
    BCard,
    BBadge,
    BCardBody,
    BCardTitle
  },
  data () {
    return {
      apexChatData
    };
  }
};
</script>
