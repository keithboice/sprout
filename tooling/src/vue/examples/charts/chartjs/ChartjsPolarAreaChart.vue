<template>
  <b-card no-body>
    <b-card-header>
      <b-card-title>Average Skills</b-card-title>
      <!-- dropdown -->
      <b-dropdown
        dropright
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
    
    <!-- chart -->
    <b-card-body>
      <chartjs-component-polar-area-chart
        :data="chartjsData.polarChart.data"
        :height="350"
        :options="chartjsData.polarChart.options"
      />
    </b-card-body>
  </b-card>
</template>

<script>
import { BCard, BCardBody, BCardHeader, BCardTitle, BDropdown, BDropdownItem } from "bootstrap-vue";
import chartjsData                                                             from "./chartjsData";
import ChartjsComponentPolarAreaChart                                          from "./charts-components/ChartjsComponentPolarAreaChart.vue";


export default {
  components: {
    ChartjsComponentPolarAreaChart,
    BCard,
    BCardTitle,
    BCardBody,
    BCardHeader,
    BDropdown,
    BDropdownItem
  },
  data () {
    return {
      chartjsData
    };
  }
};
</script>
