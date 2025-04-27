//Excepcion

//Produce uan excepcion
let myObject
//console.log(myObject.email)

//Tratamiento de errores

//try-catch

try{
    console.log(myObject)
    console.log("Finaliza la execucion sin errores")
}catch{
    console.log("Se ha producido un error")

}

//Captura del error
try{
    console.log(myObject.email)

}catch(error){
    console.log("Se ha producido un error", error.message)

}


//finally
try{
    console.log(myObject)

}catch(error){
    console.log("Se ha producido un error", error.message)

}finally{
    console.log("Este codigo se ejecuta siempre")
}

//Lanzamiento de errores
//throw

//throw new Error("Se ha producido un error")
function sumIntegers(a,b){
    if(typeof a !== "number" || typeof b !== "number"){
        throw new TypeError("Esta operacion solo suma numeros")
    }
    if(!Number.isInteger(a) || !Number.isInteger(b)){
        throw new Error("Esta operacion solo suma numeros enteros")
    }
    if(a == 0 || b == 0){
        throw new SumaZeroIntegerError("Se esta intentando sumar cero",a,b)
    }
    return a + b
}

try{
    console.log(sumIntegers(5,10))
    console.log(sumIntegers("5",10))
}catch(error){
    console.log("Se ha producido un error:", error.message)
}

try{
    //console.log(sumIntegers(5,10))
    console.log(sumIntegers("5",10))
}catch(error){
if(error instanceof TypeError){
    console.log("Se ha producido un error de tipo:", error.message)
}else if(error instanceof Error){
    console.log("Se ha producido un error:", error.message)
}
}

//Crear excepciones personalizadas

class SumaZeroIntegerError extends Error{
    constructor(message,a,b){
        super(message)
        this.a = a
        this.b = b
    }

    printNumbers(){
        console.log(this.a," + ",this.b)
    }
}

try{
    console.log(sumIntegers(0,10))
}catch(error){
    console.log("Se ha producido un error personalizado:",error.message)
    error.printNumbers()
}
