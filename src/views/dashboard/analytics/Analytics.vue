<template>
  <section id="dashboard-analytics">
    <b-row class="match-height">
      <b-col
        lg="3"
        sm="6"
      >
        <analytics-congratulation :data="data.congratulations" />
      </b-col>
      <b-col
        lg="3"
        sm="6"
      >
        <statistic-card-with-area-chart
          v-if="data.subscribersGained"
          :chart-data="data.subscribersGained.series"
          :statistic="kFormatter(data.subscribersGained.analyticsData.subscribers)"
          icon="UsersIcon"
          statistic-title="Subscribers"
        />
      </b-col>
      <b-col
        lg="3"
        sm="6"
      >
        <statistic-card-with-area-chart
          v-if="data.ordersRecevied"
          :chart-data="data.ordersRecevied.series"
          :statistic="kFormatter(data.ordersRecevied.analyticsData.orders)"
          color="warning"
          icon="PackageIcon"
          statistic-title="Messages"
        />
      </b-col>
      <b-col
        lg="3"
        sm="6"
      >
        <statistic-card-with-area-chart
          v-if="data.ordersRecevied"
          :chart-data="data.ordersRecevied.series"
          :statistic="kFormatter(data.ordersRecevied.analyticsData.orders)"
          color="info"
          icon="PackageIcon"
          statistic-title="Campaigns"
        />
      </b-col>
    </b-row>

    <b-row class="match-height">
      <b-col lg="3">
        <analytics-timeline :data="data.timeline" />
      </b-col>
      <b-col lg="6">
        <analytics-avg-sessions :data="data.avgSessions" />
      </b-col>
      <b-col lg="3">
        <analytics-heat-map :data="data.supportTracker" />
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12">
        <invoice-list />
      </b-col>
    </b-row>
  </section>
</template>

<script>
import InvoiceList from '@/views/apps/invoice/invoice-list/InvoiceList.vue'

import StatisticCardWithAreaChart from '@core/components/statistics-cards/StatisticCardWithAreaChart.vue'
import { kFormatter } from '@core/utils/filter'
import { BCol, BRow } from 'bootstrap-vue'
import AnalyticsAvgSessions from './AnalyticsAvgSessions.vue'
import AnalyticsCongratulation from './AnalyticsCongratulation.vue'
import AnalyticsHeatMap from './AnalyticsHeatMap.vue'
import AnalyticsTimeline from './AnalyticsTimeline.vue'

export default {
  components: {
    BRow,
    BCol,
    AnalyticsCongratulation,
    AnalyticsAvgSessions,
    StatisticCardWithAreaChart,
    AnalyticsHeatMap,
    AnalyticsTimeline,
    InvoiceList,
  },
  data() {
    return {
      data: {},
    }
  },
  created() {
    // data
    this.$http.get('/analytics/data')
      .then(response => { this.data = response.data })
  },
  methods: {
    kFormatter,
  },
}
</script>
