<template>
  <div id="detail" class="detail">
    <nav-bar>
      <img slot="left" src="@/assets/img/common/back.svg" alt="" @click="backClick">
      <tab-control ref="tcontrol" slot="center" :titles="titles"  @tabClick="TabClick"></tab-control>
    </nav-bar>

    <scroll
      :probe-type="3"
      class="content"
      @scroll="ContentScroll"
      ref="scroll">
    <detail-swiper   :images="topImages" ></detail-swiper>
    <detail-good-info  :goods="goods"></detail-good-info>
    <div ref="detail-1">
      <h2> 这是参数信息</h2>
      <div v-for="index in 20">{{index }}</div>
    </div>
    <div ref="detail-2">
      <h2> 这是评论信息</h2>
      <div v-for="index in 50">{{index }}</div>
    </div>
    <div ref="detail-3">
      <h2> 这是推荐信息</h2>
      <div v-for="index in 30">{{index }}</div>
    </div>
    </scroll>
      <detail-card-bar @Add2Cart="Add2Cart"></detail-card-bar>
  </div>
</template>

<script>

import NavBar from "@/components/common/navbar/NavBar";
import TabControl from "@/components/content/tabcontrol/TabControl";
import DetailSwiper from "@/views/detail/childComponents/DetailSwiper";
import DetailGoodInfo from "@/views/detail/childComponents/DetailGoodInfo";
import DetailCardBar from "./childComponents/DetailCardBar" ;

import Scroll from "@/components/common/scroll/Scroll";

import {ProductDetail, Goods, GoodsParam,Shop } from "@/network/detail"

export default {
  name: "Detail",
  components: {
    NavBar,
    TabControl,
    DetailSwiper,
    DetailGoodInfo,
    Scroll,
    DetailCardBar,
  },
  data() {
    return {
      iid: null,
      // 顶部标题
      titles: [
        "商品", "参数", "评论", "推荐",
      ],
      // 当前tab control index
      tabIndex: 0,
      // 顶部轮播图
      topImages: [],
      // 详情页商品信息
      goods: {},
      // 商品店家信息

      // 其他信息

      // offsetInfo
      offsetInfo:[]
    }
  },
  created() {
    this.iid = this.$route.params.iid
    ProductDetail(this.iid).then(res => {
      console.log(res.data.result)
      this.topImages = res.data.result.itemInfo.topImages
      this.topImages = this.topImages.map(n=>"https:" + n)
      console.log(this.topImages)
      this.goods = new Goods(res.data.result.itemInfo,res.data.result.columns,res.data.result.shopInfo.services)
      console.log(this.goods)

    }).catch(err => {
        console.log(err)
      }
    )
  },
  mounted() {
    this.TabClick(0)
  },
  methods: {
    //事件类
    backClick() {
      this.$router.back()
    },
    ContentScroll(position){
       console.log(position)
       console.log(this.offsetInfo)
      // 跟随滚动的y，分析出来对应的索引， 然后修改子组件的当前index ,
      for(let index = 0;index< this.offsetInfo.length-1; index++) {
          if (this.offsetInfo[index] <= -position.y && this.offsetInfo[index+1] >-position.y ){
            // console.log("xxxxx"+index)
            this.tabIndex= index
            // console.log(this.tabIndex)
            // console.log(this.$refs )
            this.$refs.tcontrol.ChangeIndex(this.tabIndex)
          }
      }
      // this.showBack2Top = -position.y > 1000
    },
    TabClick(index) {
      this.tabIndex = index
      // 方法不够精准，暂时认为用户点击这个按钮的时候，是已经图片加载完毕的，
      // 后面改成图片加载完毕事件在放置offset info信息。
      if (this.titles.length + 1 !== this.offsetInfo.length){
        this.offsetInfo.push(0)
        this.offsetInfo.push(this.$refs["detail-1"].offsetTop)
        this.offsetInfo.push(this.$refs["detail-2"].offsetTop)
        this.offsetInfo.push(this.$refs["detail-3"].offsetTop)
        this.offsetInfo.push(1000000)
      }
      this.$refs.scroll.scrollTo(0, -this.offsetInfo[index], 0.5)

    },
    Add2Cart(){
      console.log("add2 ")
      let product = {}
      console.log("goods")
      console.log(this.goods)
      product.iid = this.iid
      product.imgUrl = this.topImages[0]
      product.title = this.goods.title
      product.desc =this.goods.desc
      product.price = this.goods.realPrice
      console.log(product)
      this.$store.dispatch("Add2Cart",product).then(res=>{
        console.log("Add2Cart success")
      })

    }

  }
}
</script>

<style scoped>

#detail{
  height: 100vh;
  position: relative;
  z-index: 99999999;
  background-color: #fff;

}
/*.detail img {*/
/*  margin-top: 10px;*/
/*}*/
.content{
  position: absolute;
  top: 44px;
  bottom: 58px;
  left: 0;
  right: 0;
  background-color: #fff;
}
</style>
