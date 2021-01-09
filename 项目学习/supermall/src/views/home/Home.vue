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
  <tab-control  class="tab-control" :titles="baseInfo.titles" @tabClick="tabClick"></tab-control>
  <goods-list :goods="contentData[tabIndex].list">
  </goods-list>
</div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import HomeSwiper from "@/views/home/childComponents/HomeSwiper";
import RecommendView from "@/views/home/childComponents/RecommendView"
import HomeFeature from "@/views/home/childComponents/HomeFeature";
import TabControl from "@/components/content/tabcontrol/TabControl";
import GoodsList from "@/components/content/goods/GoodsList";
import GoodsListItem from "@/components/content/goods/GoodsListItem";
import {HomeMultiData , HomeProductData} from "@/network/home";
export default {

  name: "Home",
  components:{
    GoodsListItem,
    NavBar,
    HomeSwiper,
    RecommendView,
    HomeFeature,
    TabControl,
    GoodsList,

  },
  data(){
    return {
      banners:[],
      recommends:[],
      baseInfo:{
        // 基本信息一一对应的，
        indexs:[
          0,
          1,
          2,
        ],
        titles:[
          "流行",
          "新款",
          "精选",
        ],
        aliass:[
          'pop',
          'sell',
          'new',
        ]
      },
      contentData:[
        // 对应上面的baseinfo,分别存放各类数据。
        {page: 1,list:[]},
        {page: 1,list:[]},
        {page: 1,list:[]},
      ],
      // 默认的tab索引
      tabIndex:0,

    }
  },
  created() {
    HomeMultiData().then(res=>{
     //console.log("===================")
      this.banners=res.data.data.banner.list
      this.recommends = res.data.data.recommend.list
      //console.log(this.recommends)
    })
    for (let index of this.baseInfo.indexs){
      this.GetProductData(index)
    }

  },
  methods:{
    tabClick(index){
      this.tabIndex=index
    },
    GetProductData(  index ){
      this.contentData[index].page+=1
      HomeProductData(this.baseInfo.aliass[index],this.contentData[index].page).then(res=>{
        this.contentData[index].list.push(...res.data.data.list)
        // console.log(this.contentData['pop'].list)
       // console.log(this.contentData[type].list)
      })
    },

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
