<template>
  <b-card no-body>
    <b-card-header>
      <!-- title and text -->
      <div>
        <b-card-title class="mb-50">
          Stocks Prices
        </b-card-title>
        <b-card-text class="mb-0">
          $50,863.98
        </b-card-text>
      </div>
      <!--/ title and text -->
      
      <!-- datepicker -->
      <div class="d-flex align-items-center">
        <feather-icon
          icon="CalendarIcon"
          size="16"
        />
        <flat-pickr
          v-model="rangePicker"
          :config="{ mode: 'range'}"
          class="form-control flat-picker bg-transparent border-0 shadow-none"
          placeholder="YYYY-MM-DD"
        />
      </div>
      <!-- datepicker -->
    </b-card-header>
    
    <b-card-body>
      <vue-apex-charts
        :options="apexChatData.candlestickChart.chartOptions"
        :series="apexChatData.candlestickChart.series"
        height="400"
        type="candlestick"
      />
    </b-card-body>
  </b-card>
</template>

<script>
import { BCard, BCardBody, BCardHeader, BCardText, BCardTitle } from "bootstrap-vue";
import VueApexCharts                                            from "vue-apexcharts";
import flatPickr                                                from "vue-flatpickr-component";
import apexChatData                                             from "./apexChartData";


export default {
  components: {
    BCard,
    VueApexCharts,
    BCardBody,
    BCardHeader,
    BCardTitle,
    BCardText,
    flatPickr
  },
  data () {
    return {
      apexChatData,
      rangePicker: [ "2019-05-01", "2019-05-10" ]
    };
  }
};
</script>
