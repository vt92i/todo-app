import EditPage from '@/views/EditPage.vue'
import { createRouter, createWebHistory } from 'vue-router'
import AddPage from '../views/AddPage.vue'
import HomeView from '../views/HomeView.vue'
import Tables from '../views/Tables.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/add',
      name: 'Add Page',
      component: AddPage
    },
    {
      path: '/edit',
      name: 'Edit Page',
      component: EditPage
    },
    {
      path: '/tables',
      name: 'Tables',
      component: Tables
    }
  ]
})

export default router
