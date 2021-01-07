<template>
<div>
  <nav-bar class="home-nav">
    <div slot="center" >
      购物车
    </div>
  </nav-bar>
  <home-swiper :banners ="banners"></home-swiper>
</div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import HomeSwiper from "@/views/home/childComponents/HomeSwiper";
import {HomeMultiData} from "@/network/home";
export default {

  name: "Home",
  components:{
    NavBar,
    HomeSwiper
  },
  data(){
    return {
      banners:[],
    }
  },
  created() {
    HomeMultiData().then(res=>{
      console.log("===================")
     this.banners=res.data.data.banner.list
      console.log(this.banners)
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
