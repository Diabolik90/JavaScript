/**
 * Ejercicio tema 7
 * 
 * Enunciado del ejercicio: 
 * Crea un archivo llamado fechas.js que contenga las siguientes líneas
 * - La fecha de hoy
 * - La fecha de tu nacimiento
 * - Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
 * - Una variable que contenga el día de tu nacimiento
 * - Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
 * - Una variable que contenga el año de tu nacimiento (con 4 dígitos)
 */

// La fecha de hoy
const hoy = new Date()
console.log(hoy)

// La fecha de tu nacimiento
const my_bir = new Date(1990,9,20)
console.log(my_bir)

// Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
const masTarde = hoy.getTime() > my_bir.getTime()
console.log(masTarde)

// Una variable que contenga el día de tu nacimiento
const dia = my_bir.getDate()
console.log(dia)

// Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
const mes = my_bir.getMonth() + 1
console.log(mes)

// Una variable que contenga el año de tu nacimiento (con 4 dígitos)
const anyo = my_bir.getFullYear()
console.log(anyo)