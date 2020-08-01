<template>
  <div>
    1111
  </div>
</template>

<script>
export default {
  name: 'SalesView',
  data() {
    return {
      data: {
        xAxis: {
          type: 'category'
        },
        yAxis: {},
        series: [
          {
            type: 'line',
            data: [100, 200, 300]
          }
        ]
      }
    }
  }
}
</script>

<style lang='scss' scoped>
</style>
