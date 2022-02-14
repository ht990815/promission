import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login/login.vue'
import aoteman from "./model/aoteman"
import kaijia from "./model/kaijia"

Vue.use(VueRouter)
// console.log(aoteman)
const routes = [
  {
    path: "*",
    redirect: '/',
		hidden: true
  },
  {
    path: '/',
    name: 'login',
		hidden: true,
    component: login,
  },
  ...aoteman,
  ...kaijia,
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
