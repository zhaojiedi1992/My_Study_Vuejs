<template>
  <div id="app">

    <router-link to="/home">home</router-link>
    <router-link to="/about">about</router-link>
    <router-link :to="UidUri">user</router-link>
    <router-link :to="{path: '/profile', query:{uid: 'panda2'}}">Profile</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      uid: 'panda'
    }
  },
  computed: {
    UidUri() {
      return "/user/" + this.uid

    }
  }
}
</script>

<style>

</style>
