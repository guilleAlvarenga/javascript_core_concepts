//Funciones

//Simple
function myFunc(){
    console.log("Hi there!")
}

for(let i = 0;i<5;i++){
myFunc()
}

//Con parametros

function myFunctionWithParams(name){
    console.log(`Hi ${name}!`)
}

myFunctionWithParams("Guille")

//Funciones anonimas

const myFunct2 = function(name){
    console.log(`Hi ${name}!`)
}

myFunct2("Guillermo")

//Arrow functions

const myFunct3 = (name) => {
    console.log(`Hi, ${name}!`)
}


const myFunct4 = (name) => console.log(`Hi, ${name}!`)

myFunct3("Juan")
myFunct4("Juan")

//Parametros

function sum(a, b){
    console.log(a + b)
}

sum(5, 10)
sum(5)
sum()

function defaultSum(a = 0, b = 0){
    console.log(a + b)
}

//Por defecto

defaultSum()
defaultSum(5)
defaultSum(5,10)
defaultSum(b = 5)

//Retorno de valores

function mult(a,b){
    return a * b
}

let result = mult(2,5)
console.log(result)

//Funciones anidadas

function extern(){
    console.log("Funcion externa")
    function intern(){
        console.log("Funcion interna")
    }
    intern()
}

extern()
// intern() Error: fuera del escope

//Funciones de orden superior

function applyFunc(func, param){
    func(param)
}

applyFunc(myFunct4,"funcion de orden superior")

//forEach

myArray = [1,2,3,4]

mySet = new Set(["Guille","Alvarenga",26,true])

myMap = new Map([
    ["name","Guille"],
    ["email","guillealvarenga22@gmail.com"],
    ["age",37]
])

myArray.forEach(function (value){
    console.log(value)
})

myArray.forEach((value) => console.log(value))

mySet.forEach((value) => console.log(value))

myMap.forEach((value) => console.log(value))