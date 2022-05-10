/**
 * Ejercicio tema 5
 * 
 * Enunciado del ejercicio: 
 * Crea un archivo JS que contenga las siguientes líneas
 * - Una variable que contenga tu altura en centímetros (entero)
 * - Una variable que contenga tu altura en metros (número de coma flotante)
 * - Una variable que contenga tu peso en kilogramos (número de coma flotante)
 * - Una variable que contenga tu altura en metros redondeada hacia arriba
 * - Una variable que contenga tu peso en kilogramos redondeado hacia abajo
 * - Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript
 */

// Una variable que contenga tu altura en centímetros (entero)
var altura_i = 186

// Una variable que contenga tu altura en metros (número de coma flotante)
var altura_f = 1.86

// Una variable que contenga tu peso en kilogramos (número de coma flotante)
var peso = 71.5

// Una variable que contenga tu altura en metros redondeada hacia arriba
var altura_round_max = Math.round(altura_f)
console.log(altura_round_max)

// Una variable que contenga tu peso en kilogramos redondeado hacia abajo
var peso_round_min = parseInt(peso)
console.log(peso_round_min)

// Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript
var max_valor = `El máximo valor que se puede obtener en Javascript es ${Number.MAX_VALUE}`
console.log(max_valor)