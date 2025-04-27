//Operadores
 
//Operdores Aritmeticos

let a = 5

let b = 10

console.log(5+10)//suma
console.log(5-10)//resta
console.log(5*10)//multiplicacion
console.log(5/10)//division

console.log(a % b) //Modulo
console.log(a ** b) //Exponente

//Incremento
a++
console.log(a)

//Decremento
b--
console.log(b)

//Operadores de asignacion

let myVariable = 2
console.log(myVariable)

myVariable += 2
console.log(myVariable)

myVariable -= 2
myVariable *= 2
myVariable /= 2
myVariable **= 2

//Operadores de comparacion

console.log(a > b)
console.log(a<b)
console.log(a>=b)
console.log(a<=b)
console.log(a==b)
console.log(a==6) //Igualdad por valor
console.log(a=="6") //Igualdad por valor
console.log(a==a)
console.log(a === a) //Igualdad por identidad (por tipo y valor)
console.log(a === 6) 
console.log(a === "6")
console.log(a != 6)
console.log(a !== "6")
console.log(0==false)
console.log(1==false)
console.log(2==false)
console.log(0=="")
console.log(0==" ")
console.log(0=='')
console.log(0=="Hola")
console.log(0==="")
console.log(undefined == null)
console.log(undefined === null)

// Truthy values (valores verdaderos)

//Todos los numeros positivos y negativos menos el cero
//Todas las cadenas de texto menos las vacias
//El boolean true

//Falsy values (valores falsos)

// 0
// 0n
// null
// undefined
// Nan
// El boolean false
// Cadenas de texto vacias

// Operadores logicos

// and (&&)
console.log(5>10 && 15 > 20)
console.log(5<10 && 15 < 20)
console.log(5<10 && 15 > 20)
console.log(5>10 && 15 > 20 && 30 > 40)

//or (||)
console.log(5>10 || 15 > 20)
console.log(5<10 || 15 < 20)
console.log(5>10 || 15 > 20)
console.log(5>10 || 15 > 20 || 30 > 40)

console.log(5 > 10 && 15 > 20 || 30 < 40)

//not (!)
console.log(!false)
console.log(!true)
console.log(!(5 > 10 && 15 > 20))
console.log(!(5 > 10 || 15 > 20))

// Operadores ternarios

const isRaining = false

isRaining ? console.log("Esta lloviendo") : console.log("No esta lloviendo")