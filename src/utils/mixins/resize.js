import { debounce } from '@/utils'

export default {
  mounted() {
    this._resizeHandle = debounce(() => {
      console.log('resize')
      if (this.chart) {
        this.chart.resize()
      }
    }, 100)
    window.addEventListener('resize', this._resizeHandle)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this._resizeHandle)
  }
}