<template>
  <swiper ref="swiper"  class="detail-swiper">
    <swiper-item v-for="(item,index) in images" :key="item" class="detail-swiper-item">
        <img :src="item" alt="">
    </swiper-item>
  </swiper>
</template>

<script>

import { SwiperItem , Swiper}  from "@/components/common/swiper"
export default {
  name: "DetailSwiper",
  components:{
    SwiperItem,
    Swiper
  },
  data(){
    return {}
  },
  props:{
    images: {
      type: Array,
      default : []
    }
  }
}
</script>

<style scoped>

.detail-swiper{
  height: 300px;
  overflow: hidden;
}

</style>
