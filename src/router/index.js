import EditPage from '@/views/EditPage.vue'
import { createRouter, createWebHistory } from 'vue-router'
import AddPage from '../views/AddPage.vue'
import HomeView from '../views/HomeView.vue'
import Tables from '../views/Tables.vue'
import { login } from '@/services/auth.service'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: '',
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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/add',
      name: 'Add Page',
      component: () => import('../views/AddPage.vue')
    },
    {
      path: '/edit',
      name: 'Edit Page',
      component: () => import('../views/EditPage.vue')
    },
    {
      path: '/tables',
      name: 'Tables',
      component: () => import('../views/ToDoView.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')

  if (to.name === 'Login' && token) {
    // Jika user sudah login dan mencoba mengakses /login, redirect ke /tables
    next({ name: 'Tables' })
  } else if (to.name === 'Register' && token) {
    // Jika user sudah login dan mencoba mengakses /register, redirect ke /tables
    next({ name: 'Tables' })
  } else if (to.name === 'Tables' && !token) {
    // Jika tidak ada token dan mencoba mengakses /tables, redirect ke /login
    next({ name: 'Login' })
  } else {
    next()
  }
})

export default router
