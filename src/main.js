import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
// v-charts,element集成echarts的包,已经很久没人维护。
import './plugins/vcharts.js'
import Echarts from 'echarts'
import VueEcharts from 'vue-echarts'
import '@/style/index.css'
import '@/icons/index.js'

Vue.config.productionTip = false

Vue.prototype.$echarts = Echarts

Vue.component('v-chart', VueEcharts)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
