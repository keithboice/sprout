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
import { getUserData }        from "@/auth/utils";
import { BCol, BRow }         from "bootstrap-vue";
import EcommerceCompanyTable  from "../components/dashboard-ecomm/EcommerceCompanyTable.vue";
import EcommerceEarningsChart from "../components/dashboard-ecomm/EcommerceEarningsChart.vue";
import EcommerceGoalOverview  from "../components/dashboard-ecomm/EcommerceGoalOverview.vue";
import EcommerceMeetup        from "../components/dashboard-ecomm/EcommerceMeetup.vue";
import EcommerceOrderChart    from "../components/dashboard-ecomm/EcommerceOrderChart.vue";
import EcommerceProfitChart   from "../components/dashboard-ecomm/EcommerceProfitChart.vue";
import EcommerceRevenueReport from "../components/dashboard-ecomm/EcommerceRevenueReport.vue";
import EcommerceStatistics    from "../components/dashboard-ecomm/EcommerceStatistics.vue";
import EcommerceTransactions  from "../components/dashboard-ecomm/EcommerceTransactions.vue";


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
    EcommerceTransactions
  },
  data () {
    return {
      data: {}
    };
  },
  created () {
    // data
    this.$http.get( "/dashboard-ecomm/data" )
      .then( response => {
        this.data = response.data;
        
        // ? Your API will return name of logged in contacts or you might just directly get name of logged in contacts
        // ? This is just for demo purpose
        const userData = getUserData();
        this.data.congratulations.name = userData.fullName.split( " " )[ 0 ] || userData.username;
      } );
  }
};
</script>

<style lang="scss">
@import '@core/scss/vue/pages/dashboard-ecommerce.scss';
@import '@core/scss/vue/libs/chart-apex.scss';
</style>
