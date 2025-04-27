/*
Clase 41 - Ejercicios: Manejo de errores
Vídeo: https://youtu.be/1glVfFxj8a4?t=20392
*/

// 1. Captura una excepción utilizando try-catch
try {
    const resultado = variableNoDefinida + 1;
  } catch (error) {
    console.log('Error capturado:', error.message);
  }
// 2. Captura una excepción utilizando try-catch y finally

try {
    console.log('Intentando ejecutar código');
    throw new Error('Error provocado');
  } catch (error) {
    console.log('Error:', error.message);
  } finally {
    console.log('Este bloque siempre se ejecuta');
  }

// 3. Lanza una excepción genérica
function dividir(a, b) {
    if (b === 0) throw new Error('División por cero no permitida');
    return a / b;
  }
  
  try {
    dividir(5, 0);
  } catch (error) {
    console.log(error.message);
  }
// 4. Crea una excepción personalizada
class MiExcepcionPersonalizada extends Error {
    constructor(mensaje) {
      super(mensaje);
      this.name = 'MiExcepcionPersonalizada';
    }
  }
  
// 5. Lanza una excepción personalizada
try {
    throw new MiExcepcionPersonalizada('Este es un error personalizado');
  } catch (error) {
    console.log(`${error.name}: ${error.message}`);
  }
// 6. Lanza varias excepciones según una lógica definida
function procesarEntrada(valor) {
    if (typeof valor !== 'number') throw new TypeError('Debe ser número');
    if (valor < 0) throw new RangeError('No puede ser negativo');
    if (valor > 100) throw new Error('Valor fuera de rango');
  }
  
  try {
    procesarEntrada(-5);
  } catch (error) {
    console.log(error.message);
  }
  
// 7. Captura varias excepciones en un mismo try-catch

try {
    JSON.parse('{mal formado}');
  } catch (error) {
    if (error instanceof SyntaxError) {
      console.log('Error de sintaxis:', error.message);
    } else if (error instanceof TypeError) {
      console.log('Error de tipo:', error.message);
    } else {
      console.log('Error inesperado:', error.message);
    }
  }

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores

const valores = [1, '2.5', 'hola', { objeto: true }, null, '123abc'];

valores.forEach((valor, indice) => {
  try {
    const numero = parseFloat(valor);
    if (isNaN(numero)) throw new Error(`Valor inválido en posición ${indice}`);
    console.log(`Valor ${valor} convertido: ${numero}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
});

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada

function verificarPropiedad(objeto, propiedad) {
    if (!objeto.hasOwnProperty(propiedad)) {
      throw new MiExcepcionPersonalizada(`Falta la propiedad "${propiedad}"`);
    }
    return true;
  }
  
  try {
    verificarPropiedad({ nombre: 'Juan' }, 'edad');
  } catch (error) {
    console.log(error.message);
  }

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10

function conReintentos(operacion, maxReintentos = 10) {
    let reintentos = 0;
    
    while (reintentos < maxReintentos) {
      try {
        operacion();
        console.log('Éxito en intento', reintentos + 1);
        return;
      } catch (error) {
        reintentos++;
        console.log(`Intento ${reintentos} fallido: ${error.message}`);
      }
    }
    
    throw new Error(`Se agotaron los ${maxReintentos} reintentos`);
  }
  
  // Ejemplo de uso:
  let intentos = 0;
  try {
    conReintentos(() => {
      intentos++;
      if (intentos < 3) throw new Error('Error temporal');
    });
  } catch (error) {
    console.log(error.message);
  }