import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '@/views/home/Home'
import Category from "@/views/category/Category";
import Profile from "@/views/profile/Profile";
import ShopCart from "@/views/shopcart/ShopCart";

const routes = [
  { path: '', redirect: '/home' },
  { path: '/home', component: Home },
  { path: '/category', component: Category },
  { path: '/shopcart', component: ShopCart },
  { path: '/profile', component: Profile }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  history: 'mode',
})

export default router
