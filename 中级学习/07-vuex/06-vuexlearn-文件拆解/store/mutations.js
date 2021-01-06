const mutations={
  add(state){
    state.counter +=1
  },
  sub(state){
    state.counter-=1
  },
  addV2(state,payload){
    console.log(payload )
    state.counter +=payload.n
  }
}
export default  mutations
