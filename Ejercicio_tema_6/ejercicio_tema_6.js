/**
 * Ejercicio tema 6
 * 
 * Enunciado del ejercicio: 
 * Crea un archivo JS que contenga las siguientes líneas
 * - Una variable que contenga la lista de la compra (mínimo 5 elementos)
 * - Modifica la lista de la compra y añádele "Aceite de Girasol"
 * - Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
 * - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
 * - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
 * - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
 * - Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
 * - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
 * - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
 */

// Una variable que contenga la lista de la compra (mínimo 5 elementos)
var lista = ['Huevos', 'Pan', 'Mantequilla', 'Marmelada', 'Pasta', 'Tomate']
console.log(lista)
// Modifica la lista de la compra y añádele "Aceite de Girasol"
lista.push("Aceite de Girasol")
console.log(lista)
// Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
lista.pop()
console.log(lista)

// Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
var listaPeliculas = [
    {titulo: 'BraveHeart', director: 'Mel Gibson', fecha: 1995},
    {titulo: 'Rocky', director: 'John G. Avildsen', fecha: 1976},
    {titulo: 'Venom', director: 'Ruben Fleischer', fecha: 2018},
    {titulo: 'La vita è bella', director: 'Roberto Benigni', fecha: 1997}
]

// Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const posteriores = listaPeliculas.filter( obj => {
    if(obj.fecha < 2010){
        return true
    }
})
console.log(posteriores)

// Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const directores = listaPeliculas.map( valor => `${valor.director}`)
console.log(directores)

// Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const titulo = listaPeliculas.map( valor => `${valor.titulo}`)
console.log(titulo)

// Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const directores_titulos = directores.concat(titulo)
console.log(directores_titulos)

// Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const dir_tit = [...directores, ...titulo]
console.log(dir_tit)