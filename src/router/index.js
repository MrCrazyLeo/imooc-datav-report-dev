import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import D3Page from '@/views/D3Page'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/d3',
    name: 'D3',
    component: D3Page
  }
]

const router = new VueRouter({
  routes
})

export default router
