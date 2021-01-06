import Vue from 'vue'
import Vuex from 'vuex'

import moduleA from "./modules/moduleA";
import moduleB from "./modules/moduleB";

import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";
import state from "./state"


Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    a:moduleA,
    b:moduleB,
  },
  strict: process.env.NODE_ENV !== 'production'
})

export default store
