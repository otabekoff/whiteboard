import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/whiteboard',
      name: 'Whiteboard',
      component: () => import('../views/Whiteboard.vue')
    },
    {
      path: '/auth',
      name: 'Auth',
      component: () => import('../views/Auth.vue')
    },
    {
      path: '/chat',
      name: 'Chat',
      component: () => import('../views/Chat.vue')
    },
  ]
})

export default router
