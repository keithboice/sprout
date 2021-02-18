<template>
  <b-card no-body>
    <!-- title and dropdown -->
    <b-card-header class="pb-0">
      <b-card-title>{{ trackerData.title }}</b-card-title>
      <b-dropdown
        class="chart-dropdown"
        no-caret
        right
        size="sm"
        text="Last 7 Days"
        toggle-class="p-50"
        variant="transparent"
      >
        <b-dropdown-item
          v-for="day in trackerData.lastDays"
          :key="day"
        >
          {{ day }}
        </b-dropdown-item>
      </b-dropdown>
    </b-card-header>
    <!--/ title and dropdown -->
    
    <b-card-body>
      <b-row>
        <b-col
          class="d-flex flex-column flex-wrap text-center"
          sm="2"
        >
          <h1 class="font-large-2 font-weight-bolder mt-2 mb-0">
            {{ trackerData.totalTicket }}
          </h1>
          <b-card-text>Tickets</b-card-text>
        </b-col>
        
        <!-- chart -->
        <b-col
          class="d-flex justify-content-center"
          sm="10"
        >
          
          <!-- apex chart -->
          <vue-apex-charts
            :options="supportTrackerRadialBar.chartOptions"
            :series="supportTrackerRadialBar.series"
            height="270"
            type="radialBar"
          />
        </b-col>
        <!--/ chart -->
      </b-row>
      
      <!-- chart info -->
      <div class="d-flex justify-content-between">
        <div class="text-center">
          <b-card-text class="mb-50">
            New Tickets
          </b-card-text>
          <span class="font-large-1 font-weight-bold">{{ trackerData.newTicket }}</span>
        </div>
        <div class="text-center">
          <b-card-text class="mb-50">
            Open Tickets
          </b-card-text>
          <span class="font-large-1 font-weight-bold">{{ trackerData.openTicket }}</span>
        </div>
        <div class="text-center">
          <b-card-text class="mb-50">
            Response Time
          </b-card-text>
          <span class="font-large-1 font-weight-bold">{{ trackerData.responseTime }}d</span>
        </div>
      </div>
    </b-card-body>
  </b-card>
</template>

<script>
import { $themeColors }                                                                               from "@themeConfig";
import { BCard, BCardBody, BCardHeader, BCardText, BCardTitle, BCol, BDropdown, BDropdownItem, BRow } from "bootstrap-vue";
import VueApexCharts                                                                                  from "vue-apexcharts";


export default {
  components: {
    VueApexCharts,
    BCard,
    BCardHeader,
    BCardTitle,
    BDropdown,
    BDropdownItem,
    BCardText,
    BCardBody,
    BRow,
    BCol
  },
  data () {
    return {
      trackerData:             {},
      supportTrackerRadialBar: {
        series:       [ 83 ],
        chartOptions: {
          plotOptions: {
            radialBar: {
              size:       150,
              offsetY:    20,
              startAngle: -150,
              endAngle:   150,
              hollow:     {
                size: "65%"
              },
              track:      {
                background:  "#fff",
                strokeWidth: "100%"
              },
              dataLabels: {
                name:  {
                  offsetY:  -5,
                  color:    "#5e5873",
                  fontSize: "1rem"
                },
                value: {
                  offsetY:  15,
                  color:    "#5e5873",
                  fontSize: "1.714rem"
                }
              }
            }
          },
          colors:      [ $themeColors.danger ],
          fill:        {
            type:     "gradient",
            gradient: {
              shade:            "dark",
              type:             "horizontal",
              shadeIntensity:   0.5,
              gradientToColors: [ $themeColors.primary ],
              inverseColors:    true,
              opacityFrom:      1,
              opacityTo:        1,
              stops:            [ 0, 100 ]
            }
          },
          stroke:      {
            dashArray: 8
          },
          labels:      [ "Completed Tickets" ]
        }
      }
    };
  },
  created () {
    this.$http.get( "/card/card-dashboard/support-tracker" )
      .then( res => { this.trackerData = res.data; } );
  }
};
</script>
