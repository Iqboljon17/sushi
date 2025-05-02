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
      path: '/SiteLocation',
      name: 'SiteLocation',
      component: () => import('../views/SiteLocation.vue'),
    },
    {
      path: '/cartInfo',
      name: 'cartInfo',
      component: () => import('../views/CartInfo.vue'),
    },
    {
      path: '/Login',
      name: 'Login',
      component: () => import('../views/Login.vue'),
    },
    
    

    
  ],
})

export default router
