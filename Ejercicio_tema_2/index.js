/**
 * Ejercicio tema 2
 * 
 * Enunciado del ejercicio: 
 * Crea un nuevo archivo JS que contenga una lista con los siguientes elementos:
 * - Tu nombre (string)
 * - Tu edad (number)
 * - ¿Eres desarrollador? (boolean)
 * - Tu fecha de nacimiento (Date)
 * - Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url)
 */

const perfil = {
    nombre: "Davide",
    edad: 31,
    isDeveloper: true,
    nacimiento: new Date(1990,9,20,),
    libros_favoritos: [
        {titulo: 'Las Aventuras De Sherlock Holmes', author: 'Conan Doyle', fecha: 1892, url: 'https://www.amazon.es/aventuras-Sherlock-Holmes-Cl%C3%A1sicos-Libros-Selecci%C3%B3n/dp/8466705694'},
        {titulo: 'Educazione siberiana', author: 'Nicolai Lilin', fecha: 2009, url: 'https://www.casadellibro.com/libro-educazione-siberiana/9788806195526/1692957'},
        {titulo: 'Dracula', author: 'Bram Stoker', fecha: 1897, url: 'https://www.amazon.es/dracula-bram-stoker-Libros/s?k=dracula+bram+stoker&rh=n%3A599364031'},
    ]
}

console.log(perfil)

