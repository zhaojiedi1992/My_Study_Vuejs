<template>
<div>
  <h2>我是Profile</h2>
  <p>我是Profile内容</p>
  <p>第一种方式获取传递过来的uid为： {{Uid}}</p>
  <p>第二种方式获取传递过来的uid为： {{Uid2}}</p>

</div>
</template>

<script>
export default {
name: "Profile",
  computed:{
    Uid(){
      return this.$route.params.uid
    },
    Uid2(){
      return this.$route.query.uid
    }
  }
}
</script>

<style scoped>

</style>
