<template>
  <div  class="product-list">
      <product-list-item  class="product-list-item" :product="item" v-for="(item,index) in productList"></product-list-item>
  </div>

</template>

<script>

import ProductListItem from "@/views/shopcart/childComponents/ProductListItem";

export default {
  name: "ProductList",
  props:{
    productList:{
      type: Array,
      default(){
        return []
      }
    }
  },
  data(){
    return {}
  },
  components:{
    ProductListItem
  }
}
</script>

<style scoped>

</style>
