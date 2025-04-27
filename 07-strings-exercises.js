/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto
let myname = "Guille"
let surname = "Alvarenga"

let greeting = "WELCOME to aur website " + myname +" "+ surname
console.log(greeting)
// 2. Muestra la longitud de una cadena de texto

console.log(greeting.length)
// 3. Muestra el primer y último carácter de un string
console.log(greeting[0])
console.log(greeting[38])
// 4. Convierte a mayúsculas y minúsculas un string

console.log(greeting.toUpperCase())

let message = "What are you looking for today?"

console.log(message.toLowerCase())
// 5. Crea una cadena de texto en varias líneas
let userMessage = `What are your
thoughts on this
topic?`

// 6. Interpola el valor de una variable en un string
const nombre = "Guille";
const edad = 26;
console.log(`Hola, me llamo ${nombre} y tengo ${edad} años`);
// 7. Reemplaza todos los espacios en blanco de un string por guiones

console.log(greeting.replaceAll(" ","-"))
// 8. Comprueba si una cadena de texto contiene una palabra concreta

console.log(myname.includes("Guille"))
// 9. Comprueba si dos strings son iguales
console.log(myname == surname)
// 10. Comprueba si dos strings tienen la misma longitud
console.log(myname.length == surname.length)