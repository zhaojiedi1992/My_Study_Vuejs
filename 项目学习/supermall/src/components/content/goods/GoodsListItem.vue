<template>
<div class="goods-list-item">
  <slot></slot>
</div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props:{
    goodsItem:{
      type: Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style scoped>

</style>
