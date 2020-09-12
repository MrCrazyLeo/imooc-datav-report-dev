<template>
  <div class="d3-page">
    <p>D3Page</p>
  </div>
</template>

<script>
import * as d3 from 'd3'
export default {
  name: 'D3Page',
  components: {},
  mounted() {
    d3.selectAll('p').style('color', 'blue')
  },
}
</script>

<style scoped>
.d3-page {
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
}
</style>>
