/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20

for(let  i = 1;i<=20;i++){
console.log(`Numero: ${i}`)
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado

let sumaTotal = 0
for(let i = 1;i<=100;i++){
sumaTotal += i
}

console.log(`La suma total es: ${sumaTotal}`)

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50

for (let i = 2; i <= 50; i += 2) {
    console.log(i);
  }

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
const nombres = ["Ana", "Juan", "Lucía", "Pedro"];

// Opción 1: for...of (recomendado)
for (const nombre of nombres) {
  console.log(nombre);
}

// Opción 2: for clásico
for (let i = 0; i < nombres.length; i++) {
  console.log(nombres[i]);
}
// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto

let myString = "Hola amigos, ¿Como estan?"
const vocales = ["a", "e", "i", "o", "u"];
let contador = 0;
texto = myString.toLowerCase(); // Convertir a minúsculas para simplificar

for (const letra of texto) {
  if (vocales.includes(letra)) {
    contador++;
  }
}
console.log(contador)

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

let numArray = [1,2,3,4,5]

let producto = 1; // Inicializamos con 1 (elemento neutro de la multiplicación)
for (const numero of numArray) {
  producto *= numero; // Multiplicamos cada elemento del array
}

console.log(producto)

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

for(let i = 0; i<=10;i++){
    console.log(`5 X ${i} = ${5*i}`)
}

// 8. Usa un bucle para invertir una cadena de texto
let greeting = "Hola amigos!"

let greetingReverse = ""

for(let i = greeting.length;i>=0;i--){

    greetingReverse += greeting[i]
    
}
console.log(greetingReverse)

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

// Inicializamos el array con los dos primeros números de Fibonacci
let fibonacci = [0, 1];

// Generamos los siguientes 8 números (para completar 10 en total)
for (let i = 2; i < 10; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]; // Cada número es la suma de los dos anteriores
}

console.log("Primeros 10 números de Fibonacci:", fibonacci);
// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

const numeros = [5, 12, 8, 15, 3, 20, 9, 11];
const mayoresQue10 = [];

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] > 10) {
    mayoresQue10.push(numeros[i]); // Agregamos el número al nuevo array si es mayor a 10
  }
}

console.log("Números mayores a 10:", mayoresQue10);