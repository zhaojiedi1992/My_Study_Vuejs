import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//导入文件
import state from '@/store/state';
import mutations from "@/store/mutations";
import actions from "@/store/actions";
import getters from "@/store/getters";

export default new Vuex.Store({
  state: state(),
  mutations,
  actions,
  getters,
  modules: {

  }
})
