<template>
<div class="good-list">

  <goods-list-item v-for="(item,index) in goods " class="good-list-item">
      <img :src="item.show.img" alt="">
    <div class="good-info">
      <p>{{item.title}}</p>
      <span class="price">{{ item.price }}</span>
      <span class="collect"> ❤ {{item.cfav}}</span>
    </div>
  </goods-list-item>
</div>
</template>

<script>
import GoodsListItem from "@/components/content/goods/GoodsListItem";
export default {
  name: "GoodsList",
  props:{
    goods:{
      type: Array,
      default(){
        return []
      }
    }
  },
  components:{
    GoodsListItem
  },
}
</script>

<style scoped>
.good-list{
  display: flex;
  padding: 5px;
  justify-content: space-around;
  flex-wrap: wrap;

}
.good-list-item{
  width: 48%;
  padding-bottom: 40px;
  position: relative;
}
.good-list-item img{
  width: 100%;
  border-radius: 5px;
}
.good-info{
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}
.good-info p{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: 3px;

}
.good-info .price{
  color: var(--color-high-text);
  margin-right: 20px;
}
.good-info .collect{
  position: relative;
}
</style>
