<template>
<div class="good-info">
  <div class="title">
    <span> {{ goods.title }}</span>
  </div>
  <div class="price">
   <span class="new-price"> {{ goods.newPrice }}</span>
    <span class="old-price"> {{ goods.realPrice }}</span>
    <span class="discount"> {{ goods.discount }}</span>
  </div>
  <div class="service">
    <span> {{ goods.columns[0] }}</span>
    <span> {{ goods.columns[1] }}</span>
    <span> {{ goods.services[goods.services.length-1].name }}</span>
  </div>
  <div class="service-ext" >
    <span class="service-ext-item" v-for="(index) in goods.services.length-1" :key="index">
      <img :src="goods.services[index-1].icon" alt="">
      <span>{{goods.services[index-1].name }}</span>
    </span>
  </div>
</div>
</template>

<script>
export default {
  name: "DetailGoodInfo",
  props:{
    goods: {
      type: Object,
      default: {}
    }
  }
}
</script>

<style scoped>
.good-info{
  margin-top: 15px;
 padding: 0 8px ;
  color: #999;
  border-bottom: 5px solid #f2f5f8;
}

.title{
  background-color: #fff;
}
.price{
  margin-top: 10px ;
}
.new-price{
  font-size: 24px;
  color: var(--color-high-text);
}
.old-price{
  font-size: 13px;
  text-decoration: line-through;
  margin-left: 5px;
}
.discount {
  color: #fff;
  background-color: var(--color-high-text);
  border-radius: 8px;
  margin-left: 5px;
  font-size: 12px;
  padding: 2px 5px;
  position: relative;
  top: -8px;
}

.service{
  display: flex;
  line-height: 30px;
  justify-content: space-between;
  margin-top: 15px;
  font-size: 13px;
  border-bottom: 1px solid rgba(100,100,100,.1);
}
.service-ext{
  display: flex;
  line-height: 60px;
  justify-content: space-between;
}
.service-ext-item img{
  width: 14px;
  height: 14px;
  position: relative;
  top: 2px ;
}
.service-ext-item  span{
  font-size: 13px;
  color: #333;
}
</style>
