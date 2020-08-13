<template>
  <div class="screen-wrapper">
    <div
      class="kss-btn"
      @click="handleClick"
      style="cursor: pointer"
    >Shift+a进行Kss截图</div>
    <img
      id="image-container"
      src=''
    />
  </div>
</template>A

<script>
import Kss from '@/utils/kss/kss'
export default {
  name: 'Kss',
  data() {
    return {
      imgSrc: '',
    }
  },
  methods: {
    handleClick() {
      this.$message('haha')
      console.log('click')
      /* eslint-disable */
      new Kss({
        key: 65,
        immediately: true,
        endCB(e) {
          this.imgSrc = e
          document.getElementById('image-container').src = this.imgSrc
        },
      })
    },
  },
}
</script>

<style lang='scss' scoped>
.kss-btn {
  border-radius: 5px;
  border: 1px solid lightblue;
  height: 40px;
  line-height: 40px;
  width: 180px;
  text-align: center;
  &:hover {
    background: lightblue;
    color: #ffffff;
  }
}
#image-container {
  margin-top: 10px;
  border: 1px dashed lightpink;
  border-radius: 5px;
}
</style>
