/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética
let num1 = 3

let num2 = 2

const suma = num1 + num2
const resta = num1 - num2
const multiplicacion = num1 * num2
const division = num1 / num2
const modulo = num1 % num2
const exponente = num1 ** num2

console.log("Operaciones aritméticas:");
console.log("Suma:", suma);
console.log("Resta:", resta);
console.log("Multiplicación:", multiplicacion);
console.log("División:", division);
console.log("Módulo:", modulo);
console.log("Exponente:", exponente);

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
let temporal

temporal = num1
temporal += num2
const constanteAdicion = temporal
console.log(constanteAdicion)

temporal = num1
temporal -= num2
const constanteResta = temporal
console.log(constanteResta)


temporal = num1
temporal *= num2
const constanteMultiplicacion = temporal
console.log(constanteMultiplicacion)


temporal = num1
temporal /= num2
const constanteDivision = temporal
console.log(constanteDivision)

temporal = num1
temporal %= num2
const constanteModulo = temporal
console.log(constanteModulo)

temporal = num1
temporal **= num2
const constanteExponente= temporal
console.log(constanteExponente)

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

console.log("\nComparaciones verdaderas:");
console.log("5 > 3:", 5 > 3);
console.log("5 >= 5:", 5 >= 5);
console.log("3 < 7:", 3 < 7);
console.log("2 <= 2:", 2 <= 2);
console.log("10 !== 5:", 10 !== 5);

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log("\nComparaciones falsas:");
console.log("5 < 3:", 5 < 3);
console.log("5 <= 4:", 5 <= 4);
console.log("3 > 7:", 3 > 7);
console.log("2 >= 3:", 2 >= 3);
console.log("10 === '10':", 10 === "10");

// 5. Utiliza el operador lógico and
console.log("\nOperador lógico AND:");
console.log("5 > 3 && 2 < 4:", 5 > 3 && 2 < 4); // true && true => true

// 6. Utiliza el operador lógico or
console.log("\nOperador lógico OR:");
console.log("5 < 3 || 2 < 4:", 5 < 3 || 2 < 4); // false || true => true

// 7. Combina ambos operadores lógicos
console.log("\nCombinación de operadores lógicos (AND y OR):");
console.log("((5 > 3 && 2 < 4) || (5 < 3 && 2 > 4)):", (5 > 3 && 2 < 4) || (5 < 3 && 2 > 4));
// La primera parte (5 > 3 && 2 < 4) es true, por lo que el OR completa la expresión en true

// 8. Añade alguna negación
console.log("\nUso de la negación:");
console.log("!(5 > 3):", !(5 > 3));  // 5 > 3 es true, por lo que !true es false
console.log("!(5 < 3):", !(5 < 3));  // 5 < 3 es false, por lo que !false es true

// 9. Utiliza el operador ternario
const isBetter = false

isBetter ? console.log("es el mejor") : console.log("NO es el mejor!")

let resultadoTernario = (num1 > num2) 
  ? "a es mayor que b" 
  : "a no es mayor que b";
console.log("\nOperador ternario:");
console.log("Resultado:", resultadoTernario);

// 10. Combina operadores aritméticos, de comparáción y lógicas

let combinado = ((suma > resta) && (modulo === 0))
  ? "La suma es mayor que la resta y num1 es divisible por num2"
  : "Condición no cumplida";
console.log("\nCombinación de operadores aritméticos, de comparación y lógicos:");
console.log("Resultado combinado:", combinado);