<template>
  <common-card
    title="累计用户数"
    value="1,800,932"
  >
    <template>
      <v-chart :options="getOptions()" />
    </template>
    <template v-slot:footer>
      <div class="total-users-footer">
        <span>日同比</span>
        <span class="emphasis">80.02%</span>
        <div class="increase"></div>
        <span style="padding-left: 25px">月同比</span>
        <span class="emphasis">125.03%</span>
        <div class="decrease"></div>
      </div>
    </template>
  </common-card>
</template>

<script>
import commonCardMixin from '@/utils/mixins/commonCardMixin'
export default {
  name: 'TotalUsers',
  mixins: [commonCardMixin],
  components: {},
  mounted() {},
  methods: {
    getOptions() {
      return {
        xAxis: {
          type: 'value',
          show: false,
          boundaryGap: false
        },
        yAxis: {
          type: 'category',
          show: false
        },
        series: [
          {
            type: 'bar',
            data: [140],
            stack: '总量',
            barWidth: 10,
            itemStyle: {
              color: '#45c946'
            }
          },
          {
            type: 'bar',
            stack: '总量',
            data: [200],
            barWidth: 10,
            itemStyle: {
              color: '#ccc'
            }
          },
          {
            type: 'custom',
            stack: '总量',
            data: [140],
            renderItem: (params, api) => {
              const value = api.value(0)
              const endPoint = api.coord([value, 0])
              return {
                type: 'group',
                position: endPoint,
                children: [
                  {
                    type: 'path',
                    shape: {
                      d:
                        'M488.533333 211.2l-450.133333 563.2c-14.933333 19.2-2.133333 49.06666701 23.466667 49.066667L962.133333 823.466667c25.6 0 38.4-29.866667 23.466667-49.066667l-450.133333-563.2c-12.8-14.933333-34.133333-14.933333-46.933334 0z',
                      x: -6,
                      y: 10,
                      width: 12,
                      height: 10,
                      layout: 'cover'
                    },
                    style: {
                      fill: '#45c946'
                    }
                  },
                  {
                    type: 'path',
                    shape: {
                      d:
                        'M534.00000031 794l421.99999969-528c13.99999969-18 1.99999969-46.00000031-22.00000031-46.00000031H90.00000031c-24 0-36 28.00000031-22.00000031 46.00000031l421.99999969 528c12 13.99999969 31.99999969 13.99999969 44.00000062 0z',
                      x: -6,
                      y: -20,
                      width: 12,
                      height: 10,
                      layout: 'cover'
                    },
                    style: {
                      fill: '#45c946'
                    }
                  }
                ]
              }
            }
          }
        ],
        grid: {
          top: 0,
          bottom: 0,
          right: 0,
          left: 0
        }
      }
    }
  }
}
</script>

<style lang='scss' scoped>
.total-users-footer {
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #666;
  .emphasis {
    margin-left: 5px;
  }
  .increase {
    margin-bottom: 6px;
  }
  .decrease {
    margin-top: 0;
  }
}
</style>
