<template>
<div  class="tab-bar">
  <slot></slot>
</div>
</template>

<script>
export default {
name: "TabBar"
}
</script>

<style scoped>
.tab-bar{
  display: flex;
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  height: 49px;
  text-align: center;
  background-color: #f6f6f6;
}
</style>
