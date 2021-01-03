function  add (a ,b){
    return a+b
}
function  sub (a,b){
    return a-b
}
function sum(nums){
    let result=0
    for (num of nums){
        result+=num
    }
    return result
}

let  zero = 0


export  {
    add,
    sub,
    sum,
    zero

}