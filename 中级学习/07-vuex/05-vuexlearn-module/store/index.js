import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)


const moduleA = {
  // 模块的这个地方是个函数
  // state(){
  //   return {
  //     counter: 1111,
  //   }
  // },
  state:{
    counter: 1111,
  },
  mutations: {
    add(state){
      state.counter++
    }
  },
  actions: {  },
  getters: {
    powerCount(state){
      return state.counter * state.counter
    }
  }
}

const moduleB = {
  state: () => ({  }),
  mutations: {  },
  actions: {  }
}


const store = new Vuex.Store({
  state: {
    counter:10000,
    students:[
      {id:1,firstName:"jiedi01", secondName: "zhao",age:21,height:165},
      {id:2,firstName:"jiedi02", secondName: "zhao",age:22,height:170},
      {id:3,firstName:"jiedi03", secondName: "zhao",age:25,height:175},
      {id:4,firstName:"jiedi04", secondName: "zhao",age:30,height:180},
    ]

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
    }
  },
  actions: {},
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

    }
  },
  modules: {
    a:moduleA,
    b:moduleB,
  },
})

export default store
