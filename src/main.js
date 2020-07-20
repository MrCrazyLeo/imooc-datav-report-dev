import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import Echarts from 'echarts'

Vue.config.productionTip = false

Vue.prototype.$echarts = Echarts

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
