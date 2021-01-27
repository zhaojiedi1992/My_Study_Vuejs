const mutations={
  AddCartProductCount(state,index){
    state.cardList[index].count+=1
  },
  Add2Cart(state,product) {
    state.cardList.push(product)
  },
}
export default  mutations
