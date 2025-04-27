/*
Clase 39 - Ejercicios: Clases
Vídeo: https://youtu.be/1glVfFxj8a4?t=18630
*/

// 1. Crea una clase que reciba dos propiedades

class Person{

    constructor(name, age){
        this.name = name
        this.age = age
    }

    mostrarDetalles(){
        return `Nombre: ${this.name}, Age: ${this.age * 2} `
    }

    static crearInstanciaDefault(){
        return new Person("UserDefault",0)
    }

}

let person = new Person("Guille",26)
console.log(person)

// 2. Añade un método a la clase que utilice las propiedades



// 3. Muestra los valores de las propiedades e invoca a la función

console.log(person.name)
console.log(person.age)
console.log(person.mostrarDetalles())

// 4. Añade un método estático a la primera clase

// 5. Haz uso del método estático

// Crear instancia usando método estático
let ejemplo =  Person.crearInstanciaDefault()
console.log(ejemplo.mostrarDetalles())


// 6. Crea una clase que haga uso de herencia


// Clase base (superclase)
class Animal {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
  
    // Método de instancia
    describir() {
      return `${this.nombre} tiene ${this.edad} años`;
    }
  
    // Método estático
    static tipo() {
      return "Ser vivo del reino animal";
    }
  }
  
  // Clase derivada (subclase)
  class Perro extends Animal {
    constructor(nombre, edad, raza) {
      super(nombre, edad); // Llama al constructor de la clase base
      this.raza = raza;
    }
  
    // Método específico de Perro
    ladrar() {
      return "¡Guau!";
    }
  
    // Sobreescritura de método
    describir() {
      return `${super.describir()} y es de raza ${this.raza}`;
    }
  }
  
  // Uso de las clases
  const miAnimal = new Animal("Genérico", 3);
  console.log(miAnimal.describir()); // "Genérico tiene 3 años"
  console.log(Animal.tipo());        // "Ser vivo del reino animal"
  
  const miPerro = new Perro("Buddy", 5, "Labrador");
  console.log(miPerro.describir());  // "Buddy tiene 5 años y es de raza Labrador"
  console.log(miPerro.ladrar());     // "¡Guau!"
  console.log(Perro.tipo());         // "Ser vivo del reino animal" (heredado)

// 7. Crea una clase que haga uso de getters y setters

class Usuario {
    constructor(nombre, edad) {
      this._nombre = nombre; // Convención para propiedad "privada"
      this._edad = edad;
    }
  
    // Getter para nombre (solo lectura)
    get nombre() {
      return this._nombre.toUpperCase();
    }
  
    // Setter para nombre con validación
    set nombre(nuevoNombre) {
      if (typeof nuevoNombre === 'string' && nuevoNombre.trim().length > 0) {
        this._nombre = nuevoNombre.trim();
      } else {
        throw new Error('Nombre inválido');
      }
    }
  
    // Getter para edad
    get edad() {
      return this._edad;
    }
  
    // Setter para edad con validación
    set edad(nuevaEdad) {
      if (typeof nuevaEdad === 'number' && nuevaEdad >= 0 && nuevaEdad <= 120) {
        this._edad = Math.floor(nuevaEdad);
      } else {
        throw new Error('Edad inválida (debe ser entre 0 y 120)');
      }
    }
  
    // Método que usa los getters
    obtenerInformacion() {
      return `${this.nombre} - ${this.edad} años`;
    }
  }
  
  // Ejemplo de uso
  const usuario1 = new Usuario(' Ana ', 25);
  
  console.log(usuario1.obtenerInformacion()); // "ANA - 25 años"
  
  // Usando setters
  usuario1.nombre = '  Carlos  '; // El setter limpia espacios
  usuario1.edad = 30.7; // El setter convierte a 30
  
  console.log(usuario1.obtenerInformacion()); // "CARLOS - 30 años"
  
  // Intento de asignación inválida
  try {
    usuario1.edad = -5;
  } catch (error) {
    console.log(error.message); // "Edad inválida (debe ser entre 0 y 120)"
  }

// 8. Modifica la clase con getters y setters para que use propiedades privadas

class Usuario2 {
    // Propiedades privadas
    #nombre;
    #edad;
  
    constructor(nombre, edad) {
      this.nombre = nombre; // Usa el setter para validación inicial
      this.edad = edad;     // Usa el setter para validación inicial
    }
  
    // Getter para nombre
    get nombre() {
      return this.#nombre.toUpperCase();
    }
  
    // Setter para nombre con validación
    set nombre(nuevoNombre) {
      if (typeof nuevoNombre === 'string' && nuevoNombre.trim().length > 0) {
        this.#nombre = nuevoNombre.trim();
      } else {
        throw new Error('Nombre inválido: debe ser un texto no vacío');
      }
    }
  
    // Getter para edad
    get edad() {
      return this.#edad;
    }
  
    // Setter para edad con validación
    set edad(nuevaEdad) {
      if (typeof nuevaEdad === 'number' && nuevaEdad >= 0 && nuevaEdad <= 120) {
        this.#edad = Math.floor(nuevaEdad);
      } else {
        throw new Error('Edad inválida: debe ser número entre 0 y 120');
      }
    }
  
    // Método que usa los getters
    obtenerInformacion() {
      return `${this.nombre} (${this.edad} años)`;
    }
  
