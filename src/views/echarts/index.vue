<template>
  <div ref="echarts" style="height: 300px;"></div>
</template>

<script>
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
export default {
  mounted () {
    this.initCharts()
  },
  methods: {
    initCharts () {
      this.chart = echarts.init(this.$refs.echarts)
      this.setOptions()
    },
    setOptions () {
      this.chart.setOption({
        title: {
          text: 'Echarts 入门示例'
        },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      })
    }
  }
}
</script>
