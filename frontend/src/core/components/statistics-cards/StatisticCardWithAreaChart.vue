<template>
  <b-card no-body>
    <b-card-body class="pb-0">
      <b-avatar
        :variant="`light-${color}`"
        class="mb-1"
        size="45"
      >
        <feather-icon
          :icon="icon"
          size="21"
        />
      </b-avatar>
      <div class="truncate">
        <h2 class="mb-25 font-weight-bolder">
          {{ statistic }} </h2>
        <span>{{ statisticTitle }}</span>
      </div>
    </b-card-body>
    
    <vue-apex-charts
      :options="chartOptionsComputed"
      :series="chartData"
      height="100"
      type="area"
      width="100%"
    />
  
  </b-card>
</template>

<script>
import { BCard, BCardBody, BAvatar } from "bootstrap-vue"
import VueApexCharts                 from "vue-apexcharts"
import { $themeColors }              from "@/conf/theme"
import { areaChartOptions }          from "./chartOptions"


export default {
  components: {
    VueApexCharts,
    BCard,
    BCardBody,
    BAvatar
  },
  props:      {
    icon:           {
      type:     String,
      required: true
    },
    statistic:      {
      type:     [ Number, String ],
      required: true
    },
    statisticTitle: {
      type:    String,
      default: ""
    },
    color:          {
      type:    String,
      default: "primary"
    },
    chartData:      {
      type:    Array,
      default: () => []
    },
    chartOptions:   {
      type:    Object,
      default: null
    }
  },
  computed:   {
    chartOptionsComputed () {
      if ( this.chartOptions === null ) {
        const options = JSON.parse( JSON.stringify( areaChartOptions ) )
        options.theme.monochrome.color = $themeColors[ this.color ]
        return options
      }
      return this.chartOptions
    }
  }
}
</script>
