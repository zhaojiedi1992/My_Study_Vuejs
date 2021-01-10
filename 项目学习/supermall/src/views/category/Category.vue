<template>
  <div class="wrapper" ref="wrapper">
    <ul class="content">
      <li>..1.</li>
      <li>..2.</li>
      <li>..3.</li>
      <li>.4..</li>
      <li>..5.</li>
      <li>.6..</li>
      <li>..7.</li>
      <li>.8..</li>
      <li>.9..</li>
      <li>.10..</li>
      <li>...</li>
      <li>...</li>
      <li>...</li>
      <li>...</li>
      <li>...</li>
      <li>...</li>
      <li>...</li>
      <li>...</li>
      <li>...</li>
      <li>...</li>
      <li>...</li>

    </ul>
    <!-- 这里可以放一些其它的 DOM，但不会影响滚动 -->
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: "Category",
  data(){
    return {
      scroll: null ,
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, { pullUpLoad: true})
    })
  }
}
</script>

<style scoped>
.wrapper{
  height: 150px;
  background-color: red;
  overflow: hidden;
}

</style>
