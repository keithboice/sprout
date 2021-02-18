<template>
  <b-card no-body>
    <b-card-header>
      <b-card-title>Bubble Chart</b-card-title>
      
      <!-- status -->
      <div class="d-flex align-items-center flex-wrap">
        <h5 class="font-weight-bolder mb-0 mr-1">
          $ 100,000
        </h5>
        <b-badge variant="light-secondary">
          <feather-icon
            class="text-danger"
            icon="ArrowDownIcon"
            size="18"
          />
          <span class="ml-25">20%</span>
        </b-badge>
      </div>
      <!-- status -->
    </b-card-header>
    
    <!-- chart -->
    <b-card-body>
      <chartjs-component-bubble-chart
        :data="chartjsData.bubbleChart.data"
        :height="500"
        :options="chartjsData.bubbleChart.options"
      />
    </b-card-body>
  </b-card>
</template>

<script>
import { BBadge, BCard, BCardBody, BCardHeader, BCardTitle } from "bootstrap-vue";
import chartjsData                                           from "./chartjsData";
import ChartjsComponentBubbleChart                           from "./charts-components/ChartjsComponentBubbleChart.vue";


export default {
  components: {
    ChartjsComponentBubbleChart,
    BCard,
    BBadge,
    BCardHeader,
    BCardTitle,
    BCardBody
  },
  data () {
    return {
      chartjsData
    };
  }
};
</script>
