const body = document.querySelector("body")
const content = document.querySelector(".content")
const weight = body.querySelector(".weight")

const height = body.querySelector(".height")

function calculate(){
    const val1 = parseFloat(weight.value);
    const val2inm = parseFloat((height.value)/100)
    const Bmi = val1/(val2inm*val2inm)
    alert(`The value is: " ${Bmi}}`)
    
}