/*
Clase 34 - Ejercicios: Objetos
Vídeo: https://youtu.be/1glVfFxj8a4?t=15675
*/

// 1. Crea un objeto con 3 propiedades
let camioneta = {
    brandName: "Toyota",
    model: "Hilux",
    color: "Black",

    engine: {
        cilindrada: "2983ml3",
        potencia: "163cv"
    }
}


// 2. Accede y muestra su valor
console.log(camioneta)

// 3. Agrega una nueva propiedad

camioneta.realese = "2015"
console.log(camioneta)

// 4. Elimina una de las 3 primeras propiedades
delete camioneta.model
console.log(camioneta)
// 5. Agrega una función e invócala
camioneta.start = function(){
    console.log("Running engine")
}
camioneta.start()

// 6. Itera las propiedades del objeto

for(let key in camioneta){
    console.log(`${key}: ${camioneta[key]}`)
}
// 7. Crea un objeto anidado
const objetoAnidado = {
    datos: {
      usuario: {
        nombre: "Ana",
        edad: 30,
        direccion: {
          ciudad: "Madrid",
          pais: "España"
        }
      }
    }
  };

// 8. Accede y muestra el valor de las propiedades anidadas
console.log("\nAcceso a propiedades anidadas:");
console.log(objetoAnidado.datos.usuario.nombre);            // "Ana"
console.log(objetoAnidado['datos']['usuario']['edad']);     // 30
console.log(objetoAnidado.datos.usuario.direccion.ciudad); // "Madrid"

// 9. Comprueba si los dos objetos creados son iguales
console.log("\nComparación de objetos:");
console.log(camioneta === objetoAnidado); // false
// 10. Comprueba si dos propiedades diferentes son iguales

console.log("\nComparación de propiedades:");
console.log(camioneta.nombre === objetoAnidado.datos.usuario.nombre);    // "Toyota" vs "Ana" => false