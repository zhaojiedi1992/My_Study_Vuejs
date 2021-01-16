import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


Vue.config.productionTip = false

import VueAwesomeSwiper from 'vue-awesome-swiper'

// import style (>= Swiper 6.x)
import 'swiper/swiper-bundle.css'

Vue.use(VueAwesomeSwiper, /* { default options with global component } */)


// 创建一个事件总线

Vue.prototype.$bus  = new Vue()



new Vue({
  router,
  store,
  render: h => h(App),
  //name: 'App',
}).$mount('#app')