    // Método estático
    static getInfoClase() {
      return "Clase para manejar usuarios con propiedades privadas";
    }
  }
  
  // Ejemplo de uso
  const usuario2 = new Usuario2(' Ana ', 25.7);
  
  console.log(usuario2.obtenerInformacion()); // "ANA (25 años)"
  console.log(usuario2.nombre); // "ANA" (usa el getter)
  console.log(usuario2.edad);   // 25 (usa el getter)
  
  // Modificando valores mediante setters
  usuario2.nombre = `Guille Alvarenga`;
  usuario2.edad = 30.9;
  
  console.log(usuario2.obtenerInformacion()); // "CARLOS PÉREZ (30 años)"
  
  // Intento de asignaciones inválidas
  try {
    usuario2.nombre = 123;
  } catch (error) {
    console.log(error.message); // "Nombre inválido..."
  }
  
  try {
    usuario2.edad = -5;
  } catch (error) {
    console.log(error.message); // "Edad inválida..."
  }
  
  // Acceso a método estático
  console.log(Usuario2.getInfoClase()); // "Clase para manejar usuarios..."

// 9. Utiliza los get y set y muestra sus valores

class Producto {
    #nombre;
    #precio;

    constructor(nombre, precio) {
        this.nombre = nombre; // Usa el setter
        this.precio = precio; // Usa el setter
    }

    // Getter para nombre
    get nombre() {
        return this.#nombre;
    }

    // Setter para nombre
    set nombre(nuevoNombre) {
        if (typeof nuevoNombre === 'string' && nuevoNombre.trim().length >= 3) {
            this.#nombre = nuevoNombre.trim();
        } else {
            throw new Error('El nombre debe tener al menos 3 caracteres');
        }
    }

    // Getter para precio
    get precio() {
        return `$${this.#precio.toFixed(2)}`;
    }

    // Setter para precio
    set precio(nuevoPrecio) {
        if (typeof nuevoPrecio === 'number' && nuevoPrecio > 0) {
            this.#precio = nuevoPrecio;
        } else {
            throw new Error('El precio debe ser un número positivo');
        }
    }

    // Método que usa los getters
    mostrarDetalles() {
        return `${this.nombre} - ${this.precio}`;
    }
}

// Creación de instancia
const miProducto = new Producto('  Laptop Gamer  ', 1599.99);

// Mostrar valores usando getters
console.log('--- Valores iniciales ---');
console.log(miProducto.nombre);    // "Laptop Gamer" (sin espacios, por el setter)
console.log(miProducto.precio);    // "$1599.99"
console.log(miProducto.mostrarDetalles()); // "Laptop Gamer - $1599.99"

// Modificar valores usando setters
console.log('\n--- Después de modificaciones ---');
miProducto.nombre = '   Teclado Mecánico RGB   ';
miProducto.precio = 89.95;

console.log(miProducto.nombre);    // "Teclado Mecánico RGB"
console.log(miProducto.precio);    // "$89.95"
console.log(miProducto.mostrarDetalles()); // "Teclado Mecánico RGB - $89.95"

// Intentar acceder directamente a propiedades privadas
try {
    console.log(miProducto.nombre); // Error de sintaxis
} catch (e) {
    console.log('\n--- Intento de acceso ilegal ---');
    console.log('Error:', e.message); // Private field '#nombre' must be declared...
}

// Probar validaciones de setters
console.log('\n--- Validaciones ---');
try {
    miProducto.nombre = 'a'; // Nombre muy corto
} catch (e) {
    console.log('Error en nombre:', e.message);
}

try {
    miProducto.precio = -20; // Precio negativo
} catch (e) {
    console.log('Error en precio:', e.message);
}

// 10. Sobrescribe un método de una clase que utilice herencia 

class Animal2 {
    constructor(nombre) {
      this.nombre = nombre;
    }
  
    // Método que será sobrescrito
    emitirSonido() {
      return "Sonido genérico de animal";
    }
  
    // Método que será heredado y usado
    presentarse() {
      return `Soy ${this.nombre}`;
    }
  }
  
  class Gato extends Animal2 {
    constructor(nombre, vidas = 7) {
      super(nombre);
      this.vidas = vidas;
    }
  
    // Sobrescritura del método
    emitirSonido() {
      // Accediendo al método de la clase padre con super
      const presentacion = super.presentarse();
      return `${presentacion}: ¡Miau! 🐾 (Tengo ${this.vidas} vidas)`;
    }
  
    // Nuevo método específico
    usarVida() {
      this.vidas = Math.max(0, this.vidas - 1);
      return this.vidas > 0 
        ? `¡Ups! Quedan ${this.vidas} vidas` 
        : "😿 ¡Sin vidas restantes!";
    }
  }
  
  // Uso de las clases
  const animalGenerico = new Animal2("Animal");
  console.log(animalGenerico.emitirSonido()); // "Sonido genérico de animal"
  
  const miGato = new Gato("Luna", 9);
  console.log(miGato.emitirSonido()); 
  // "Soy Luna: ¡Miau! 🐾 (Tengo 9 vidas)"
  
  // Interactuando con el nuevo método
  console.log(miGato.usarVida()); // "¡Ups! Quedan 8 vidas"
  console.log(miGato.emitirSonido()); 
  // "Soy Luna: ¡Miau! 🐾 (Tengo 8 vidas)"