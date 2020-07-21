<template>
  <common-card
    title="累计销售额"
    value="￥ 32,039,165"
  >
    <template v-slot:footer></template>
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
</style>
