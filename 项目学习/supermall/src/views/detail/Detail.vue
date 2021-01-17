<template>
  <div id="detail" class="detail">
    <nav-bar>
      <img slot="left" src="@/assets/img/common/back.svg" alt="" @click="backClick">
      <tab-control slot="center" :titles="titles"></tab-control>
    </nav-bar>
    <detail-swiper :images="topImages" ></detail-swiper>
    <detail-good-info :goods="goods"></detail-good-info>
  </div>
</template>

<script>

import NavBar from "@/components/common/navbar/NavBar";
import TabControl from "@/components/content/tabcontrol/TabControl";
import DetailSwiper from "@/views/detail/childComponents/DetailSwiper";
import DetailGoodInfo from "@/views/detail/childComponents/DetailGoodInfo";

import {ProductDetail, Goods, GoodsParam,Shop } from "@/network/detail"

export default {
  name: "Detail",
  components: {
    NavBar,
    TabControl,
    DetailSwiper,
    DetailGoodInfo,
  },
  data() {
    return {
      iid: null,
      // 顶部标题
      titles: [
        "商品", "参数", "评论", "推荐",
      ],
      // 顶部轮播图
      topImages: [],
      // 详情页商品信息
      goods: {},
      // 商品店家信息

      // 其他信息
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
  methods: {
    //事件类
    backClick() {
      this.$router.back()
    },

  }
}
</script>

<style scoped>

.detail img {
  margin-top: 10px;
}
</style>
