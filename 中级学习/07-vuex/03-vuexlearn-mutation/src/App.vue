<template>
  <div id="app">
    <h2>------------------下面是app页面的数据-----------------</h2>
    <h2>{{ $store.state.counter }}</h2>
    <h3>通过getters的属性访问数据</h3>
    <h2>{{ $store.getters.powerCounter }}</h2>
    <h2>{{ $store.getters.ageMore25Count }}</h2>
    <h3>通过getters的方法访问数据</h3>
    <h2>{{ $store.getters.StudentById(2) }}</h2>
    <!--    这种修改方式不符合规范-->
    <!--    <button @click="$store.state.counter++">+</button>-->
    <!--    <button @click="$store.state.counter&#45;&#45;">-</button>-->

    <button @click="add">+</button>
    <button @click="sub">-</button>
    <button @click="addV2(5)">+5</button>
    <button @click="addV2(-10)">-10</button>

    <h2>------------------下面是hello world页面的数据-----------------</h2>
    <hello-world></hello-world>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import store from "../store";

export default {
  name: 'App',
  store,
  components: {
    HelloWorld
  },
  data() {
    return {counter: 1}
  },
  methods: {
    add() {
      this.$store.commit("add")
    },
    sub() {
      this.$store.commit("sub")
    },
    addV2(n) {
      // 第一种提交方式: 方法形式的
      // let  payload={n:n}
      // this.$store.commit('addV2',payload)

      //第二种提交方式 ： 对象风格形式的
      //let  payload={n:n}
      this.$store.commit({
          type: 'addV2',
          n: n,
        }
      )
    }
  }
}
</script>

<style>

</style>
