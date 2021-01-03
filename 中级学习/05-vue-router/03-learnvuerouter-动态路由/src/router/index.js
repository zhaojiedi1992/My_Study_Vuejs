import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import User from '@/components/User'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: "/home"
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    // {
    //   path: '/user',
    //   name: 'user',
    //   component: User
    // },
    {
      path: '/user/:uid',
      name: 'user',
      component: User
    }
  ],
  mode: 'history'
})
