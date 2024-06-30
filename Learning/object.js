const obj = new Object
obj.name = "Nishant"
obj.id = "abciamnishant"
obj.class  = 7
obj.object = {
    objname : "object-nishant",
    objclass : "object-class"
}
obj.arr = [0,1,2,3,4]

const objectassign = {...obj, ...obj.object}
console.log(objectassign)
console.log(obj.arr[3]);
console.log(Object.keys(obj))


const{objname :on} =obj.object
console.log(on)