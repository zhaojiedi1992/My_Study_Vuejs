

//常态写法
setTimeout(function (){
    let data= 'hello world'
    console.log(data);
},1000)



// 改写方式
new Promise((resolve ,reject)=>{
    //处理耗时请求
    setTimeout(function (){
        resolve('hello world')
        reject('error data')
    })
}).then(data=>{
    // 正常情况下执行的
    console.log(data)
}).catch(error=>{
    // 异常的时候执行
    console.log(error);
}).finally(data=>{
    // 一定会执行的地方
    console.log("finally")
})