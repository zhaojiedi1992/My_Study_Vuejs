<template>
<div>
  <nav-bar class="home-nav">
    <div slot="center" >
      购物车
    </div>
  </nav-bar>
  <home-swiper :banners ="banners"></home-swiper>
  <recommend-view :recommends="recommends"></recommend-view>
</div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import HomeSwiper from "@/views/home/childComponents/HomeSwiper";
import RecommendView from "@/views/home/childComponents/RecommendView"
import {HomeMultiData} from "@/network/home";
export default {

  name: "Home",
  components:{
    NavBar,
    HomeSwiper,
    RecommendView
  },
  data(){
    return {
      banners:[],
      recommends:[],
    }
  },
  created() {
    HomeMultiData().then(res=>{
      console.log("===================")
      this.banners=res.data.data.banner.list
      this.recommends = res.data.data.recommend.list
      console.log(this.recommends)
    })
  }
}
</script>

<style scoped>
.home-nav{
  background-color: var(--color-text);
  color: #fff;
}
</style>
