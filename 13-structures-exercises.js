/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales
let animales = ['Perro', 'Gato', 'León', 'Tigre', 'Elefante'];
console.log('1. Array inicial:', animales);

// 2. Añade dos más. Uno al principio y otro al final

animales.unshift('Ardilla');
animales.push('Ballena');
console.log('2. Después de añadir:', animales);

// 3. Elimina el que se encuentra en tercera posición

animales.splice(2, 1); // Elimina 1 elemento en índice 2
console.log('3. Después de eliminar posición 3:', animales);

// 4. Crea un set que almacene cinco libros
let libros = new Set(['Cien años de soledad', '1984', 'El señor de los anillos', 'Orgullo y prejuicio', 'Don Quijote']);
console.log('4. Set inicial:', libros);

// 5. Añade dos más. Uno de ellos repetido
libros.add('El principito');
libros.add('1984'); // Este no se añadirá por ser duplicado
console.log('5. Después de añadir libros:', libros);

// 6. Elimina uno concreto a tu elección
libros.delete('Orgullo y prejuicio');
console.log('6. Después de eliminar libro:', libros);

// 7. Crea un mapa que asocie el número del mes a su nombre
let meses = new Map();
meses.set(1, 'Enero');
meses.set(2, 'Febrero');
meses.set(3, 'Marzo');
meses.set(4, 'Abril');
meses.set(5, 'Mayo');
meses.set(6, 'Junio');
meses.set(7, 'Julio');
meses.set(8, 'Agosto');
meses.set(9, 'Septiembre');
meses.set(10, 'Octubre');
meses.set(11, 'Noviembre');
meses.set(12, 'Diciembre');
console.log('7. Mapa de meses:', meses);

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
if (meses.has(5)) {
    console.log('8. El mes 5 es:', meses.get(5));
  }

// 9. Añade al mapa una clave con un array que almacene los meses de verano
meses.set('verano', ['Junio', 'Julio', 'Agosto']);
console.log('9. Mapa con meses de verano:', meses.get('verano'));

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let miArray = [1, 2, 3, 4, 5];
let miSet = new Set(miArray);
let miMap = new Map();
miMap.set('miSet', miSet);
console.log('10. Map con Set:', miMap.get('miSet'));
