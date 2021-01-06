import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)


const store = new Vuex.Store({
  state: {
    counter:10000
  },
  mutations: {
    add(state){
      state.counter +=1
    },
    sub(state){
      state.counter-=1
    }
  },
  actions: {},
  getters: {},
  modules: {},
})

export default store
