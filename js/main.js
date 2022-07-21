const peliculasAccion = ["Memory", "Morbius", "Nadie", "Mortal Kombat"];
const peliculasRomance = ["La ciudad perdida", "Emma", "your name", "una voz silencionsa", "amor de gata"];
const peliculasTodas = peliculasAccion.concat(peliculasRomance);

function Buscador(){
    let nombrePelicula = prompt("ingrese el nombre de la pelicula que quiere ver: ")
    for(let i = 0; i <= peliculasTodas.length; i++){
        if(peliculasTodas[i] == nombrePelicula){
            alert(peliculasTodas[i])
           break 
        }else if(peliculasTodas[i] != nombrePelicula){
            alert("no encontre tu peli")
            break
        }  
     }
    
 }
 Buscador();