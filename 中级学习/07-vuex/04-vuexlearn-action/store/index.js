import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)


const store = new Vuex.Store({
  state: {
    counter:10000,
    students:[
      {id:1,firstName:"jiedi01", secondName: "zhao",age:21,height:165},
      {id:2,firstName:"jiedi02", secondName: "zhao",age:22,height:170},
      {id:3,firstName:"jiedi03", secondName: "zhao",age:25,height:175},
      {id:4,firstName:"jiedi04", secondName: "zhao",age:30,height:180},
    ],


  },
  mutations: {
    add(state){
      state.counter +=1
    },
    sub(state){
      state.counter-=1
    },
    addV2(state,payload){
      console.log(payload )
      state.counter +=payload.n
    },
    AUpdateInfo(state ){
      Vue.set( state.students[0],'age', 50)
      //   state.students[0]= {...state.students[0],age:50}
    },
    AUpdateInfoById(state,payload){
      let curIndex =0
      for (let index=0; index<state.students.length;index++){
        if( state.students[index].id===payload.id ) {
          curIndex= index
          break
        }
      }
      Vue.set( state.students[curIndex],'age', payload.age)
      //vue.set([0],'age', payload.age)

    }
  },
  actions: {
    AUpdateInfo(context ){
      setTimeout(()=>{
        console.log(context)
        context.commit('AUpdateInfo')
      },1000)
    },
    AUpdateInfoById(context,payload){
      return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          console.log(context)
          context.commit("AUpdateInfoById",payload)
          resolve(payload.id)
        })
      })
    }
  },
  getters: {
    powerCounter(state){
      return  state.counter * state.counter
    },
    ageMore25Count(state){
      return state.students.filter(student=>student.age>=25).length
    },
    StudentById(state){
      // 这是返回一个函数， 参数是接受一个参数的
      // 好理解的写法
      // let infoByid=function (id){
      //   return state.students.find(s=>s.id===id)
      // }
      // return infoByid

      // 简写的写法
      return (id)=>state.students.find(s=>s.id===id)

    },

  },
  modules: {},
})

export default store
