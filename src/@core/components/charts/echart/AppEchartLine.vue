<template>
  <e-charts
    ref="line"
    :options="line"
    auto-resize
    autoresize
    theme="theme-color"
  />
</template>

<script>
import 'echarts/lib/chart/line'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/tooltip'
import ECharts from 'vue-echarts'
import theme from './theme.json'

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
      line: {
        // Make gradient line here
        visualMap: [
          {
            show: true,
            type: 'continuous',
            min: 0,
            max: 400,
          },
        ],
        grid: {
          width: '96%',
          left: '30px',
          top: '10px',
          show: false,
        },
        tooltip: {
          trigger: 'axis',
        },
        xAxis: [
          {
            boundaryGap: false,
            data: this.optionData.xAxisData,
          },
        ],
        yAxis: {
          type: 'value',
          splitLine: { show: false },
        },
        series: {
          type: 'line',
          showSymbol: false,
          data: this.optionData.series,
        },
      },
    }
  },
}
</script>

<style>
.echarts {
  width: 100% !important;
}
</style>
