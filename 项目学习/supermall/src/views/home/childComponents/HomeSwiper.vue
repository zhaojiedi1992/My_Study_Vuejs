<template>
<swiper ref="swiper">
  <swiper-item v-for="(item,index) in banners" :key="item.title">
    <a :href="item.link">
      <img :src="item.image" alt="">
    </a>
  </swiper-item>
</swiper>
</template>



<script>

import {Swiper, SwiperItem} from '@/components/common/swiper'

export default {
  name: 'HomeSwiper',
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    banners: {
      type: Array,
      default: [],
    }
  },
  data() {
    return {}
  }
}

</script>



