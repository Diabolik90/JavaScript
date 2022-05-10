/**
 * Ejercicio tema 7
 * 
 * Enunciado del ejercicio: 
 * Crea un archivo llamado objetos.js que contenga las siguientes líneas
 * - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
 * - Una variable que obtenga tu edad a partir del objeto anterior
 * - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
 * - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
 */

// Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
const perfil = {
    nombre: 'Davide',
    apellido: 'Fragnito',
    edad: 31,
    altura: 1.86,
    eresDesarrollador: true
}

// Una variable que obtenga tu edad a partir del objeto anterior
const edad = perfil["edad"]
console.log(edad)

// Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
const lista = [{...perfil}, 
    {nombre: 'Maria', apellido: 'Purjader Pardo', edad: 26, altura: 1.68, eresDesarrollador: false},
    {nombre: 'Yacob', apellido: 'Tyara', edad: 27, altura: 1.75, eresDesarrollador: false},
    {nombre: 'Filippo', apellido: 'Mancini', edad: 33, altura: 1.73, eresDesarrollador: false}
]
console.log(lista)

// Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
const order_list = lista.sort( (a,b) => a.edad - b.edad)
console.log(order_list)