/**
 * clase para las peliculas
 */
class pelicula{
    constructor (nombre, genero, duracion, precio) {
        this.nombre = nombre;
        this.genero = genero;
        this.duracion = duracion;
        this.precio = precio;
    }
    sumarIva(){
        this.precio *= 1.21;
    }

}
/**
 * array que almacena la peliculas de accion
 */
const peliculasAccion = [
    new pelicula ("memory", "accion", 1.54, 150),
    new pelicula ("morbius", "accion", 1.44, 200),
    new pelicula ("mortal Kombat", "accion", 1.50, 100)
]

for ( const pelicula of peliculasAccion){
    pelicula.sumarIva();
}

/**
 * array que almacena la peliculas de romance
 */
const peliculasRomance =  [
    new pelicula ("your name", "romance", 1.52, 500),
    new pelicula("una voz silenciosa", "romance", 2.09, 350),
    new pelicula("amor de gata", "romance", 1.44, 200)
]

for ( const pelicula of peliculasRomance){
    pelicula.sumarIva();
}

/**
 * array que almacena todas la peliculas
 */
const peliculasTodas = peliculasAccion.concat(peliculasRomance);

/**
 * Comprueba si la pelicula que ingresa el usuario esta en el array @peliculasTodas
 */
function buscarPeli(){
    let peliBuscar = prompt("que pelicula buscas: ")
    for(const pelicula of peliculasTodas){
        if(pelicula.nombre == peliBuscar){
            console.log("El nombre de la pelicula que buscas es: " + pelicula.nombre)
            console.log("El genero de la pelicula que buscas es: " + pelicula.genero)
            console.log("La duracion de la pelicula que buscas es de: " + pelicula.duracion)
            console.log("El precio de la pelicula que buscas es de : " + pelicula.precio)
        } 
    }
    alert("Puedes ver el resultado en la consola")
}

/**
 *  Pregunta al usuario si quiere busca una pelicula o no si la repuesta es no muestra el catalogo de peliculas en la consola y si es si retorna la funcion buscarPeli
 * @returns la funcion buscarPeli
 */
function buscarSioNo(){
let buscar = prompt("quieres buscar un pelicula si o no: ")
if (buscar == "si") {
    return buscarPeli();
}else{
    alert("En consola puedes ver todo nuestro catalago de peliculas con su duracion y genero")
    console.log(peliculasTodas)
}
}

buscarSioNo()