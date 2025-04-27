//Strings

let myname = "Guille"
let greeting = "Hola, " + myname +"!"
console.log(greeting)
console.log(typeof greeting)

//Longitud
console.log(greeting.length)

//Acesso a caracteres
console.log(greeting[0])
console.log(greeting[12])

//Metodos comunes
console.log(greeting.toUpperCase())
console.log(greeting.toLowerCase)
console.log(greeting.indexOf("Hola"))
console.log(greeting.indexOf("Guille"))
console.log(greeting.indexOf("Juan"))
console.log(greeting.includes("Hola"))
console.log(greeting.includes("Guille"))
console.log(greeting.includes("guilledev"))
console.log(greeting.slice(0,3))
console.log(greeting.replace("Guille", "Juan"))

//Template literals(plantillas literles)

let message = `Hola, es es mi
        curso de 
        Javascript`

console.log(message)

console.log("Hola", )

let email = "guille24@correo.com"

console.log(`Hola, ${myname}!`)
console.log(`Hola, ${email}!`)