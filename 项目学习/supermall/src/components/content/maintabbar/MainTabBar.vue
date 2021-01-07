<template>
  <div>
    <h2>asdfas</h2>
  <tab-bar>
    <tab-bar-item path="/home">
      <img slot="icon" src="@/assets/img/tabbar/home.svg" alt="" >
      <img slot="active-icon" src="@/assets/img/tabbar/home_active.svg" alt="" >
      <span slot="text">首页</span>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <img slot="icon" src="@/assets/img/tabbar/category.svg" alt="" >
      <img slot="active-icon" src="@/assets/img/tabbar/category_active.svg" alt="" >
      <span slot="text">目录</span>
    </tab-bar-item>
    <tab-bar-item path="/shopcart">
      <img slot="icon" src="@/assets/img/tabbar/shopcart.svg" alt="" >
      <img slot="active-icon" src="@/assets/img/tabbar/shopcart_active.svg" alt="" >
      <span slot="text">购物车</span>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img slot="icon" src="@/assets/img/tabbar/profile.svg" alt="" >
      <img slot="active-icon" src="@/assets/img/tabbar/profile_active.svg" alt="" >
      <span slot="text">我的</span>
    </tab-bar-item>
  </tab-bar>
  </div>

</template>

<script>
import TabBar from "@/components/common/tabbar/TabBar";
import TabBarItem from "@/components/common/tabbar/TabBarItem";
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
