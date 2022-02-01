import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Launchpad from '@/views/Launchpad.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/launchpad',
    name: 'Launchpad',
    component: Launchpad
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
