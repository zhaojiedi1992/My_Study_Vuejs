<template>
  <div class="product-list-item" >
    <div class="left">
      <radio>xx</radio>
    </div>
    <div class="center">
      <img :src="product.imgUrl" alt="">
    </div>
    <div class="right">
      <div class="title">{{ product.title}}</div>
      <div class="desc">{{product.desc}}</div>
      <div class="bottom">
        <div class="price">{{product.realPrice}}</div>
        <div class="count">{{product.count}}</div>
      </div>

    </div>
  </div>

</template>

<script>
export default {
  name: "ProductListItem",
  props:{
    product:{
      type: Object,
      default(){
        return {}
      }
    }
  }

}
</script>

<style scoped>

.product-list-item{
  display: flex;
  position: relative;
  border-bottom: 1px solid #ccc;
  width: 100%;
  font-size: 0;
  padding: 5px;

}
.left{
  width: 20px;

}
.product-list-item .center{
  flex: 1;
}
.product-list-item .right{
  flex: 3;
  position: relative;
  overflow: hidden;
  font-size: 17px;
  color: #333;
  padding: 5px 10px;
}
.center img{
 width: 80px;
  height: 100px;
  display: block;
  border-radius: 5px;
  padding: 5px;
}
.title{
  overflow: hidden;
  color: #777777;
  font-size: 20px;
  text-overflow: ellipsis;
  /*white-space: nowrap;*/
}
.desc{

  font-size: 14px;
  margin-top: 15px;
}
.price{
  color: orangered;
}

.bottom{
  position: absolute;
  left: 10px;
  right: 10px;
  bottom: 10px;
  margin-top: 10px;
}

</style>
