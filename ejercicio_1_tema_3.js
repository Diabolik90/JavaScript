/**
 * Ejercicio 1 tema 3
 * 
 * Enunciado del ejercicio: 
 * En este primer ejercicio tendrás que recorrer los números del 1 al 100 mediante un bucle y que cuando muestre un número par, 
 * muestre por pantalla que el número es par, en otro caso tendrá que mostrar que es impar.
 * Pista: tendréis que hacer un comprobación dentro del bucle.
 */

const max_number = 100;
let pares = new Array();
let impares = new Array();

for (let i = 1; i <= max_number; i++){
    if( i%2===0){
        pares.push(i);
    }else{
        impares.push(i);
    }
}

console.log("Lista de numeros pares: " + pares);
console.log("Lista de numeros impares: " + impares);