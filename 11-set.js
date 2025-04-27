//Set

//Declaracion

let mySet = new Set()

console.log(mySet)

//Iniializacion

mySet = new Set(["Guille","Alvarenga",26,true])

console.log(mySet)

//Metodos comunes
// add y delete

mySet.add("https://guille.dev")

console.log(mySet)

mySet.delete("https://guille.dev")

console.log(mySet)

console.log(mySet.delete(26))

console.log(mySet.delete(2))

console.log(mySet)

// has

console.log(mySet.has("Guille"))
console.log(mySet.has(26))

// size

console.log(mySet.size)

// Convertir un set a  array
let myArray = Array.from(mySet)
console.log(myArray)

//Convertir un array a set

mySet = new Set(myArray)
console.log(mySet)

//No admite duplicados

mySet.add("Alvarenga")
console.log(mySet)