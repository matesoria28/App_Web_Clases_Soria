//console.log('hola js') //imprime por consola

//tipado
//const nombre= 'Mateo' //los nombre necesitan ser constantes

// let nombre = 'Mateo'
// nombre = 'Mateo'
// //nombre = 1
// console.log(typeof nombre)

// let EsMayorDeEdad = true


//operadores
//aritmeticos -> + - * / 



//const AumentoEdad = edad + 1

//logicos < > >= <= == !== ===

// //let EsMayorDeEdad = edad>=MayoriaEdad
// console.log(EsMayorDeEdad)

// //estructura de control -> de flujo
// if(edad>=MayoriaEdad){
//     console.log('es mayor')
// }else if(edad === MayoriaEdad){
//     console.log('tiene'+' '+ MayoriaEdad)
// } else{
//     console.log('es menor')
// }


//operaciones actividades

//declaracion de varable
// let edad1 = 20
// let edad2 = 18

// //suma
// let suma = edad1 + edad2
// console.log('la suma de 20 y 18 es = '+suma)

// //resta
// let resta = edad1 - edad2
// console.log('la resta de 20 y 18 es = '+ resta)

// //multiplicacion
// let producto = edad1 * edad2
// console.log('el producto de 20 y 18 es = '+ producto)

// //division
// let division = edad1 / edad2
// console.log('la division de 20 y 18 es = '+ division)

// //resto
// let resto = edad1 % edad2
// console.log('el resto de 20 y 18 es = '+ resto)

// //imprimir un nombre
// const nombre = 'mateo'
// console.log(nombre)

// //imprimir 2 palabras
// console.log("programacion "+ "web")

// //imprimir 3 palabras
// console.log("programacion "+ "web "+"1")

// //estructura de control -> bucle

// for(let i = 0; i < 10; i++){
//     console.log(i)
// }

// //arreglos(array) arranca de 0 siempre
// const numero = [1,2,3,4,5,[1,[1]]]
// const numero2 = [1,2,3,4,5,6]

// console.log(numero[5][1][0])
// numero[2] = 5

// for(let i = 0; i < numero.length; i++){
//     console.log(numero[i])
// }


// //objeto
// const persona = {
//     //propiedad: valor
//     edad: 20,
//     estudia: true,
//     nombre: "mateo",
//     redes:[
//         'intagram',
//         'tiktok',
//         'youtube'
//     ],
//     otros:{
//         pasatiempos: 'pintar',
//         mascotas: 2
//     },
//     caminar: function name(params){
//         //
//     }
// }
// persona.nacionalidad = 'argentina'

// console.log(persona.edad)
// console.log(persona.redes[1])
// console.log(persona.otros.pasatiempos)




//a. mayor o menor de edad
const edad = 20
const MayoriaEdad = 18
 
if(edad >= MayoriaEdad){
    console.log('Es mayor de edad')
}else{
    console.log('Es menor de edad')
}
 
//b. par o impar
const numero = 7
 
//modulo -> si el resto de dividir por 2 es 0 es par
if(numero % 2 === 0){
    console.log('El número es par')
}else{
    console.log('El número es impar')
}
 
//c. nota
const nota = 8
 
if(nota < 4){
    console.log('Reprobado')
}else if(nota <= 7){
    console.log('Aprobado')
}else{
    console.log('Excelente')
}
 
 
//2. estructuras de control -> bucles
 
//a. del 1 al 10
for(let i = 1; i <= 10; i++){
    console.log(i)
}
 
//b. del 10 al 1
for(let i = 10; i >= 1; i--){
    console.log(i)
}
 
//c. par o impar en 20 iteraciones
for(let i = 0; i < 20; i++){
    if(i % 2 === 0){
        console.log('El número es par')
    }else{
        console.log('El número es impar')
    }
}
 
//d. par o impar con template literals
for(let i = 0; i < 20; i++){
    if(i % 2 === 0){
        console.log('El número ' + i + ' es par')
    }else{
        console.log('El número ' + i + ' es impar')
    }
}
