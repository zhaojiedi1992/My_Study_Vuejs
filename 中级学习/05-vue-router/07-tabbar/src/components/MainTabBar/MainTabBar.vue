<template>

  <div id="main-tab-bar">
    <tab-bar>
      <tab-bar-item path="/home" activeColor="blue" >
        <img slot="item-icon" src="../../assets/TabBar/home.svg" alt="">
        <img slot="item-icon-active" src="../../assets/TabBar/home_active.svg" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="blue" >
        <img slot="item-icon" src="../../assets/TabBar/category.svg" alt="">
        <img slot="item-icon-active" src="../../assets/TabBar/category_active.svg" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/shopcart" activeColor="blue" >
        <img slot="item-icon" src="../../assets/TabBar/shopcart.svg" alt="">
        <img slot="item-icon-active" src="../../assets/TabBar/shopcart_active.svg" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="blue" >
        <img slot="item-icon" src="../../assets/TabBar/profile.svg" alt="">
        <img slot="item-icon-active" src="../../assets/TabBar/profile_active.svg" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>

    </tab-bar>

  </div>

</template>

<script>


import TabBar from "../TabBar/TabBar";
import TabBarItem from "../TabBar/TabBarItem";

export default {
  name: "MainTabBar",
  components:{
    TabBar,
    TabBarItem,
  }
}
</script>

<style scoped>



</style>
