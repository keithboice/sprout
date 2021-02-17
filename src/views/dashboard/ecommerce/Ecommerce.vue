<template>
  <section id="dashboard-ecommerce">
    <b-row class="match-height">
      <b-col
        lg="2"
        sm="4"
      >
        <ecommerce-order-chart :data="data.statisticsOrder" />
      </b-col>
      <b-col
        lg="8"
        sm="12"
      >
        <ecommerce-statistics :data="data.statisticsItems" />
      </b-col>
      <b-col
        lg="2"
        sm="4"
      >
        <ecommerce-profit-chart :data="data.statisticsProfit" />
      </b-col>
    </b-row>

    <b-row class="match-height" />

    <b-row class="match-height">

      <b-col
        lg="3"
        sm="12"
      >
        <ecommerce-transactions :data="data.transactionData" />
      </b-col>

      <b-col
        lg="3"
        sm="12"
      >
        <ecommerce-goal-overview :data="data.goalOverview" />
      </b-col>

      <!-- Revenue Report Card -->
      <b-col
        lg="6"
        sm="12"
      >
        <ecommerce-revenue-report :data="data.revenue" />
      </b-col>
      <!--/ Revenue Report Card -->
    </b-row>

    <b-row class="match-height">
      <!-- Company Table Card -->
      <b-col
        lg="12"
      >
        <ecommerce-company-table :table-data="data.companyTable" />
      </b-col>
      <!--/ Company Table Card -->

      <b-col
        lg="6"
        sm="12"
      >
        <ecommerce-meetup :data="data.meetup" />
      </b-col>

      <b-col
        lg="6"
        sm="12"
      >
        <ecommerce-earnings-chart :data="data.earningsChart" />
      </b-col>

    </b-row>
  </section>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue'

import { getUserData } from '@/auth/utils'
import EcommerceStatistics from './EcommerceStatistics.vue'
import EcommerceRevenueReport from './EcommerceRevenueReport.vue'
import EcommerceOrderChart from './EcommerceOrderChart.vue'
import EcommerceProfitChart from './EcommerceProfitChart.vue'
import EcommerceEarningsChart from './EcommerceEarningsChart.vue'
import EcommerceCompanyTable from './EcommerceCompanyTable.vue'
import EcommerceMeetup from './EcommerceMeetup.vue'
import EcommerceGoalOverview from './EcommerceGoalOverview.vue'
import EcommerceTransactions from './EcommerceTransactions.vue'

export default {
  components: {
    BRow,
    BCol,

    EcommerceStatistics,
    EcommerceRevenueReport,
    EcommerceOrderChart,
    EcommerceProfitChart,
    EcommerceEarningsChart,
    EcommerceCompanyTable,
    EcommerceMeetup,
    EcommerceGoalOverview,
    EcommerceTransactions,
  },
  data() {
    return {
      data: {},
    }
  },
  created() {
    // data
    this.$http.get('/ecommerce/data')
      .then(response => {
        this.data = response.data

        // ? Your API will return name of logged in user or you might just directly get name of logged in user
        // ? This is just for demo purpose
        const userData = getUserData()
        this.data.congratulations.name = userData.fullName.split(' ')[0] || userData.username
      })
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/dashboard-ecommerce.scss';
@import '@core/scss/vue/libs/chart-apex.scss';
</style>
