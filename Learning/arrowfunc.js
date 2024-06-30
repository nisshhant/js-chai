// const user = {
//     username : "Nishant ",
//     price : 999,
//     message : function mess(){
//         console.log(`hello my dear ${this.username}`)
//     } 
// }

// user.message()


// /what happen when function m this daala jaaye 

// thischeck()

function thischeck(){
    console.log(this);
}



const arrowthischeck = () => {
    console.log(this)
}

arrowthischeck();


// //immediately invoked function expressions 
(function iifehaiyeh(){
     console.log("i am called");
})();

(()=>{
    console.log("i am also called")
})()


const iifehaiyeh = "hi"
console.log(iifehaiyeh)