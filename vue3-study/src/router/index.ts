import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/setupview',
    name: 'setupview',
    component: ()=>import('views/SetupView.vue')
  },
  {
    path: '/refview',
    name: 'refview',
    component: ()=>import('views/RefView.vue')
  },
  {
    path: '/reactiveview',
    name: 'ReactiveView',
    component: ()=>import('views/ReactiveView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
