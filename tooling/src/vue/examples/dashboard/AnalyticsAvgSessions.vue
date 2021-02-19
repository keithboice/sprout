<template>
  <b-card v-if="data">
    <b-row class="pb-50">
      <!-- text and button -->
      <b-col
        class="d-flex justify-content-between flex-column mt-1 mt-sm-0"
        order="2"
        order-sm="1"
        sm="6"
      >
        <div>
          <h2 class="font-weight-bolder mb-25">
            {{ kFormatter( data.sessions ) }}
          </h2>
          <b-card-text class="font-weight-bold mb-2">
            Avg Sessions
          </b-card-text>
          
          <h5 class="font-medium-2">
            <span class="text-success mr-50">{{ data.growth }}</span>
            <span>vs last 7 days</span>
          </h5>
        </div>
        
        <b-button
          v-ripple.400="'rgba(0, 0, 0, 0.25)'"
          class="shadow"
          variant="secondary"
        >
          <span>View Details </span>
          <feather-icon icon="ChevronsRightIcon" />
        </b-button>
      </b-col>
      
      <!-- dropdown and chart -->
      <b-col
        class="d-flex justify-content-between flex-column text-right"
        cols="12"
        order="1"
        order-sm="2"
        sm="6"
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
              v-for="day in data.lastDays"
              :key="day"
            >
              {{ day }}
            </b-dropdown-item>
          </b-dropdown>
        </div>
        
        <!-- apex chart -->
        <vue-apex-charts
          :options="salesBar.chartOptions"
          :series="data.salesBar.series"
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
          Goal: ${{ data.goal }}
        </b-card-text>
        <b-progress
          height="6px"
          max="100"
          value="50"
          variant="danger"
        />
      </b-col>
      <b-col
        class="mb-2"
        cols="6"
      >
        <b-card-text class="mb-50">
          Users: {{ kFormatter( data.users ) }}
        </b-card-text>
        <b-progress
          height="6px"
          max="100"
          value="60"
          variant="success"
        />
      </b-col>
      <b-col cols="6">
        <b-card-text class="mb-50">
          Retention: {{ data.retention }}%
        </b-card-text>
        <b-progress
          class="mt-25"
          height="6px"
          max="100"
          value="70"
          variant="warning"
        />
      </b-col>
      <b-col cols="6">
        <b-card-text class="mb-50">
          Duration: {{ data.duration }}yr
        </b-card-text>
        <b-progress
          class="mt-25"
          height="6px"
          max="100"
          value="90"
          variant="info"
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
  props:      {
    data: {
      type:    Object,
      default: () => {}
    }
  },
  data () {
    return {
      salesBar: {
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
            $themeColors.primary, $themeColors.dark, $themeColors.primary, $themeColors.dark, $themeColors.primary, $themeColors.dark
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
  methods: {
    kFormatter
  }
};
</script>
