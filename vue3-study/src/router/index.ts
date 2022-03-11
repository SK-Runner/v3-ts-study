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
  {
    path: '/setupdetailview',
    name: 'SetupDetailView',
    component: ()=>import('views/SetupDetailView.vue')
  },
  {
    path: '/leftcycleview',
    name: 'LeftCycleView',
    component: ()=>import('views/LeftCycleView.vue')
  },
  {
    path:'/hooks',
    name: 'HookApi',
    component: ()=>import('views/Hooks.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
