/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
let username = "Guille"

if (username) {
    console.log(username)
}
// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

let usuario = "admin";
let contraseña = "1234";
if (usuario === "admin" && contraseña === "1234") {
    console.log("Ejercicio 2: Bienvenido al sistema");
}
// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let numero = -5
if (numero > 0) {
    console.log("Es positivo")
} else if (numero < 0) {
    console.log("Es negativo")
} else {
    console.log("Es cero")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

let edad = 13

if (edad >= 18) {
    console.log("La persona puede votar")
} else {
    console.log(`A la persona le falta  ${18 - edad} años para votar`)
}
// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 

let tipo = edad >= 18 ? "adulto" : "menor";
console.log("Ejercicio 5:", tipo);
// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let mes = 2;
if (mes === 12 || mes === 1 || mes === 2) {
    console.log("Ejercicio 6: Verano");
} else if (mes >= 3 && mes <= 5) {
    console.log("Ejercicio 6: Otoño");
} else if (mes >= 6 && mes <= 8) {
    console.log("Ejercicio 6: Invierno");
} else if (mes >= 9 && mes <= 11) {
    console.log("Ejercicio 6: Primavera");
}
// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

// switch

if (mes === 2) {
    console.log("Ejercicio 7: 28 días");
} else if ([4, 6, 9, 11].includes(mes)) {
    console.log("Ejercicio 7: 30 días");
} else {
    console.log("Ejercicio 7: 31 días");
}
// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let idioma = "Aleman"
let message1
switch(idioma){
case "Español":
message1 = "Hola!"
break
case "Frances":
message1 = "Salut!"
break
case "Aleman":
message1 = "Hallo!"
break
case "Italiano":
message1 = "Ciao!"
break
}

console.log(message1)
// 9. Usa un switch para hacer de nuevo el ejercicio 6
switch (true) {
    case (mes === 12 || mes <= 2):
        console.log("Ejercicio 9: Verano");
        break;
    case (mes >= 3 && mes <= 5):
        console.log("Ejercicio 9: Otoño");
        break;
    case (mes >= 6 && mes <= 8):
        console.log("Ejercicio 9: Invierno");
        break;
    case (mes >= 9 && mes <= 11):
        console.log("Ejercicio 9: Primavera");
        break;
}
// 10. Usa un switch para hacer de nuevo el ejercicio 7
switch (mes) {
    case 2:
        console.log("Ejercicio 10: 28 días");
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("Ejercicio 10: 30 días");
        break;
    default:
        console.log("Ejercicio 10: 31 días");
}