// Map

// Declaracion

let myMap = new Map()

console.log(myMap)

//Inicializacion

myMap = new Map([
    ["name","Guille"],
    ["email","guillealvarenga22@gmail.com"],
    ["age",37]
])

console.log(myMap)

//Metodos y propiedades

//set()
myMap.set("alias","guilledev")
myMap.set("name","Guille Alvarenga")

console.log(myMap)

//get()
console.log(myMap.get("name"))
console.log(myMap.get("location"))

// has()

console.log(myMap.has("location"))
console.log(myMap.has("alias"))

// delete

myMap.delete("email")

console.log(myMap)



//keys, values y entrys

console.log(myMap.keys())
console.log(myMap.values())
console.log(myMap.entries())

//size

console.log(myMap.size)

//clear()

myMap.clear()

console.log(myMap)