<template>
  <div>
  <button @click="GetCategroy">点击加载数据</button>
  <ul>
    <li >{{categorys}}</li>
  </ul>
    <router-view/>
  </div>
</template>

<script>

import request from '../network/request'
export default {
  name: 'HelloWorld',
  data () {
    return {
      categorys:[]
    }
  },
  methods:{
    GetCategroy(){
      request({
        url: '',
        method: 'get',
        data: {},
      }).then(res=>{
        console.log(res)
        this.categorys=res.data.category
      }).catch(err=> {
        console.log(err)
      })
    },

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
