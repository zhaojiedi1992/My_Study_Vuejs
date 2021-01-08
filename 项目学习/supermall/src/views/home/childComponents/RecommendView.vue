<template>
<div class="recommend-view">
<div v-for="(item,index) in recommends"  class="recommend-view-item" :key="item.title">
  <a :href="item.link">
    <img :src="item.image" alt="">
    <div>{{item.title}}</div>
  </a>


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
  /*position: fixed;*/
  /*left: 0;*/
  /*right: 0;*/
  margin-top: 10px;
  font-size: 14px;
  padding-bottom: 30px;

}
.recommend-view-item{
  flex:1;
  text-align: center;

}
.recommend-view-item img{
  width: 80px;
  height: 80px;
  margin-bottom: 10px;
  /*padding-left: 0;*/
  /*padding-right: 0;*/
}
</style>
