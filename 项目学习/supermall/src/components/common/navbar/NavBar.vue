<template>
  <div class="nav-bar">
    <div class="nav-bar-left">
      <slot name="left"></slot>
    </div>

    <div class="nav-bar-center" >
      <slot name="center"></slot>
    </div>

    <div class="nav-bar-right">
      <slot name="right"></slot>
    </div>

  </div>

</template>

<script>
export default {
name: "NavBar"
}
</script>

<style scoped>

.nav-bar  {
  display: flex;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  /*height: 44px;*/
  line-height: 44px;
  padding-top: 0;

}
.nav-bar-left {
  width: 60px;
  /*background-color: blue;*/
}
.nav-bar-right{
  width: 60px;
  /*background-color: blue;*/
}
.nav-bar-center{
  flex: 1;
  /*background-color: red;*/
  text-align: center;
}
</style>
