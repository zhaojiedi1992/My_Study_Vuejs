const state = () => {
  return {
    counter: 1111,
  }
}

const actions = {}
const getters = {}
const mutations = {
  add(state) {
    state.counter++
  },
  powerCount(state) {
    return state.counter * state.counter
  }

}


export default {
  state,
  mutations,
  actions,
  getters,

}

