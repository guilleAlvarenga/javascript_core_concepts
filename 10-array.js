//array 

//Declaracion 

let myArray = []
let myArray2 = new Array()

console.log(myArray)
console.log(myArray2)

//Inicializacion

myArray = [3]
myArray2 = new Array(3)

console.log(myArray)
console.log(myArray2)

myArray = [1,2,3,4]
myArray2 = new Array(1,2,3,4)

console.log(myArray)
console.log(myArray2)

myArray = ["Alvarenga","Juan","Guillermo",37,true]
myArray2 = new Array("Alvarenga","Juan","Guillermo",37,true)

console.log(myArray)
console.log(myArray2)

myArray2 = new Array(3)
myArray2[2] = "Alvarenga"
myArray2[1] = "Juan"
//myArray2[0] = "Guillermo"
myArray2[4] = "English"

console.log(myArray2)

myArray = []
myArray[2] = "Alvarenga"
myArray[0] = "Juan"
myArray[1] = "Guillermo"

console.log(myArray)


//Metodos comunes
myArray = []

//push and pop

myArray.push("Probando")
myArray.push("Metodo")
myArray.push("push")
myArray.push("en javascript")
myArray.push(26)

console.log(myArray)

console.log(myArray.pop())//Elimina el ultimo elemento y lo devuelve
console.log(myArray.pop())

console.log(myArray)

//shift and unshift

console.log(myArray.shift())
console.log(myArray)

myArray.unshift("probando","el metodo")
console.log(myArray)

//length
console.log(myArray.length)

//clear

myArray = []
//myArray.length = 0 //alternativa
console.log(myArray)

//slice

myArray = ["Probando","Metodo","push","en javascript",26,true]

let myNewArray = myArray.slice(1,3)

console.log(myArray)
console.log(myNewArray)

//splice

myArray.splice(1,2)
console.log(myArray)

myArray = ["Probando","Metodo","push","en javascript",26,true]
myArray.splice(1,3,"Nuevo elemento")
console.log(myArray)