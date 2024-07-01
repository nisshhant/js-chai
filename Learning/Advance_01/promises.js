const promise1 = new Promise(function(resolve, reject){
    //Do a async task 
    //DB calls, cyrptograpy, network  
    setTimeout(function(){
        console.log('Aync task is completed ')
        resolve()
    },1000)
})

promise1.then(()=>{
    console.log("HELLO DONE")
});


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Aync task is completed ')
        resolve()
    },1000)}).then(()=>{
    console.log("hellow done 2 ")
})


const Promise3  = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve({username : "Nishant", email : "nishant@example.com"})
    }, 1000);
})

Promise3.then(function(user){
    console.log(user)
})


const Promise4 = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true 
        if (!error){
            resolve({username : "nishant ", password : "123"})
        } else {
            reject(' sOMETHING went wrong ')
        }

    })
})

Promise4.then((user)=>{

}).catch()