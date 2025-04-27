// Objects

//Sintaxis

let person = {
    name: "Guille",
    age: 26,
    alias: "guilledev"
}

//Acceso a propiedades

//Notacion punto
console.log(person.name)

//Notacion de corchetes
console.log(person["name"])

//Modificacion

person.name = "Juan"
console.log(person.name)

console.log(typeof person.age)
person.age = "26"
console.log(person.age)
console.log(typeof person.age)

//Eliminacion de propiedades

delete person.age

console.log(person)

person.email = "guillealvarenga22@gmail.com"
console.log(person)
person["age"] = 26

console.log(person)

//Metodos (funciones)

let person2 = {
    name: "Guille",
    age: 26,
    alias: "guilledev",
    walk: function(){
        console.log("La persona camina")
    }
}

person2.walk()

//Anidacion de objetos

let person3 = {
    name: "Guille",
    age: 26,
    alias: "guilledev",
    walk: function(){
        console.log("La persona camina")
    },
    job: {
        name: "Backend Developer",
        exp: 20,
        work: function(){
            console.log(`La persona de ${this.exp} de experiencia trabaja.`)
        }
    }
}

console.log(person3)

console.log(person3.name)
console.log(person3.job)
console.log(person3.job.name)

person3.job.work()

//Igualdad de objetos

let person4 = {
    name: "Juan",
    alias: "guilledev",
    email: "guillealvarenga22@gmail.com",
    age: 26
}

console.log(person)
console.log(person4)

console.log(person == person4)
console.log(person === person4)

console.log(person.name == person4.name)

//Iteracion

for(let key in person3){
    console.log(key + ": "+person3[key])
}

for(let key in person4){
    console.log(key + ": "+person4[key])
}

//Funciones como objects

function Person(name, age){//Deberia ser una clase
    this.name = name
    this.age = age
}

let person5 = new Person("Brais", 37)
console.log(person5)
console.log(person5.name)

console.log(typeof person5)
console.log(typeof person4)