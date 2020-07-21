<template>
  <common-card
    title="累计销售额"
    value="￥ 32,039,165"
  >
    <template>
      <div class="compare-wrapper">
        <div class="compare">
          <span>日同比</span>
          <span class="emphasis">7.33%</span>
          <div class="increase"></div>
        </div>
        <div class="compare">
          <span>月同比</span>
          <span class="emphasis">38.79%</span>
          <div class="decrease"></div>
        </div>
      </div>
    </template>
    <template v-slot:footer>
      <span>昨日销售额</span>
      <span class="emphasis">￥ 30,000,000</span>
    </template>
  </common-card>
</template>

<script>
import commonCardMixin from '@/utils/mixins/commonCardMixin'
export default {
  name: 'TotalSales',
  mixins: [commonCardMixin],
  components: {}
}
</script>

<style lang='scss' scoped>
.compare-wrapper {
  font-size: 12px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .compare {
    margin-top: 5px;
    color: #666;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
}
</style>
