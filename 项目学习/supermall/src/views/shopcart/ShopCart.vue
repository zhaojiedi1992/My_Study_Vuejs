<template>
<div class="shop-cart">
  <nav-bar class="nav-bar">
    <div slot="center">
      <span>购物车({{$store.getters.ProductCount}})</span>
    </div>
  </nav-bar>

  <ProductList :product-list="$store.state.cardList"></ProductList>
  </div>
</template>

<script>

import NavBar from "@/components/common/navbar/NavBar";
import ProductList from "@/views/shopcart/childComponents/ProductList";
export default {
  name: "ShopCart",
  components:{
    NavBar,
    ProductList,
  },
}
</script>

<style scoped>
.nav-bar{
  background-color: #ff8e97;
  color: #fff;
}
</style>
