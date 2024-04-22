import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/',
      name: 'LoginPage',
      component: () => import('../views/LoginPage.vue')
    }, {
      path: '/signup',
      name: 'SignupPage',
      component: () => import('../views/SignupPage.vue')
    }

  ]
})

export default router
