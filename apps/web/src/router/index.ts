import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const base = import.meta.env.BASE_URL

const router = createRouter({
  history: createWebHistory(base),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About.vue')
    }
  ]
})

export default router
