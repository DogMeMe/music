import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/find',
    children: [
      {
        path: '/find',
        name: 'Find',
        component: () => import(/* webpackChunkName: "find" */ '@/views/find/Index.vue')
      },
      {
        path: '/self',
        name: 'Self',
        component: () => import(/* webpackChunkName: "self" */ '@/views/self/Index.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/login/Index.vue')
  },
  {
    path: '/phonelogin',
    name: 'PhoneLogin',
    component: () => import(/* webpackChunkName: "login" */ '@/views/login/PhoneLogin.vue')
  },
  {
    path: '/passwordlogin',
    name: 'PasswordLogin',
    component: () => import(/* webpackChunkName: "login" */ '@/views/login/PasswordLogin.vue')
  }
]

const router = createRouter({                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
