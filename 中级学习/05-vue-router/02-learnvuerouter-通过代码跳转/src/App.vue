<template>
  <div id="app">

    <router-link to="/home" tag="button"  >home</router-link>
    <router-link to="/about" tag="button"  >about</router-link>
    <button @click="aboutClick">about2</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    aboutClick(){
      this.$router.push("/about")
     // history.pushState("about")
    },
  }
}
</script>

<style>
.router-link-active{
  color: red;
}
</style>
