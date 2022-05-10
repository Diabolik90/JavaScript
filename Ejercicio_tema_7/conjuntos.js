/**
 * Ejercicio tema 7
 * 
 * Enunciado del ejercicio: 
 * Crea un archivo llamado conjuntos.js que contenga las siguientes líneas
 * - Un nuevo Set con los nombres de tu familia
 * - Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
 * - Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)
 */

// Un nuevo Set con los nombres de tu familia
 const familia = ['Davide', 'Ilaria', 'Annamaria', 'Antonio']
 const fam_set = new Set(familia)
 console.log(fam_set)
 
 // Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
 fam_set.add('Davide')
 console.log(fam_set)

 // Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)
 fam_set.add("Javascript")
 console.log(fam_set)
