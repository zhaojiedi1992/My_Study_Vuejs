<template>
<div  id="home">
  <nav-bar class="home-nav">
    <div slot="center" >
      购物车
    </div>
  </nav-bar>
  <home-swiper :banners ="banners"></home-swiper>
  <recommend-view :recommends="recommends"></recommend-view>
  <home-feature></home-feature>
  <tab-control  class="tab-control" :titles="titles"></tab-control>
</div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import HomeSwiper from "@/views/home/childComponents/HomeSwiper";
import RecommendView from "@/views/home/childComponents/RecommendView"
import HomeFeature from "@/views/home/childComponents/HomeFeature";
import TabControl from "@/components/content/tabcontrol/TabControl";
import {HomeMultiData} from "@/network/home";
export default {

  name: "Home",
  components:{
    NavBar,
    HomeSwiper,
    RecommendView,
    HomeFeature,
    TabControl,
  },
  data(){
    return {
      banners:[],
      recommends:[],
      titles:[
        "流行",
        "新款",
        "精选",
      ]
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
#home{
  /*padding-top: 44px;*/
  /*padding-top: 0;*/
  /*padding-bottom: 0;*/
  height: 2000px;
  position: relative;
}
.home-nav{
  /*padding-top: 44px;*/
  z-index: 9;
  position: fixed;
}
.tab-control{
  position: sticky;
  top: 35px;
  background-color: #fff;
  z-index: 9;
}
</style>
