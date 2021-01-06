const getters={
  powerCounter(state) {
    return state.counter * state.counter
  },
  ageMore25Count(state) {
    return state.students.filter(student => student.age >= 25).length
  },
  StudentById(state) {
    // 这是返回一个函数， 参数是接受一个参数的
    // 好理解的写法
    // let infoByid=function (id){
    //   return state.students.find(s=>s.id===id)
    // }
    // return infoByid

    // 简写的写法
    return (id) => state.students.find(s => s.id === id)

  }
}

export default  getters
