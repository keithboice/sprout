<template>
  <b-card>
    <b-row class="pb-50">
      
      <!-- text and button -->
      <b-col
        class="d-flex justify-content-between flex-column"
        lg="6"
        order="2"
        order-lg="1"
      >
        <div class="mt-1 mt-lg-0">
          <h2 class="font-weight-bolder mb-25">
            {{ kFormatter( avgData.sessions ) }}
          </h2>
          <b-card-text class="font-weight-bold mb-2">
            Avg Sessions
          </b-card-text>
          
          <div class="font-medium-2 mb-1 mb-lg-0">
            <span class="text-success mr-50">{{ avgData.growth }}</span>
            <span>vs last 7 days</span>
          </div>
        </div>
        
        <b-button
          v-ripple.400="'rgba(255, 255, 255, 0.15)'"
          class="shadow"
          variant="primary"
        >
          View Details
        </b-button>
      </b-col>
      
      <!-- dropdown and chart -->
      <b-col
        class="d-flex justify-content-between flex-column text-right"
        cols="12"
        lg="6"
        order="1"
        order-lg="2"
      >
        <div>
          <b-dropdown
            class="chart-dropdown"
            left
            no-caret
            size="sm"
            text="Last 7 Days"
            variant="transparent"
          >
            <b-dropdown-item
              v-for="day in avgData.lastDays"
              :key="day"
            >
              {{ day }}
            </b-dropdown-item>
          </b-dropdown>
        </div>
        
        <!-- apex chart -->
        <vue-apex-charts
          :options="salesBar.chartOptions"
          :series="salesBar.series"
          height="200"
          type="bar"
        />
      </b-col>
    </b-row>
    <hr>
    
    <!-- progress bar -->
    <b-row class="avg-sessions pt-50">
      <b-col
        class="mb-2"
        cols="6"
      >
        <b-card-text class="mb-50">
          Goal: ${{ avgData.goal }}
        </b-card-text>
        <b-progress
          height="6px"
          max="100"
          value="50"
        />
      </b-col>
      <b-col
        class="mb-2"
        cols="6"
      >
        <b-card-text class="mb-50">
          Users: {{ kFormatter( avgData.users ) }}
        </b-card-text>
        <b-progress
          height="6px"
          max="100"
          value="60"
          variant="warning"
        />
      </b-col>
      <b-col cols="6">
        <b-card-text class="mb-50">
          Retention: {{ avgData.retention }}%
        </b-card-text>
        <b-progress
          class="mt-25"
          height="6px"
          max="100"
          value="70"
          variant="danger"
        />
      </b-col>
      <b-col cols="6">
        <b-card-text class="mb-50">
          Duration: {{ avgData.duration }}yr
        </b-card-text>
        <b-progress
          class="mt-25"
          height="6px"
          max="100"
          value="90"
          variant="success"
        />
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import { kFormatter }                                                                 from "@core/utils/filter";
import { $themeColors }                                                               from "@themeConfig";
import { BButton, BCard, BCardText, BCol, BDropdown, BDropdownItem, BProgress, BRow } from "bootstrap-vue";
import VueApexCharts                                                                  from "vue-apexcharts";
import Ripple                                                                         from "vue-ripple-directive";


export default {
  components: {
    VueApexCharts,
    BCard,
    BRow,
    BCol,
    BButton,
    BCardText,
    BDropdown,
    BDropdownItem,
    BProgress
  },
  directives: {
    Ripple
  },
  data () {
    return {
      avgData:  {},
      salesBar: {
        series:       [
          {
            name: "Sessions",
            data: [ 75, 125, 225, 175, 125, 75, 25 ]
          }
        ],
        chartOptions: {
          chart:       {
            sparkline: { enabled: true },
            toolbar:   { show: false }
          },
          grid:        {
            show:    false,
            padding: {
              left:  0,
              right: 0
            }
          },
          states:      {
            hover: {
              filter: "none"
            }
          },
          colors:      [
            "#ebf0f7", "#ebf0f7", $themeColors.primary, "#ebf0f7", "#ebf0f7", "#ebf0f7"
          ],
          plotOptions: {
            bar: {
              columnWidth: "45%",
              distributed: true,
              endingShape: "rounded"
            }
          },
          tooltip:     {
            x: { show: false }
          },
          xaxis:       {
            type: "numeric"
          }
        }
      }
    };
  },
  created () {
    this.$http.get( "/card/card-dashboard/avg-sessions" )
      .then( res => { this.avgData = res.data; } );
  },
  methods: {
    kFormatter
  }
};
</script>
