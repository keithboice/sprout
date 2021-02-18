<template>
  <e-charts
    ref="line"
    :options="option"
    auto-resize
    autoresize
    theme="theme-color"
  />
</template>

<script>
import "echarts/lib/chart/radar";
import "echarts/lib/component/legend";
import "echarts/lib/component/tooltip";
import ECharts from "vue-echarts";
import theme   from "./theme.json";


ECharts.registerTheme('theme-color', theme)

export default {
  components: {
    ECharts,
  },
  props: {
    optionData: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      option: {
        title: {
          text: 'Basic radar chart',
        },
        tooltip: {},
        legend: {
          data: ['Point One', 'Point Two'],
          bottom: '0',
          left: '0',
        },
        radar: {
          name: {
            textStyle: {
              color: '#626262',
              fontWeight: 'bold',
              borderRadius: 3,
              padding: [3, 5],
            },
          },
          indicator: this.optionData.indicator,
          splitArea: {
            show: false,
          },
          splitLine: {
            lineStyle: {
              color: [
                '#eeeeee',
              ],
            },
          },
          axisLine: {
            lineStyle: {
              color: '#eeeeee',
            },
          },
        },
        series: this.optionData.series,
      },
    }
  },
}
</script>
