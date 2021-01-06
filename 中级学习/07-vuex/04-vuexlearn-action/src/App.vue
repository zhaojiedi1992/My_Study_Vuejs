<template>
  <div id="app">
    <h2>------------------下面是app页面的数据-----------------</h2>
    <h2>{{ $store.state.counter }}</h2>
    <h3>通过getters的属性访问数据</h3>
    <h2>{{ $store.getters.powerCounter }}</h2>
    <h2>{{ $store.getters.ageMore25Count }}</h2>
    <h3>通过getters的方法访问数据</h3>
    <h2>{{ $store.getters.StudentById(1) }}</h2>
    <h2>{{ $store.getters.StudentById(2) }}</h2>
    <h2>{{ $store.getters.StudentById(3) }}</h2>
    <h2>{{ $store.getters.StudentById(4) }}</h2>


    <!--    第一种异步更新的方式-->
    <h3>异步更新第一个学生年龄为50</h3>
    <button @click="AUpdateInfo">点击更新用户年龄</button>

<!--    第二种带参数的异步更新的方式-->
    <button v-for="(item,index) in $store.state.students" @click="AUpdateInfoById(item.id,item.id * 10)"> 点击更新id={{item.id}}个学生年龄为{{item.id }}</button>
    <h2>{{message}}</h2>
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
    return {
      counter: 1,
      message:"hello"}
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
    },
    AUpdateInfo(){
      this.$store.dispatch("AUpdateInfo")
    },
    AUpdateInfoById(id,age){
      this.$store.dispatch("AUpdateInfoById",{id:id,age:age}).then(r=>{
        console.log("回调完毕了。")
        this.message="异步更新完毕，我来来自更新索引为"+r+"的回调更新"
      })
    }
  }
}
</script>

<style>

</style>
