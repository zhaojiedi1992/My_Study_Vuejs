import Vue from 'vue'
import Router from 'vue-router'


import Home from "../views/Home/Home";
import Category from "../views/Category/Category";
import ShopCart from "../views/ShopCart/ShopCart";
import Profile from "../views/Profile/Profile";

Vue.use(Router)


const routers =[
  {
    path: '',
   redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/category',
    name: 'category',
    component: Category
  },
  {
    path: '/shopcart',
    name: 'shopcart',
    component: ShopCart
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  }
]
const router = new Router({
  routes:routers,
  mode: 'history'
})

export default router
