
let url1=""
let url2=""
let url3=""
$.ajax(url1,function (data){
    console.log(data)
    console.log(data)
    $.ajax(data[ur1],function (data){
        console.log(data)
        console.log(data)
        $.ajax(data[url3],function (data){
            console.log(data)
            console.log(data)
        })
    })
})