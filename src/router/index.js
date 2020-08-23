import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Bmap from '@/views/Bmap'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/bmap',
    name: 'Bmap',
    component: Bmap
  }
]

const router = new VueRouter({
  routes
})

export default router
