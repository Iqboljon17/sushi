import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ()=> import('../views/Index.vue')
    },
    {
      path: '/setCart',
      name: 'setCart',
      component: () => import('../views/Set.vue'),
    },
    {
      path: '/SiteLocation',
      name: 'SiteLocation',
      component: () => import('../views/SiteLocation.vue'),
    },
  ],
})

export default router
