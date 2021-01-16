<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">
        购物车
      </div>
    </nav-bar>
    <scroll :probe-type="3"
           :pull-up-load="true"
           class="content"
           ref="scroll"
            @pullingUp="LoadMore"
            @scroll="ContentScroll"
    >
<!--      <div class="content" ref="content">-->
        <home-swiper :banners="banners" class="home-swiper"></home-swiper>
        <recommend-view :recommends="recommends" class="recommend-view"></recommend-view>
        <home-feature></home-feature>
        <tab-control ref="tabControl" class="tab-control" :titles="baseInfo.titles" @tabClick="tabClick"></tab-control>
        <goods-list :goods="contentData[tabIndex].list">
        </goods-list>
<!--      </div>-->
    </scroll>
      <back-top @click.native="backTopClick" v-show="showBack2Top"></back-top>
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
import BackTop from "@/components/content/backtop/BackTop";
import Scroll from "@/components/common/scroll/Scroll";

import {HomeMultiData, HomeProductData} from "@/network/home";

export default {

  name: "Home",
  components: {
    GoodsListItem,
    NavBar,
    HomeSwiper,
    RecommendView,
    HomeFeature,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,

  },
  data() {
    return {
      banners: [],
      recommends: [],
      baseInfo: {
        // 基本信息一一对应的，
        indexs: [
          0,
          1,
          2,
        ],
        titles: [
          "流行",
          "新款",
          "精选",
        ],
        aliass: [
          'pop',
          'sell',
          'new',
        ]
      },
      contentData: [
        // 对应上面的baseinfo,分别存放各类数据。
        {page: 1, list: []},
        {page: 1, list: []},
        {page: 1, list: []},
      ],
      // 默认的tab索引
      tabIndex: 0,

      //是否展示back to top 按钮
      showBack2Top: false

    }
  },
  created() {
    HomeMultiData().then(res => {
      //console.log("===================")
      this.banners = res.data.data.banner.list
      this.recommends = res.data.data.recommend.list
      //console.log(this.recommends)
    })
    for (let index of this.baseInfo.indexs) {
      this.GetProductData(index)
    }

  },
  methods: {
    tabClick(index) {
      this.tabIndex = index
    },
    GetProductData(index) {
      console.log(index )
      console.log(this.contentData[index])
      this.contentData[index].page += 1

      HomeProductData(this.baseInfo.aliass[index], this.contentData[index].page).then(res => {
        this.contentData[index].list.push(...res.data.data.list)
      })
    },
    backTopClick(){
      //console.log(this.scroll)
      // console.log(this.$refs.wrapper);
      // this.$refs.wrapper.scrollTo(0,0)
     this.$refs.scroll.scrollTo(0,0,0.5)
     // this.$refs.scroll.scroll.
    },
    LoadMore(){
      console.log("load more")
      this.GetProductData(this.tabIndex)
      this.$refs.scroll.finishedPullUp()
    },
    ContentScroll(position){
      console.log(position)
      this.showBack2Top = - position.y  > 1000
    }

  },
  mounted() {
    this.$bus.$on("OneImageLoadFinish",()=>{
        this.$refs.scroll.refresh()
      }
    )



  },
}
</script>

<style scoped>


#home {
  height: 100vh;
  position: relative;
}

.home-nav {
  z-index: 9;
  position: fixed;
  color: #fff;
  background-color: var(--color-text);
}

.tab-control {
  position: relative;
  z-index: 9;
}
.wrapper{
  /*position: relative;*/
  /*top:44px;*/
  /*bottom: 49px;*/
  /*margin-top: 0;*/
  overflow: hidden;
  /*height: 1500px;*/
}
.content{
  position: absolute;
  /*background-color: red;*/
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px;
  /*overflow: hidden;*/
}
/*.home-swiper{*/
/*  position: relative;*/
/*  !*top:44px;*!*/
/*  left: 0;*/
/*  right: 0;*/
/*}*/
/*.recommend-view{*/
/*  position: relative;*/
/*  left: 0;*/
/*  right: 0;*/
/*}*/
</style>
