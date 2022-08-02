let enviar= document.getElementById("enviar");   
let peliBuscar = document.getElementById("buscarPeli");
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

const buscador = document.getElementById('buscador');
const btnBuscar = document.getElementById('buscar');
const resultado = document.getElementById('resultado');
const filtrarPeli = () =>{
    resultado.innerHTML = ``;
    const buscado = buscador.value.toLowerCase() ;
    for(const pelicula of peliculasTodas){
        let nombre = pelicula.nombre.toLowerCase() ;
        if(nombre.indexOf(buscado) !== -1){
            resultado.innerHTML += `<li>${pelicula.nombre}</li>`
        }
    }
    if(resultado.innerHTML == ``){
        resultado.innerHTML += `<li>No se encontro la pelicula</li>`
    }
}

btnBuscar.addEventListener('click', filtrarPeli)
buscador.addEventListener('keyup', filtrarPeli)
filtrarPeli();