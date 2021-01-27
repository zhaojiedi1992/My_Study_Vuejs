const actions = {
  Add2Cart(content,product){
    return new Promise((resolve)=>{
      let oldProduct = content.state.cardList.find(r=>r.iid === product.iid )
      if (oldProduct){
        const  index = content.state.cardList.indexOf(oldProduct)
        content.commit("AddCartProductCount",index)
      }else{
        product.count=0
        content.commit("Add2Cart",product)
      }
      resolve()
    })
  },
}

export default  actions
