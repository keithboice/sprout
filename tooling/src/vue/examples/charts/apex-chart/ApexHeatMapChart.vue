<template>
  <b-card no-body>
    <b-card-header>
      <!-- title -->
      <b-card-title>Daily Sales States</b-card-title>
      
      <!-- dropdown -->
      <b-dropdown
        no-caret
        toggle-class="p-0"
        variant="link"
      >
        <template #button-content>
          <feather-icon
            class="text-body"
            icon="MoreVerticalIcon"
          />
        </template>
        <b-dropdown-item>
          Last 28 Days
        </b-dropdown-item>
        <b-dropdown-item>
          Last Month
        </b-dropdown-item>
        <b-dropdown-item>
          Last Year
        </b-dropdown-item>
      </b-dropdown>
      <!--/ dropdown -->
    </b-card-header>
    
    <b-card-body>
      <vue-apex-charts
        :options="apexChatData.heatMapChart.chartOptions"
        :series="apexChatData.heatMapChart.series"
        height="350"
        type="heatmap"
      />
    </b-card-body>
  </b-card>
</template>

<script>
import { BCard, BCardBody, BCardHeader, BCardTitle, BDropdown, BDropdownItem } from "bootstrap-vue";
import VueApexCharts                                                           from "vue-apexcharts";
import apexChatData                                                            from "./apexChartData";


export default {
  components: {
    BCard,
    BCardHeader,
    BCardBody,
    VueApexCharts,
    BCardTitle,
    BDropdown,
    BDropdownItem
  },
  data () {
    return {
      apexChatData
    };
  }
};
</script>
