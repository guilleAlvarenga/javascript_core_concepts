/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en una línea
//Javascript es divertido :)

// 2. Escribe un comentario en varias líneas
/**
 * Javascript aveces tambien es un 
 * poco
 * complejo
 */

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
let nombre = "Guille"
let apellido = "Alvarenga"

let age = 26
let height = 1.6

let isBilingue = true
let isBillionarie = false

let undefinedValue
let nullValue = null

let mySymbol = Symbol("mysymbol")
let likesVideo = BigInt(53039374397439673463)
let viewsVideo = 96965836386389n


// 4. Imprime por consola el valor de todas las variables
console.log(nombre)
console.log(apellido)
console.log(age)
console.log(height)
console.log(isBilingue)
console.log(isBillionarie)
console.log(undefinedValue)
console.log(nullValue)
console.log(mySymbol)
console.log(likesVideo)
console.log(viewsVideo)

// 5. Imprime por consola el tipo de todas las variables
console.log(typeof nombre)
console.log(typeof apellido)
console.log(typeof age)
console.log(typeof height)
console.log(typeof isBilingue)
console.log(typeof isBillionarie)
console.log(typeof undefinedValue)
console.log(typeof nullValue)
console.log(typeof mySymbol)
console.log(typeof likesVideo)
console.log(typeof viewsVideo)



// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
nombre = "Mateo";
apellido = "Fernández";

age = 32;
height = 1.82;

isBilingue = false;
isBillionarie = true;

undefinedValue = "Ahora tiene un valor"; // Se le asigna algo para demostrar cambio
nullValue = "null cambiado a string"; // Para demostrar el cambio

mySymbol = Symbol("nuevoSimbolo");
likesVideo = BigInt(874562348756234876);
viewsVideo = 56789012345678n;


// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
nombre = 12345; // Número en lugar de string
apellido = true; // Booleano en lugar de string

age = "veintiséis"; // String en lugar de número
height = { value: 1.6, unit: "m" }; // Objeto en lugar de número

isBilingue = "yes"; // String en lugar de booleano
isBillionarie = 0; // Número en lugar de booleano

undefinedValue = null; // Null en lugar de undefined
nullValue = undefined; // Undefined en lugar de null

mySymbol = 42; // Número en lugar de símbolo
likesVideo = "53039374397439673463"; // String en lugar de BigInt
viewsVideo = false; // Booleano en lugar de BigInt


// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

const stringValue = "Hola, soy un string"; // String
const numberValue = 42; // Number
const bigIntValue = 9007199254740991n; // BigInt
const booleanValue = true; // Boolean
const undefinedConst = undefined; // Undefined
const nullConst = null; // Null
const symbolValue = Symbol("miSimbolo"); // Symbol



// 9. A continuación, modifica los valores de las constantes
/**
 * stringValue = "Nuevo valor";  // Error: No se puede reasignar una constante
 * numberValue = 100; // Error
 * bigIntValue = 123456789n; // Error
 * booleanValue = false; // Error
 * undefinedConst = "ahora definido"; // Error
 * nullConst = "null cambiado"; // Error
 * symbolValue = Symbol("otroSimbolo"); // Error
 */
// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse