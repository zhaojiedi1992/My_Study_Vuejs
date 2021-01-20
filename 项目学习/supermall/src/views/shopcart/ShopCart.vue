<template>
<div class="shop-cart">
  <nav-bar class="nav-bar">
    <div slot="center">
      <span>购物车()</span>
    </div>
  </nav-bar>
</div>
</template>

<script>

import NavBar from "@/components/common/navbar/NavBar";
export default {
  name: "ShopCart",
  components:{
    NavBar,
  },
}
</script>

<style scoped>
.nav-bar{
  background-color: #ff8e97;
  color: #fff;
}
</style>
