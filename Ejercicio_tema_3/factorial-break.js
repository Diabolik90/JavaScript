/**
 * Ejercicio 1 tema 3
 * 
 * Enunciado del ejercicio: 
 * Crea los siguientes archivos JS:
 * - factorial-for.js -> Este archivo debe calcular el factorial de 10 utilizando un solo bucle for
 * - factorial-while.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while
 * - factorial-break.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break
 */

var result = 1
const max = 10
let i = 1
while(true){
    result *= i
    i++
    if(i>=max)
        break
}
console.log(`El resultado es ${result}`)