import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/components/Home'
// import About from '@/components/About'

const Home = () => import ('@/components/Home')
const About = () => import ('@/components/About')

const HomeNews = () => import ('@/components/HomeNews')
const HomeMessages = () => import ('@/components/HomeMessages')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: "/home",

    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children:[
        {
          path: '',
          redirect: "news",
        },
        {
          path: 'news',
          component: HomeNews
        },
        {
          path: 'messages',
          component: HomeMessages
        }
      ],
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ],
  mode: 'history'
})
