import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routerMap = [
  { path: '/login', component: () => import('@/layouts/UserLayout') }
]

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: routerMap
})
