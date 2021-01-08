<template>
<div class="recommend-view">
<div v-for="(item,index) in recommends"  class="recommend-view-item" :key="item.title">
  <a :href="item.link">
    <img :src="item.image" alt="">
  </a>

  <div>{{item.title}}</div>
</div>
</div>
</template>

<script>
export default {
name: "RecommendView",
  props:{
    recommends:{
      type: Array,
      default: []
    }
  },
  methods:{

  },


}
</script>

<style scoped>
.recommend-view{
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
}
.recommend-view-item{
  flex:1;

}
.recommend-view-item img{
  width: 68px;
  height: 68px;
  padding-left: 0;
  padding-right: 0;
}
</style>
