<template>
<div class="detail-card-bar">
  <div class="left bar-item">
    <div>
      <i class="icon service"></i>
      <span class="text">客服</span>
    </div>
    <div>
      <i class="icon shop"></i>
      <span class="text">店铺</span>
    </div>
    <div>
      <i class="icon select"></i>
      <span class="text">收藏</span>
    </div>
  </div>
  <div class="right bar-item">
    <div class="cart" @click="Add2Cart">加入购物车</div>
    <div class="buy">购买</div>
  </div>
</div>
</template>

<script>
export default {

name: "DetailCardBar",
  methods:{
    Add2Cart(){
      let product = {}
      product.iid = this.
    }
  }
}
</script>

<style scoped>

.detail-card-bar{
  /*background-color: red;*/
  background-color: #fff;
  z-index: 999;
  height: 58px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  text-align: center;
}
.left .icon{
  display: block;
  width: 22px;
  height: 22px;
  background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
  margin: 10px auto 3px ;
}
.left .service {
  background-position:0 -54px;
}
.left .shop {
  background-position:0 -98px;
}

.bar-item{
  flex:  1;
  display: flex;
}
.bar-item>div{
  flex: 1 ;
  /*display: flex;*/
}
.left .text {
  font-size: 13px;
}

.right{
  font-size: 15px;
  color: #fff;
  line-height: 58px;
}
.right .cart{
  background-color: #ffe817;
  color: #333;
}
.right .buy {
  background-color: #f69;
}

</style>
