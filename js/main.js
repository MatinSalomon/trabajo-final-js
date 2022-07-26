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

const peliculasAccion = [
    new pelicula ("memory", "accion", 1.54, 150),
    new pelicula ("morbius", "accion", 1.44, 200),
    new pelicula ("mortal Kombat", "accion", 1.50, 100)
]

for ( const pelicula of peliculasAccion){
    pelicula.sumarIva();
}

const peliculasRomance =  [
    new pelicula ("your name", "romance", 1.52, 500),
    new pelicula("una voz silenciosa", "romance", 2.09, 350),
    new pelicula("amor de gata", "romance", 1.44, 200)
]

for ( const pelicula of peliculasRomance){
    pelicula.sumarIva();
}

const peliculasTodas = peliculasAccion.concat(peliculasRomance);

function buscarPeli(){
    let peliBuscar = prompt("que pelicula buscas: ")
    for(const pelicula of peliculasTodas){
        if(pelicula.nombre == peliBuscar){
            console.log("El nombre de la pelicula que buscas es: " + pelicula.nombre)
            console.log("El genero de la pelicula que buscas es: " + pelicula.genero)
            console.log("La duracion de la pelicula que buscas es de: " + pelicula.duracion)
            console.log("El precio de la pelicula que buscas es de : " + pelicula.precio)
            break
        }else if (pelicula.nombre != peliBuscar){
            console.log("lo siento no tenemos esa pelicula")
        }
    }
}

function buscarSioNo(){
let buscar = prompt("quieres buscar un pelicula si o no: ")

if (buscar == "si") {
    buscarPeli();
} else {
    for(const pelicula of peliculasTodas){
        console.log("El nombre de la pelicula que buscas es: " + pelicula.nombre)
    }
}
alert("En consola puedes ver todo nuestro catalago de peliculas")
}


buscarSioNo()