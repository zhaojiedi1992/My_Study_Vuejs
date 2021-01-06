// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from "axios";

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})

// [baseuse]
//1. 基本使用
axios({
  url: 'http://152.136.185.210:7878/api/m5/home/multidata',
}).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})

// [baseuse]

// [getuse]
//2. 使用get方法，接受参数的方式
axios.get('http://152.136.185.210:7878/api/m5/home/data', {
  params: {
    type: 'sell',
    page: 1,
  }
}).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})
// [getuse]

// [configuse]
//3. config方式来整体提交
axios(
  {
    url: 'http://152.136.185.210:7878/api/m5/home/data',
    method: 'get',
    params: {
      type: 'sell',
      page: 1,
    }
  }).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})
// [configuse]

//  [concurrentuse]
// 并发
let homeData=axios(
  {
    url: 'http://152.136.185.210:7878/api/m5/home/data',
    method:'get',
    params:{
      type: 'sell',
      page: 1,
    }})
let homeMultidata=axios(
  {
    url: 'http://152.136.185.210:7878/api/m5/home/multidata',
    method:'get',
})
axios.all([homeData,homeMultidata]).then(([d1,d2])=>{
  console.log(d1.data)
  console.log(d2.data)
})

// [concurrentuse]

// [instanceuse]

// 创建实例的
const categoryAxios = axios.create({
  baseURL: 'http://152.136.185.210:7878/api/m5/category',
  timeout: 1000,

  //headers: {'X-Custom-Header': 'foobar'}
});
categoryAxios.defaults.timeout = 5000


categoryAxios.get().then(res => {
  console.log(res.data)
})

// 配置默认值
axios.defaults.timeout = 5000
// [instanceuse]

// [interceptoreuse]
// 拦截器

// 添加请求拦截器
// axios.interceptors.request.use(function (config) {
//   // 在发送请求之前做些什么
//   return config;
// }, function (error) {
//   // 对请求错误做些什么
//   return Promise.reject(error);
// });
//
// // 添加响应拦截器
// axios.interceptors.response.use(function (response) {
//   // 对响应数据做点什么
//   return response;
// }, function (error) {
//   // 对响应错误做点什么
//   return Promise.reject(error);
// });


// 创建实例的
const categoryAxios2 = axios.create({
  baseURL: 'http://152.136.185.210:7878/api/m5/category',
  timeout: 1000,
  //headers: {'X-Custom-Header': 'foobar'}
});
// 创建一个响应的拦截器，完成提取响应的特定字段即可
categoryAxios2.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  console.log("开始是打印响应结果")
  return response.data.data.category.list;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});
console.log("------"*10)
categoryAxios2.get().then(res=>{
  console.log(res)
}).catch(err=>{
  console.log(err);
})

// [interceptoreuse]
