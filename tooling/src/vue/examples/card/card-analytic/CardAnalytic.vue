<template>
  <div>
    <b-row class="match-height">
      <b-col lg="6">
        <card-analytic-support-tracker />
      </b-col>
      <b-col lg="6">
        <card-analytic-avg-sessions />
      </b-col>
      <b-col lg="8">
        <card-analytic-revenue-report />
      </b-col>
      <b-col lg="4">
        <card-analytic-goal-overview />
      </b-col>
      <b-col lg="8">
        <card-analytic-revenue />
      </b-col>
      <b-col lg="4">
        <card-analytic-sales-radar-chart />
      </b-col>
    </b-row>
    
    <b-row>
      <b-col lg="8">
        <b-row class="match-height">
          <b-col cols="12">
            <card-analytic-sale-line-chart />
          </b-col>
          <b-col md="6">
            <card-analytic-sessions-by-device />
          </b-col>
          <b-col md="6">
            <card-analytic-customers />
          </b-col>
        </b-row>
      </b-col>
      <b-col lg="4">
        <card-analytic-product-orders />
        <card-analytic-earnings-chart />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { BCol, BRow }              from "bootstrap-vue";
import CardAnalyticAvgSessions     from "./CardAnalyticAvgSessions.vue";
import CardAnalyticCustomers       from "./CardAnalyticCustomers.vue";
import CardAnalyticEarningsChart   from "./CardAnalyticEarningsChart.vue";
import CardAnalyticGoalOverview    from "./CardAnalyticGoalOverview.vue";
import CardAnalyticProductOrders   from "./CardAnalyticProductOrders.vue";
import CardAnalyticRevenue         from "./CardAnalyticRevenue.vue";
import CardAnalyticRevenueReport   from "./CardAnalyticRevenueReport.vue";
import CardAnalyticSaleLineChart   from "./CardAnalyticSaleLineChart.vue";
import CardAnalyticSalesRadarChart from "./CardAnalyticSalesRadarChart.vue";

import CardAnalyticSessionsByDevice from "./CardAnalyticSessionsByDevice.vue";
import CardAnalyticSupportTracker   from "./CardAnalyticSupportTracker.vue";


export default {
  components: {
    BRow,
    BCol,
    
    CardAnalyticSessionsByDevice,
    CardAnalyticProductOrders,
    CardAnalyticCustomers,
    CardAnalyticSalesRadarChart,
    CardAnalyticSupportTracker,
    CardAnalyticRevenue,
    CardAnalyticGoalOverview,
    CardAnalyticAvgSessions,
    CardAnalyticSaleLineChart,
    CardAnalyticRevenueReport,
    CardAnalyticEarningsChart
  }
};
</script>

<style lang="scss">
@import '@core/scss/vue/libs/chart-apex.scss';
</style>
