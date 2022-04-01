import Vue from 'vue'
import VueRouter from 'vue-router'
import Status from '../components/Status'
import Settings from '../components/Settings'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Status',
    component: Status,
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
