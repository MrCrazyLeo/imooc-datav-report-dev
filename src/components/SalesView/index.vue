<template>
  <div class="sales-view">
    <el-card shadow="hover">
      <template v-slot:header>
        <div>111222</div>
      </template>
    </el-card>
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
            data: [100, 200, 300, 400]
          }
        ]
      }
    }
  }
}
</script>

<style lang='scss' scoped>
.sales-view {
  margin-top: 20px;
}
</style>
