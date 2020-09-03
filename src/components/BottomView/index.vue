<template>
  <div
    class="bottom-view"
    id="bottom-view"
  >
    <div class="view">
      <el-card shadow="hover">
        <template v-slot:header>
          <div class="title-wrapper">关键词搜索</div>
        </template>
        <template>
          <div class="chart-wrapper">
            <div class="chart-inner">
              <div class="chart">
                <div class="chart-title">搜索用户数</div>
                <div class="chart-data">{{userCount}}</div>
                <v-chart :options="searchUserOption" />
              </div>
              <div class="chart">
                <div class="chart-title">搜索量</div>
                <div class="chart-data">{{searchCount}}</div>
                <v-chart :options="searchNumberOption" />
              </div>
            </div>
            <div class="table-wrapper">
              <el-table
                :data="tableData"
                height="calc(100% - 47px)"
              >
                <el-table-column
                  prop="rank"
                  label="排名"
                />
                <el-table-column
                  prop="keyword"
                  label="关键词"
                />
                <el-table-column
                  prop="count"
                  label="总搜索量"
                />
                <el-table-column
                  prop="users"
                  label="搜索用户数"
                />
                <el-table-column
                  prop="range"
                  label="搜索占比"
                />
              </el-table>
              <el-pagination
                layout="prev, pager, next"
                :total="total"
                :page-size="pageSize"
                background
                @current-change="onPageChange"
              />
            </div>
          </div>
        </template>
      </el-card>
    </div>
    <div class="view">
      <el-card shadow="hover">
        <template v-slot:header>
          <div class="title-wrapper">
            <div class="title">分类销售排行</div>
            <div class="radio-wrapper">
              <el-radio-group
                v-model="radioSelect"
                size="small"
                @change="onCategoryChange"
              >
                <el-radio-button label="品类"></el-radio-button>
                <el-radio-button label="商品"></el-radio-button>
              </el-radio-group>
            </div>
          </div>
        </template>
        <template>
          <div class="chart-wrapper">
            <v-chart :options="categoryOptions" />
          </div>
        </template>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BottomView',
  data() {
    return {
      searchUserOption: {},
      userCount: 0,
      searchNumberOption: {},
      searchCount: 0,
      tableData: [],
      total: 0,
      pageSize: 4,
      radioSelect: '品类',
      categoryOptions: {},
    }
  },
  mounted() {
    this.renderPieChart()
  },
  methods: {
    onPageChange(page) {
      console.log(page)
    },
    onCategoryChange() {
      console.log('radio change')
    },
    renderPieChart() {
      const mockData = [
        {
          legendname: '粉面粥店',
          value: 67,
          percent: '15.40',
          name: '粉面粥店',
        },
        {
          legendname: '早茶',
          value: 167,
          percent: '65.40',
          name: '早茶',
        },
        {
          legendname: '饺子',
          value: 22,
          percent: '21.15',
          name: '饺子',
          itemStyle: {
            color: 'pink',
          },
        },
      ]
      this.categoryOptions = {
        title: [
          {
            text: '品类分布',
            textStyle: {
              fontSize: 14,
              color: '#666',
            },
            left: 20,
            top: 20,
          },
          {
            text: '累计订单量',
            subtext: '320',
            x: '34.5%',
            y: '42.5%',
            textAlign: 'center',
            textStyle: {
              fontSize: 14,
              color: '#999',
            },
            subtextStyle: {
              fontSize: 28,
              color: '#333',
            },
          },
        ],
        series: [
          {
            name: '品类分布',
            type: 'pie',
            data: mockData,
            label: {
              normal: {
                show: true,
                position: 'outer',
                formatter: function (params) {
                  return `${params.data.legendname} | ${params.data.percent}%`
                },
              },
            },
            center: ['35%', '50%'],
            radius: ['45%', '60%'],
            labelLine: {
              normal: {
                length: 6,
                length2: 4,
                smooth: true,
              },
            },
            clockwise: false,
            itemStyle: {
              borderWidth: 4,
              borderColor: '#fff',
            },
          },
        ],
        legend: {
          type: 'scroll',
          orient: 'vertical',
          height: 250,
          left: '70%',
          top: 'middle',
          textStyle: {
            color: '#8c8c8c',
          },
        },
        tooltip: {
          formatter: function (params) {
            const str =
              // params.seriesName +
              // '<br />' +
              params.marker +
              params.data.name +
              '<br />' +
              '数量：' +
              params.data.value +
              '<br />' +
              '占比：' +
              params.data.percent +
              '%'
            return str
          },
        },
      }
    },
  },
}
</script>

<style lang='scss' scoped>
.bottom-view {
  display: flex;
  margin-top: 20px;
  .view {
    flex: 1;
    width: 50%;
    box-sizing: border-box;
    &:first-child {
      padding: 0 10px 0 0;
    }
    &:last-child {
      padding: 0 0 0 10px;
    }
    .title-wrapper {
      display: flex;
      align-items: center;
      height: 60px;
      box-sizing: border-box;
      border-bottom: 1px solid #eee;
      font-size: 14px;
      font-weight: 500;
      padding: 0 0 0 20px;
      .radio-wrapper {
        flex: 1;
        display: flex;
        justify-content: flex-end;
        padding-right: 20px;
      }
    }
    .chart-wrapper {
      display: flex;
      flex-direction: column;
      height: 452px;
      .chart-inner {
        display: flex;
        padding: 0 10px;
        margin-top: 20px;
        .chart {
          flex: 1;
          padding: 0 10px;
          .chart-title {
            color: #999;
            font-size: 14px;
          }
          .chart-data {
            font-size: 22px;
            color: #333;
            font-weight: 500;
            letter-spacing: 2px;
          }
        }
      }

      .table-wrapper {
        flex: 1;
        margin-top: 20px;
        padding: 0 20px 20px;

        .el-pagination {
          display: flex;
          justify-content: flex-end;
          margin-top: 15px;
        }
      }
    }
  }
}
</style>
