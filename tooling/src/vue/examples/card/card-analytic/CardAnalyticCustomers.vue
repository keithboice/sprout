<template>
  <b-card no-body>
    <b-card-header>
      <b-card-title>Customers</b-card-title>
      <b-dropdown
        class="chart-dropdown "
        no-caret
        right
        size="sm"
        text="Last 7 Days"
        toggle-class="p-0 mb-25"
        variant="transparent"
      >
        <b-dropdown-item
          v-for="day in chartData.lastDays"
          :key="day"
        >
          {{ day }}
        </b-dropdown-item>
      </b-dropdown>
    </b-card-header>
    
    <b-card-body>
      
      <!-- apex chart -->
      <vue-apex-charts
        :options="customersPie.chartOptions"
        :series="customersPie.series"
        class="mt-2 mb-1"
        height="325"
        type="pie"
      />
      
      <!-- list group -->
      <div class="pt-25">
        <div
          v-for="(data,index) in chartData.listData"
          :key="index"
          :class="index === Object.keys(chartData.listData).length - 1 ? '':'mb-1'"
          class="d-flex justify-content-between"
        >
          <div class="series-info">
            <feather-icon
              :class="data.iconColor"
              :icon="data.icon"
              class="mr-50"
              size="16"
            />
            <span class="font-weight-bolder">{{ data.text }}</span>
          </div>
          <span>{{ data.result }}</span>
        </div>
      </div>
    </b-card-body>
  </b-card>
</template>

<script>
import { $themeColors }                                                        from "@themeConfig";
import { BCard, BCardBody, BCardHeader, BCardTitle, BDropdown, BDropdownItem } from "bootstrap-vue";
import VueApexCharts                                                           from "vue-apexcharts";


export default {
  components: {
    BCard,
    BCardHeader,
    BCardTitle,
    BDropdown,
    BDropdownItem,
    BCardBody,
    VueApexCharts
  },
  data () {
    return {
      chartData:    {},
      customersPie: {
        series:       [ 690, 258, 149 ],
        chartOptions: {
          chart:      {
            toolbar: {
              show: false
            }
          },
          labels:     [ "New", "Returning", "Referrals" ],
          dataLabels: {
            enabled: false
          },
          legend:     { show: false },
          stroke:     {
            width: 4
          },
          colors:     [ $themeColors.primary, $themeColors.warning, $themeColors.danger ]
        }
      }
    };
  },
  created () {
    this.$http.get( "/card/card-dashboard/customers" )
      .then( res => { this.chartData = res.data; } );
  }
};
</script>
