/*
Clase 32 - Ejercicios: Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=14146
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma
function suma(a, b) {
    return a + b
}

let result = suma(2, 5)
console.log(result)


// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos


function encontrarMayor(myArray) {
    let mayor = myArray[0]// Asumimos que el primer número es el mayor
    for (let i = 1; i < myArray.length; i++) {
        if (myArray[i] > mayor) {
            mayor = myArray[i]// Actualizamos el mayor si encontramos uno más grande
        }
    }
    return mayor
}
const myArray = [0, 9, 3, 8]
const mayor = encontrarMayor(myArray)
console.log(mayor)

/*ALTERNATIVA

function encontrarMayor(numeros) {
    // Utilizamos Math.max() junto con el operador de propagación para encontrar el mayor número
    return Math.max(...numeros);
}

// Ejemplo de uso:
const numeros = [10, 5, 20, 8, 15];
const mayor = encontrarMayor(numeros);
console.log(mayor); // Output: 20
*/
// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
function numeroVocales(texto) {

    const vocales = ["a", "e", "i", "o", "u"];
    let contador = 0;
    texto = myString.toLowerCase(); // Convertir a minúsculas para simplificar

    for (const letra of texto) {
        if (vocales.includes(letra)) {
            contador++;
        }
    }
    console.log(contador)

    return contador
}
let myString = "Hola amigos, ¿Como estan?"
console.log(`El texto tiene ${numeroVocales(myString)}`)


// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

function textoAmayusculas(texto) {
    let mayuscula = []// Creamos un array vacío para almacenar las strings en mayúsculas
    for (let i = 0; i < texto.length; i++) {
        mayuscula.push(texto[i].toUpperCase())// Convertimos cada string a mayúsculas y la añadimos al nuevo array
    }

    return mayuscula
}

const myArray2 = ["juan", "ignacio", "jose"]
const arrayMayus = textoAmayusculas(myArray2)

console.log(textoAmayusculas(arrayMayus))

//Alternativa
/*
 function convertirAMayusculas(strings) {
    // Utilizamos map() para crear un nuevo array con las strings en mayúsculas
    return strings.map(str => str.toUpperCase());
}

// Ejemplo de uso:
const palabras = ["hola", "mundo", "javascript"];
const palabrasMayusculas = convertirAMayusculas(palabras);
console.log(palabrasMayusculas); // Output: ["HOLA", "MUNDO", "JAVASCRIPT"]
 */

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

/*
    Un número primo es aquel que solo es divisible por 1 y por sí mismo.

    Si el número es menor o igual a 1, no es primo.

    Para verificar si un número es primo, basta con comprobar si es divisible por algún número entre 2 y 
    la raíz cuadrada del número (esto optimiza el proceso).

    
*/

function esPrimo(numero) {
    // Si el número es menor o igual a 1, no es primo
    if (numero <= 1) return false;

    // Verificamos divisibilidad desde 2 hasta la raíz cuadrada del número
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false; // Si es divisible, no es primo
        }
    }

    return true; // Si no se encontraron divisores, es primo
}

// Ejemplos de uso:
console.log(esPrimo(2));    // Output: true (2 es primo)
console.log(esPrimo(7));    // Output: true (7 es primo)
console.log(esPrimo(10));   // Output: false (10 no es primo)
console.log(esPrimo(1));    // Output: false (1 no es primo)
console.log(esPrimo(29));   // Output: true (29 es primo)

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

function elementosCom(array1, array2) {
    let nuevoArray = [];

    for (let i = 0; i < array1.length; i++) {
        // Verifica si el elemento de array1 está en array2
        if (array2.includes(array1[i])) {
            // Si está, lo agregamos al nuevoArray
            nuevoArray.push(array1[i]);
        }
    }

    return nuevoArray; // Retornamos el array con los elementos comunes
}

let array1 = [1, 2, 3, 4];
let array2 = [1, 5, 6, 7];

let nuevoArray = elementosCom(array1, array2);
console.log("Elementos comunes:", nuevoArray); // Output: [1]

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
function sumaNumerosPares(array) {
    let suma = 0; // Inicializamos la suma en 0

    // Recorremos el array
    for (let i = 0; i < array.length; i++) {
        // Verificamos si el número es par
        if (array[i] % 2 === 0) {
            suma += array[i]; // Sumamos el número par a la variable suma
        }
    }

    return suma; // Devolvemos la suma de los números pares
}

// Ejemplo de uso:
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const resultado = sumaNumerosPares(numeros);
console.log("La suma de los números pares es:", resultado); // Output: 30






// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

function elevarAlCuadrado(array) {
    // Creamos un nuevo array para almacenar los números al cuadrado
    const resultado = [];

    // Recorremos el array original
    for (let i = 0; i < array.length; i++) {
        // Elevamos cada número al cuadrado y lo agregamos al nuevo array
        resultado.push(array[i] ** 2);
    }

    return resultado; // Devolvemos el nuevo array
}

// Ejemplo de uso:
const arrayNormal = [1, 2, 3, 4, 5];
const cuadrados = elevarAlCuadrado(arrayNormal);
console.log("Números al cuadrado:", cuadrados); // Output: [1, 4, 9, 16, 25]

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso


function invertirPalabras(cadena) {
    // Dividimos la cadena en un array de palabras usando el espacio como separador
    const palabras = cadena.split(" ");

    // Invertimos el orden del array de palabras
    const palabrasInvertidas = palabras.reverse();

    // Unimos el array de palabras invertidas en una cadena de texto
    const cadenaInvertida = palabrasInvertidas.join(" ");

    return cadenaInvertida; // Devolvemos la cadena con las palabras invertidas
}

// Ejemplo de uso:
const texto = "Hola mundo desde JavaScript";
const textoInvertido2 = invertirPalabras(texto);
console.log("Texto invertido:", textoInvertido2); // Output: "JavaScript desde mundo Hola"

// 10. Crea una función que calcule el factorial de un número dado

function factorial(n) {
    if (n < 0) {
        return "No se puede calcular el factorial de un número negativo.";
    }

    let resultado = 1; // Inicializamos el resultado en 1

    // Multiplicamos los números desde 1 hasta n
    for (let i = 1; i <= n; i++) {
        resultado *= i;
    }

    return resultado; // Devolvemos el resultado
}

// Ejemplo de uso:
const numero = 5;
const resultado1 = factorial(numero);
console.log(`El factorial de ${numero} es:`, resultado1); // Output: 120