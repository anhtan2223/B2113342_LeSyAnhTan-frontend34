import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/ContactBook.vue') ,
    },
    {
      path: '/add',
      name: 'add',
      component: () => import('../views/AddView.vue') ,
    },
    {
      path: '/update/:id',
      name: 'update',
      props : true ,
      component: () => import('../views/UpdateView.vue') ,
    },
    {
      path : '/:pathMatch(.*)*',
      name: 'NotFound' ,
      component : () => import('../views/NotFound404.vue')
    }
  ]
})

export default router
