<template>
  <common-card
    title="今日交易用户数"
    value="148,078"
  >
    <template>
      <div
        id="today-users-chart"
        style="height: 100%;width: 100%"
      ></div>
    </template>
    <template v-slot:footer>
      <span>退货率</span>
      <span class="emphasis">5.93%</span>
    </template>
  </common-card>

</template>

<script>
import commonCardMixin from '@/utils/mixins/commonCardMixin'
export default {
  name: 'TodayUsers',
  mixins: [commonCardMixin],
  components: {},
  mounted() {
    const chartDom = document.getElementById('today-users-chart')
    const chart = this.$echarts.init(chartDom, '', { renderer: 'svg' })
    chart.setOption({
      color: ['#3398DB'],
      tooltip: { trigger: 'axis' },
      xAxis: {
        type: 'category',
        show: false,
        data: [
          '00:00',
          '01:00',
          '02:00',
          '03:00',
          '04:00',
          '05:00',
          '06:00',
          '07:00',
          '08:00',
          '09:00',
          '10:00',
          '11:00',
          '12:00',
          '13:00'
        ]
      },
      yAxis: {
        show: false
      },
      series: [
        {
          name: '用户实时交易量',
          type: 'bar',
          data: [
            410,
            82,
            200,
            334,
            390,
            330,
            220,
            150,
            82,
            200,
            134,
            290,
            330,
            150
          ],
          barWidth: '60%'
        }
      ],
      grid: {
        top: 0,
        bottom: 0,
        right: 0,
        left: 0
      }
    })
  }
}
</script>

<style lang='scss' scoped>
</style>
