<template>
  <div>
    <!-- Miscellaneous Charts -->
    <b-row class="match-height">
      <b-col
        cols="6"
        lg="2"
      >
        <card-statistic-order-chart />
      </b-col>
      <b-col
        cols="6"
        lg="2"
      >
        <card-statistic-profit-chart />
      </b-col>
      <b-col
        cols="12"
        lg="8"
      >
        <card-statistics-group />
      </b-col>
    </b-row>
    <!--/ Miscellaneous Charts -->
    
    <!-- Stats Card Vertical -->
    <b-row class="match-height">
      <b-col
        md="4"
        sm="6"
        xl="2"
      >
        <statistic-card-vertical
          color="info"
          icon="EyeIcon"
          statistic="36.9k"
          statistic-title="Views"
        />
      </b-col>
      <b-col
        md="4"
        sm="6"
        xl="2"
      >
        <statistic-card-vertical
          color="warning"
          icon="MessageSquareIcon"
          statistic="12k"
          statistic-title="Comments"
        />
      </b-col>
      <b-col
        md="4"
        sm="6"
        xl="2"
      >
        <statistic-card-vertical
          color="danger"
          icon="ShoppingBagIcon"
          statistic="97.8k"
          statistic-title="Orders"
        />
      </b-col>
      <b-col
        md="4"
        sm="6"
        xl="2"
      >
        <statistic-card-vertical
          color="primary"
          icon="HeartIcon"
          statistic="26.8"
          statistic-title="Favorited"
        />
      </b-col>
      <b-col
        md="4"
        sm="6"
        xl="2"
      >
        <statistic-card-vertical
          color="success"
          icon="AwardIcon"
          statistic="689"
          statistic-title="Reviews"
        />
      </b-col>
      <b-col
        md="4"
        sm="6"
        xl="2"
      >
        <statistic-card-vertical
          color="danger"
          hide-chart
          icon="TruckIcon"
          statistic="2.1k"
          statistic-title="Returns"
        />
      </b-col>
    </b-row>
    
    <!-- Stats Card Horizontal -->
    <b-row>
      <b-col
        lg="3"
        sm="6"
      >
        <statistic-card-horizontal
          icon="CpuIcon"
          statistic="86%"
          statistic-title="CPU Usage"
        />
      </b-col>
      <b-col
        lg="3"
        sm="6"
      >
        <statistic-card-horizontal
          color="success"
          icon="ServerIcon"
          statistic="1.2gb"
          statistic-title="Memory Usage"
        />
      </b-col>
      <b-col
        lg="3"
        sm="6"
      >
        <statistic-card-horizontal
          color="danger"
          icon="ActivityIcon"
          statistic="0.1%"
          statistic-title="Downtime Ratio"
        />
      </b-col>
      <b-col
        lg="3"
        sm="6"
      >
        <statistic-card-horizontal
          color="warning"
          icon="AlertOctagonIcon"
        
          statistic="13"
          statistic-title="Issues Found"
        />
      </b-col>
    </b-row>
    
    <!-- Stats Card w/ Area Chart -->
    <b-row>
      <b-col
        lg="3"
        sm="6"
      >
        <statistic-card-with-area-chart
          v-if="subscribersGained.analyticsData"
          :chart-data="subscribersGained.series"
          :statistic="kFormatter(subscribersGained.analyticsData.subscribers)"
          icon="UsersIcon"
          statistic-title="Subscribers Gained"
        />
      </b-col>
      <b-col
        lg="3"
        sm="6"
      >
        <statistic-card-with-area-chart
          v-if="revenueGenerated.analyticsData"
          :chart-data="revenueGenerated.series"
          :statistic="kFormatter(revenueGenerated.analyticsData.revenue)"
          color="success"
          icon="CreditCardIcon"
          statistic-title="Revenue Generated"
        />
      </b-col>
      <b-col
        lg="3"
        sm="6"
      >
        <statistic-card-with-area-chart
          v-if="quarterlySales.analyticsData"
          :chart-data="quarterlySales.series"
          :statistic="kFormatter(quarterlySales.analyticsData.sales)"
          color="danger"
          icon="ShoppingCartIcon"
          statistic-title="Quarterly Sales"
        />
      </b-col>
      <b-col
        lg="3"
        sm="6"
      >
        <statistic-card-with-area-chart
          v-if="ordersRecevied.analyticsData"
          :chart-data="ordersRecevied.series"
          :statistic="kFormatter(ordersRecevied.analyticsData.orders)"
          color="warning"
          icon="PackageIcon"
          statistic-title="Orders Received"
        />
      </b-col>
    </b-row>
    
    <!-- Stats Card w/ line chart -->
    <b-row>
      <b-col
        md="4"
        sm="6"
      >
        <statistic-card-with-line-chart
          :chart-data="siteTraffic.series"
          icon="MonitorIcon"
          statistic="78.9k"
          statistic-title="Site Traffic"
        />
      </b-col>
      <b-col
        md="4"
        sm="6"
      >
        <statistic-card-with-line-chart
          :chart-data="activeUsers.series"
          color="success"
          icon="UserCheckIcon"
          statistic="659.8k"
          statistic-title="Active Users"
        />
      </b-col>
      <b-col
        md="4"
        sm="6"
      >
        <statistic-card-with-line-chart
          :chart-data="newsletter.series"
          color="warning"
          icon="MailIcon"
          statistic="28.7k"
          statistic-title="Newsletter"
        />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { BRow, BCol }             from "bootstrap-vue"
