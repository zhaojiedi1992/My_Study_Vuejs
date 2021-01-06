new Promise((resolve, reject) => {
    //处理耗时请求
    setTimeout(function () {
        resolve('hello world')
        reject('error data')
    })
}).then(data => {
    console.log(data)
    return new Promise((resolve,reject)=>{
        resolve(data)
    }).then(data=>{
        return data +"111111111"
    })
}).then(data => {
    console.log(data)
    return Promise.resolve(data+"2222222")
}).then(data => {
    console.log(data)
    return data+"33333333333"
}).then(data => {
    console.log(data)
    return data+"33333333333"
}).then(data => {
    console.log(data)
    return data+"33333333333"
}).then(data => {
    console.log(data)
    return data+"33333333333"
}).then(data => {
    console.log(data)
    return data+"33333333333"
}).then(data => {
    console.log(data)
    return data+"33333333333"
})