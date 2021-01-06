import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//导入文件
import state from '@/store/state';
import mutations from "@/store/mutations";
import actions from "@/store/actions";

export default new Vuex.Store({
  state: state(),
  mutations,
  actions,
  modules: {

  }
})
