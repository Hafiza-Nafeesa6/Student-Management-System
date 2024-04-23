import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/',
      name: 'TheWelcome',
      component: () => import('../components/TheWelcome.vue')
    },
    {
      path: '/signup',
      name: 'SignupPage',
      component: () => import('../views/SignupPage.vue')
    }

  ]
})

export default router
