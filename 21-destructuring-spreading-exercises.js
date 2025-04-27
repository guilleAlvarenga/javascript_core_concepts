/*
Clase 36 - Ejercicios: Desestructuración y propagación
Vídeo: https://youtu.be/1glVfFxj8a4?t=16802
*/

// 1. Usa desestructuración para extraer los dos primeros elementos de un array 

// Array original
const numeros = [10, 20, 30, 40];

// Desestructuración para obtener los dos primeros elementos
const [primero, segundo] = numeros;

console.log(primero);  // 10
console.log(segundo); // 20

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable


// Array original
const colores = ['rojo', 'verde'];

// Desestructuración con valor predeterminado
const [primerColor, segundoColor, tercerColor = 'azul'] = colores;

console.log(primerColor);  // 'rojo'
console.log(segundoColor); // 'verde'
console.log(tercerColor);  // 'azul' (valor predeterminado)

// 3. Usa desestructuración para extraer dos propiedades de un objeto

let person = {
    name: "Guille",
    age: 26,
    alias: "guilledev"
}

let {name, age} = person
console.log(name)
console.log(age)


// Objeto original
const usuario = {
    nombre: 'Ana',
    edad: 28,
    email: 'ana@example.com',
    pais: 'México'
};

// Desestructuración para extraer dos propiedades
const { nombre, edad } = usuario;

console.log(nombre); // 'Ana'
console.log(edad);   // 28


// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes

let {email:email1, pais:pais1,} = usuario
console.log(email1)
console.log(pais1)

// Objeto original
const usuario1 = {
    nombre: 'Carlos',
    edad: 35,
    email: 'carlos@example.com'
};

// Desestructuración con renombrado de variables
const { nombre: userName, edad: userAge } = usuario1;

console.log(userName); // 'Carlos'
console.log(userAge);  // 35

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado

const usuario2 = {
    nombreUser: 'Carlos',
    edad: 35,
    email: 'carlos@example.com',
    job: {
        name: "Data science",
        salary: 120000
    }
};

let {nombreUser: nombre2, job:{name: jobName}} = usuario2
console.log(nombre2)
console.log(jobName)


// Objeto con estructura anidada
const persona = {
    nombre: 'Laura',
    edad: 32,
    direccion: {
        ciudad: 'Barcelona',
        pais: 'España',
        codigoPostal: '08001'
    }
};

// Desestructuración de propiedades anidadas
let { 
    nombre3, 
    direccion: { 
        ciudad, 
        pais 
    } 
} = persona;

console.log(nombre); // 'Laura'
console.log(ciudad); // 'Barcelona'
console.log(pais);   // 'España'

// 6. Usa propagación para combinar dos arrays en uno nuevo

// Arrays originales
const frutas = ['manzana', 'banana'];
const vegetales = ['zanahoria', 'espinaca'];

// Combinar usando spread operator
const alimentos = [...frutas, ...vegetales];

console.log(alimentos); 
// ['manzana', 'banana', 'zanahoria', 'espinaca']

// 7. Usa propagación para crear una copia de un array

let alimentosCopia = [...alimentos]
console.log(alimentosCopia); 

// Array original
const original = [1, 2, 3, 4];

// Crear copia usando spread operator
const copia = [...original];

console.log(copia);    // [1, 2, 3, 4]
console.log(original === copia); // false (son arrays diferentes)

// 8. Usa propagación para combinar dos objetos en uno nuevo

let persona3 = {
    nombre: 'Laura',
   
};



let userDetails = {...persona3, direccion: {
    ciudad: 'Barcelona',
    pais: 'España'
}}

console.log(userDetails)

// Objetos originales
const usuario4 = {
    nombre: 'Ana',
    edad: 30
  };
  
  const detalles = {
    profesion: 'Ingeniera',
    pais: 'Argentina'
  };
  
  // Combinar objetos usando spread operator
  const usuarioCompleto = { ...usuario4, ...detalles };
  
  console.log(usuarioCompleto);
  // { nombre: 'Ana', edad: 30, profesion: 'Ingeniera', pais: 'Argentina' }

// 9. Usa propagación para crear una copia de un objeto

let copiaUsuario4 = {...usuario4 }
console.log(copiaUsuario4)

// 10. Combina desestructuración y propagación

const numeros1 = [1, 2, 3, 4, 5];

// Desestructurar primeros 2 elementos y guardar el resto
const [primero1, segundo2, ...resto] = numeros1;

console.log(primero1); // 1
console.log(segundo2); // 2
console.log(resto);   // [3, 4, 5]

const usuario5 = {
    nombre: 'Ana',
    edad: 30,
    email: 'ana@example.com',
    pais: 'México'
  };
  
  // Extraer nombre y guardar el resto en 'otrosDatos'
  const { nombre1, ...otrosDatos } = usuario5;
  
  console.log(nombre1);      // 'Ana'
  console.log(otrosDatos);  // {edad: 30, email: 'ana@example.com', pais: 'México'}