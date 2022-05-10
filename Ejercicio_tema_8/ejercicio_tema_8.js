/**
 * Ejercicio tema 5
 * 
 * Enunciado del ejercicio: 
 * Crea un archivo JS que contenga las siguientes líneas
 * - Una función sin parámetros que devuelva siempre "true"
 * - Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
 * - Una función generadora de índices pares automáticos
 */

// Una función sin parámetros que devuelva siempre "true"
function siempreTrue(){
    return true
}

console.log(siempreTrue())


// Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado

function Espera5Segundos() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Hola soy una promesa');
        }, 5000);
    });
}

async function asyncFunc() {
    console.log(`Empieza al segundo ${new Date().getSeconds()}`)
    const result = await Espera5Segundos();
    console.log(`${result}. Acaba al segundo ${new Date().getSeconds()}`);
}

asyncFunc();


// Una función generadora de índices pares automáticos

function* generaPares(){
    let id = 0;
    while(true){
        id+=2
        yield id
    }
}
const pares = generaPares()
console.log(pares.next().value)
console.log(pares.next().value)
console.log(pares.next().value)