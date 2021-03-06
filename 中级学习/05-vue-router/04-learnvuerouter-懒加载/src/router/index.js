import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/components/Home'
// import About from '@/components/About'


const Home = () => import ('@/components/Home')
const About = () => import ('@/components/About')

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
    }
  ],
  mode: 'history'
})
