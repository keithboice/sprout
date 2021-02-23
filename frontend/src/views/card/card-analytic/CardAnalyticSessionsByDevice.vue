<template>
  <b-card no-body>
    <b-card-header>
      <b-card-title>Sessions By Device</b-card-title>
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
        :options="sessionsByDeviceDonut.chartOptions"
        :series="sessionsByDeviceDonut.series"
        class="my-1"
        height="300"
        type="donut"
      />
      
      <!-- chart info -->
      <div
        v-for="(data,index) in chartData.chartInfo"
        :key="data.name"
        :class="index === chartData.chartInfo.length - 1 ? 'mb-0':'mb-1'"
        class="d-flex justify-content-between"
      >
        <div class="series-info d-flex align-items-center">
          <feather-icon
            :class="data.iconColor"
            :icon="data.icon"
            size="16"
          />
          <span class="font-weight-bolder ml-75 mr-25">{{ data.name }}</span><span>- {{ data.usage }}%</span>
        </div>
        <div>
          <span>{{ data.upDown }}%</span>
          <feather-icon
            :class="data.upDown > 0 ? 'text-success':'text-danger'"
            :icon="data.upDown > 0 ? 'ArrowUpIcon':'ArrowDownIcon'"
            class="mb-25 ml-25"
          />
        </div>
      </div>
    </b-card-body>
  </b-card>
</template>

<script>
import { BCard, BCardHeader, BCardTitle, BDropdown, BDropdownItem, BCardBody } from "bootstrap-vue"
import VueApexCharts                                                           from "vue-apexcharts"
import { $themeColors }                                                        from "@/conf/theme"


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
      chartData:             {},
      sessionsByDeviceDonut: {
        series:       [ 58.6, 34.9, 6.5 ],
        chartOptions: {
          chart:          {
            toolbar: {
              show: false
            }
          },
          labels:         [ "Desktop", "Mobile", "Tablet" ],
          dataLabels:     {
            enabled: false
          },
          legend:         { show: false },
          comparedResult: [ 2, -3, 8 ],
          stroke:         { width: 0 },
          colors:         [ $themeColors.primary, $themeColors.warning, $themeColors.danger ]
        }
      }
    }
  },
  created () {
    this.$http.get( "/card/card-analytics/sessions-device" )
      .then( res => { this.chartData = res.data } )
  }
}
</script>
