//Classes

class Person {
    constructor(name, age, alias){
        this.name = name
        this.age = age
        this.alias = alias
    }
}

//Sintaxis

let person = new Person("Guille",26,"guilledev")
let person2 = new Person("Guille",26,"guilledev")
console.log(person)
console.log(person2)

console.log(typeof person)

//Valores por defecto

class DefaultPerson{
    constructor(name = "Sin nombre", age = 0, alias = "Sin alias"){
        this.name = name
        this.age = age
        this.alias = alias
    }
}

let person3 = new DefaultPerson("Juan",26)

console.log(person3)

//Acceso a propiedades

console.log(person3.alias)
console.log(person3["alias"])

person3.alias = "GuilleDev"

console.log(person3.alias)

//Funciones en classes

class PersonWithMethod{
    constructor(name, age, alias){
        this.name = name
        this.age = age
        this.alias = alias
    }
    walk(){
        console.log("La persona esta caminando")
    }
}


let person4 = new PersonWithMethod("Guille",26,"GuilleDev")
person4.walk()

//Propiedades privadas

class PrivatePerson{
    #bank
    constructor(name, age, alias, bank){
        this.name = name
        this.age = age
        this.alias = alias
        this.#bank = bank
    }
    pay(){
        this.#bank
    }
}

let person5 = new PrivatePerson("Guille", 26,"GuilleDev","IBAN74463848")
//No podemos acceder
// console.log(person5.#bank) 
//console.log(person5.newBank)
// person5.newBank = "498dfhhvdshfe" bank no es #bank

console.log(person5)

//getters and setters


class GetSetPerson {

    #name
    #age
    #alias
    #bank

    constructor(name, age, alias, bank) {
        this.#name = name
        this.#age = age
        this.#alias = alias
        this.#bank = bank
    }

    get name() {
        return this.#name
    }

    set bank(bank) {
        this.#bank = bank
    }

}

person6 = new GetSetPerson("Brais", 37, "MoureDev", "IBAN123456789")

console.log(person6)
console.log(person6.name)

person6.bank = "new IBAN123456789"

console.log(person6.bank)

//Herencia

class Animal{
    constructor(name){
        this.name = name
    }

    sound(){
        console.log("El animal emite un sonido generico")
    }
}

class Dog extends Animal{

    sound(){
        console.log("El perro ladra")

    }
    run(){
        console.log("El perro corre")
    }

}

class Fish extends Animal{
    constructor(name, size){
        super(name)
        this.size = size
    }

    swim(){
        console.log("El pez nada")
    }
}

let myDog = new Dog("GuilleDev")
myDog.run()
myDog.sound()

let myFish = new Fish("JuanDev",13)
myFish.swim()
myFish.sound()

//Metodos estaticos

class MathOperations{
    static sum(a,b){
        return a + b
    }
}

console.log(MathOperations.sum(3,5))
