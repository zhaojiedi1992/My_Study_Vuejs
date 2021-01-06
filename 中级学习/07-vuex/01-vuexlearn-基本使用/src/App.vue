<template>
  <div id="app">
    <h2>------------------下面是app页面的数据-----------------</h2>
    <h2>{{$store.state.counter}}</h2>
    <!--    这种修改方式不符合规范-->
<!--    <button @click="$store.state.counter++">+</button>-->
<!--    <button @click="$store.state.counter&#45;&#45;">-</button>-->

        <button @click="add">+</button>
        <button @click="sub">-</button>

    <h2>------------------下面是hello world页面的数据-----------------</h2>
    <hello-world> </hello-world>
  </div>
</template>

<script>
import HelloWorld  from "./components/HelloWorld";
import store from "../store";

export default {
  name: 'App',
  store,
  components:{
    HelloWorld
  },
  data(){
    return { counter: 1}
  },
  methods:{
    add(){
      this.$store.commit("add")
    },
    sub(){
      this.$store.commit("sub")
    }
  }
}
</script>

<style>

</style>
