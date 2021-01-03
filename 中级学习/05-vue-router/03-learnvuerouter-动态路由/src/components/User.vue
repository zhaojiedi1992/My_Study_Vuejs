<template>
<div>
  <h2>我是User</h2>
  <p>我是User内容</p>
  <p>{{Uid}}</p>
</div>
</template>

<script>
export default {
name: "User",
  computed:{
    Uid(){
      return this.$route.params.uid
    }
  }
}
</script>

<style scoped>

</style>
