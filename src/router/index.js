import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login/login.vue'
import aoteman from "./model/aoteman"

Vue.use(VueRouter)

const routes = [
  {
    path: "*",
    redirect: '/'
  },
  {
    path: '/',
    name: 'login',
    component: login,
  },
  ...aoteman
  // {
  //   path: '/home',
  //   name: 'home',
  //   component: () => import('../views/layout/home.vue'),
  //   children: [
      
  //   ]
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
