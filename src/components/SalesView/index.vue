<template>
  <div class="sales-view">
    <el-card
      shadow="hover"
      :body-style="{ padding: '0 0 20px 0'}"
    >
      <template v-slot:header>
        <div class="menu-wrapper">
          <el-menu
            mode="horizontal"
            :default-active="activeIndex"
            @select="handleSelect"
            class="sales-view-el-menu"
          >
            <el-menu-item index="1">销售额</el-menu-item>
            <el-menu-item index="2">访问量</el-menu-item>
          </el-menu>
          <div class="menu-right">
            <el-radio-group
              v-model="radioSelect"
              size="small"
            >
              <el-radio-button label="今日"></el-radio-button>
              <el-radio-button label="本周"></el-radio-button>
              <el-radio-button label="本月"></el-radio-button>
              <el-radio-button label="本年"></el-radio-button>
            </el-radio-group>
            <el-date-picker
              v-model="date"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              size="small"
              :picker-options="pickerOptions"
              unlink-panels
              class="sales-view-date-picker"
            ></el-date-picker>
          </div>
        </div>
      </template>
      <template>
        <div class="sales-view-chart-wrapper">
          <v-chart :options="chartOptions" />
          <div class="sales-view-list">
            <div class="sales-view-title">排行榜</div>
            <div class="list-item-wrapper">
              <div
                class="list-item flex-hc"
                v-for="item in rankDataList"
                :key="item.no"
              >
                <div :class="['list-item-no', 'flex-hc', 'flex-ws', +item.no < 4 ? 'top-number' : '']">{{ item.no }}</div>
                <div class="list-item-name">{{ item.name }}</div>
                <div class="list-item-money flex-1">{{ item.money }}</div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'SalesView',
  data() {
    return {
      activeIndex: '1',
      radioSelect: '今日',
      date: '',
      pickerOptions: {
        shortcuts: [
          {
            text: '最近一周',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
              picker.$emit('pick', [start, end])
            }
          }
        ]
      },
      chartOptions: {
        title: {
          text: '年度销售额',
          textStyle: {
            color: '#666',
            fontSize: 12
          },
          left: 25,
          top: 20
        },
        xAxis: {
          type: 'category',
          data: [
            '1月',
            '2月',
            '3月',
            '4月',
            '5月',
            '6月',
            '7月',
            '8月',
            '9月',
            '10月',
            '11月',
            '12月'
          ],
          axisTick: {
            alignWithLabel: true,
            lineStyle: {
              color: '#999'
            }
          },
          axisLine: {
            lineStyle: {
              color: '#999'
            }
          },
          axisLabel: {
            color: '#333'
          }
        },
        yAxis: {
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitLine: {
            lineStyle: {
              type: 'dotted',
              color: '#eee'
            }
          }
        },
        series: [
          {
            type: 'bar',
            barWidth: '35%',
            data: [200, 250, 300, 350, 250, 200, 300, 350, 300, 250, 230, 450],
            color: ['#3398DB']
          }
        ],

        grid: {
          top: 70,
          left: 60,
          right: 60,
          bottom: 50
        }
      },
      rankDataList: [
        {
          no: 1,
          name: '麦当劳',
          money: 5252365.6
        },
        {
          no: 2,
          name: '肯德基',
          money: 52365.6
        },
        {
          no: 3,
          name: '汉堡王',
          money: 52525.6
        },
        {
          no: 4,
          name: '华莱士',
          money: 111165.6
        }
      ]
    }
  },
  methods: {
    handleSelect(index) {
      this.activeIndex = index
      console.log(index)
    },
    getOptions() {
      console.log(22222)
    }
  }
}
</script>

<style lang='scss' scoped>
.sales-view {
  margin-top: 20px;
  .menu-wrapper {
    position: relative;
    display: flex;
    .sales-view-el-menu {
      width: 100%;
      padding-left: 20px;
      .el-menu-item {
        height: 50px;
        line-height: 50px;
        margin: 0 20px;
      }
    }
    .menu-right {
      position: absolute;
      right: 20px;
      top: 0;
      display: flex;
      height: 50px;
      align-items: center;
      justify-content: flex-end;
      .sales-view-date-picker {
        margin-left: 20px;
      }
    }
  }
  .sales-view-chart-wrapper {
    display: flex;
    height: 270px;
    .echarts {
      flex: 0 0 70%;
      width: 70%;
      height: 100%;
    }
    .sales-view-list {
      flex: 1;
      width: 100%;
      height: 100%;
      overflow: hidden;
      margin-top: 15px;
      .sales-view-title {
        margin-top: 20px;
        font-size: 12px;
        font-weight: 700;
        color: #666;
      }
      .list-item-wrapper {
        margin-top: 15px;
        .list-item {
          font-size: 12px;
          height: 20px;
          padding: 6px 20px 6px 0;
          .list-item-no {
            width: 20px;
            height: 20px;
            color: #333;
            &.top-number {
              background: #000;
              color: #fff;
              border-radius: 50%;
              font-weight: 500;
            }
          }
          .list-item-name {
            margin-left: 10px;
            color: #333;
          }
          .list-item-money {
            text-align: right;
          }
        }
      }
    }
  }
}
</style>
