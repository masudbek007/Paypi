import { createRouter, createWebHistory } from 'vue-router'

import index from '../pages/index.vue'
import pricing from '../pages/pricing.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      {
        path:'/',
        name: 'home',
        component:index
      },
      {
        path:'/pricing',
        name: 'pricing',
        component:pricing
      }
  ]
})

export default router


