import Vue from 'vue'
import Router from 'vue-router'
import MenuLayout from '@/layouts/MenuLayout'

Vue.use(Router)

const routerMap = [
  { path: '/login', component: () => import('@/layouts/UserLayout') },
  {
    path: '/',
    component: MenuLayout,
    redirect: '/dashboard',
    name: 'Dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard')
      }
    ]
  }
]

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: routerMap
})
