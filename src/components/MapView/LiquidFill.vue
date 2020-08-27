<template>
  <ve-liquidfill
    :data="chartData"
    :settings="chartSettings"
    height="100%"
  ></ve-liquidfill>
</template>

<script>
export default {
  name: 'LiquidFill',
  data() {
    this.chartSettings = {
      wave: [0.5, 0.3, 0.1],
      seriesMap: {
        支付转化率: {
          color: ['red', 'green', 'yellow'],
        },
      },
    }
    return {
      chartData: {
        columns: ['title', 'percent'],
        rows: [
          {
            title: '支付转化率',
            percent: 0.8,
          },
        ],
      },
    }
  },
}
</script>

<style lang="less" scoped>
</style>