import StatisticCardVertical      from "@core/components/statistics-cards/StatisticCardVertical.vue"
import StatisticCardHorizontal    from "@core/components/statistics-cards/StatisticCardHorizontal.vue"
import StatisticCardWithAreaChart from "@core/components/statistics-cards/StatisticCardWithAreaChart.vue"
import StatisticCardWithLineChart from "@core/components/statistics-cards/StatisticCardWithLineChart.vue"
import { kFormatter }             from "@core/../../../utils/filter"
import CardStatisticOrderChart    from "./CardStatisticOrderChart.vue"
import CardStatisticProfitChart   from "./CardStatisticProfitChart.vue"
import CardStatisticsGroup        from "./CardStatisticsGroup.vue"


export default {
  components: {
    BRow,
    BCol,
    StatisticCardVertical,
    StatisticCardHorizontal,
    StatisticCardWithAreaChart,
    StatisticCardWithLineChart,
    CardStatisticOrderChart,
    CardStatisticProfitChart,
    CardStatisticsGroup
  },
  data () {
    return {
      // Area charts
      subscribersGained: {},
      revenueGenerated:  {},
      quarterlySales:    {},
      ordersRecevied:    {},
      
      // Line Charts
      siteTraffic: {},
      activeUsers: {},
      newsletter:  {}
    }
  },
  created () {
    // Subscribers gained
    this.$http.get( "/card/card-statistics/subscribers" )
      .then( response => { this.subscribersGained = response.data } )
    
    // Revenue Generated
    this.$http.get( "/card/card-statistics/revenue" )
      .then( response => { this.revenueGenerated = response.data } )
    
    // Sales
    this.$http.get( "/card/card-statistics/sales" )
      .then( response => { this.quarterlySales = response.data } )
    
    // Orders
    this.$http.get( "/card/card-statistics/orders" )
      .then( response => { this.ordersRecevied = response.data } )
    
    // Site Traffic gained
    this.$http.get( "/card/card-statistics/site-traffic" )
      .then( response => { this.siteTraffic = response.data } )
    
    // Active Users
    this.$http.get( "/card/card-statistics/active-users" )
      .then( response => { this.activeUsers = response.data } )
    
    // Newsletter
    this.$http.get( "/card/card-statistics/newsletter" )
      .then( response => { this.newsletter = response.data } )
  },
  methods: {
    kFormatter
  }
}
</script>
