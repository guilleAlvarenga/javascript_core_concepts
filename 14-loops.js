// loops

//for
for(let i = 0; i < 5; i++){
    console.log(`Hola ${i}`)
}

const numbers = [1,2,3,4,5,6,7,8]

for(let i = 0; i < numbers.length; i++){
    console.log(`Elemento: ${numbers[i]}`)
}

//while

let i = 0
while(i<5){
    console.log(`Hola ${i}`)
    i++;
}

//Bucle infinito
//while(true){

//}

//do while

i = 6
do{
    console.log(`Hola ${i}`)
    i++
}while(i<5)

//for of
myArray = [1,2,3,4]

mySet = new Set(["Guille","Alvarenga",26,true])

myMap = new Map([
    ["name","Guille"],
    ["email","guillealvarenga22@gmail.com"],
    ["age",37]
])

myString = "¡Hi Everyone!"

for(let valor of myArray){
    console.log(valor)
}

for(let valor of mySet){
    console.log(valor)
}

for(let valor of myMap){
    console.log(valor)
}

for(let valor of myString){
    console.log(valor)
}

//Buenas practicas

//break y continue

for(let i = 0;i<10;i++){
    if(i==5){
        continue
    }else if(i ==7){
        break
    }

    console.log(`Hola ${i}`)
}
