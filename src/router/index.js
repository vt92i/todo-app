import EditPage from '@/views/EditPage.vue'
import { createRouter, createWebHistory } from 'vue-router'
import AddPage from '../views/AddPage.vue'
import HomeView from '../views/components/ToDoListTable.vue'
import Tables from '../views/Tables.vue'
import Register from '../views/RegisterView.vue'
import About from '../views/AboutView.vue'
import Login from '../views/LoginView.vue'
import { login } from '@/services/auth.service'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: '/',
      redirect: '/login'
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
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
