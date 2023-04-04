import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Daftar from '../views/Daftar.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/daftar',
    name: 'Daftar',
    component: Daftar
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/auth',
    name: 'Auth',
    component: () => import('../views/Auth.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/datadaftar',
    name: 'DataDaftar',
    component: () => import('../views/DataDaftar.vue')
  },
  {
    path: '/data',
    name: 'data',
    component: () => import('../views/Data.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
