<template>
  <div>
    <div id="my-node">
      <div class="test-view clip-path">
      </div>
      <svg-icon iconClass="user" />
    </div>
    <div class="result">
      这是使用dom-to-image的结果：
      <img
        src=""
        id="img-wrapper"
      />
    </div>
    <div>可以看到dom-to-image也是不能对svg图标做处理</div>
  </div>
</template>

<script>
import domtoimage from 'dom-to-image'

export default {
  name: 'TestView',
  data() {
    return {}
  },
  computed: {},
  watch: {},
  mounted() {
    this.init()
  },
  methods: {
    init() {
      const node = document.getElementById('my-node')

      domtoimage
        .toPng(node)
        .then((dataUrl) => {
          document.getElementById('img-wrapper').src = dataUrl
        })
        .catch(function (error) {
          console.error('oops, something went wrong!', error)
        })
    },
  },
}
</script>

<style lang="scss" scoped>
.test-view {
  width: 300px;
  height: 80px;
  background: pink;
  display: inline-block;
}
.clip-path {
  -webkit-clip-path: inset(10% round 10% 50% 10% 50%);
  clip-path: inset(10% round 10% 50% 10% 50%);
}
.result {
  border: 1px solid #333;
  display: inline-block;
  padding: 10px;
}
</style>
