<template>
  <ve-liquidfill
    :data="chartData"
    :settings="chartSettings"
  ></ve-liquidfill>
</template>

<script>
export default {
  name: 'LiquidFill',
  data() {
    this.chartSettings = {
      wave: [0.5, 0.3, 0.1],
      seriesMap: {
        上海: {
          color: ['red', 'green', 'yellow'],
        },
      },
    }
    return {
      chartData: {
        columns: ['city', 'percent'],
        rows: [
          {
            city: '上海',
            percent: 0.7,
          },
        ],
      },
    }
  },
}
</script>

<style lang="less" scoped>
</style>