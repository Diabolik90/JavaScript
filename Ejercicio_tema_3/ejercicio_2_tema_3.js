/**
 * Ejercicio 2 tema 3
 * 
 * Enunciado del ejercicio: 
 * En este segundo ejercicio, tendréis que crear un bucle que haga 10 iteraciones y en cada una indique el número de esta. 
 * Las iteraciones 2, 3, 5 y 7 deben imprimir en su lugar "Número primo".
 */

const max_number = 10;


function es_primo(n){
    if( n > 2){
        for(let i = 2; i < n; i++){
            if ( n%i=== 0){
                return false
            }
        }
    }
    return true
}

for(let i = 1; i <= max_number; i++){
    if(es_primo(i)){
        console.log("Número primo")
    }else{
        console.log(i)
    }
}