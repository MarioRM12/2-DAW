// Declaramos las constantes necesarias para el JS
const listadoPeliculas = document.getElementById("listado-peliculas");
const cartelImg = document.getElementById("cartel-img");
const director = document.getElementById("director");
const clasificacion = document.getElementById("clasificacion");
const estrellas = document.getElementById("estrellas");
const BaseURL = "http://localhost:3000";

// Obtener la lista de películas y crear botones para cada una
fetch(BaseURL + "/peliculas")
    .then(resp => resp.json())
    .then(lista => {
        lista.forEach(peli => {
            // Creamos el elemento de boton para cada iteracion del for each
            const botonPelicula = document.createElement("button");
            // Insertamos el nombre de la peli en el elemento nuevo
            botonPelicula.innerText = peli.nombre;
            // Añadimos la clase correspondiente para que se muestre como boton
            botonPelicula.classList.add("btn", "btn-primary", "mb-2");
            // Añadimos el listener para el evento de hacer click en el elemento
            botonPelicula.addEventListener('click', () => {
                // Al hacer click en el boton, invocamos la funcion que va a mostrar toda la informacion de la peli
                buscarPelicula(peli.id);
            });
            // Añadimos el elemento (boton) de la iteracion al div correspondiente del html
            listadoPeliculas.querySelector(".btn-group-vertical").appendChild(botonPelicula);
        });
    })
    .catch( error => {
        // En caso de que no funcione correctamente el fetch, mostramos un error
        alert("Ha habido un problema en la base de datos, intentalo más tarde");
        director.innerText = "Error";
        clasificacion.innerText = "Error";
        cartelImg.src = "assets/gif/error-windows-xp.gif";
        
    });

// Función para cargar la información de la película al hacer clic en un botón
function buscarPelicula(id) {
    
    cartelImg.src = "assets/gif/giphy.gif"; // Mostrar el gif de carga
    director.innerText = "Cargando director..."; // Mostrar el texto de carga de director
    clasificacion.innerText = "Cargando clasificación..."; // Mostrar el texto de carga de clasificacion

    // Utilizando fetchSlow para cargar lentamente la información del director
    fetchSlow(BaseURL + "/pelicula/" + id)
        .then(resp => resp.json())
        .then(pelicula => {
            // Pongo el director correspondiente de la peli en el html
            director.innerText = pelicula.director;
            // Buscamos la clasificacion correspondiente dependiendo del id que tenga de clasificacion
            buscarClasificacion(pelicula.clasificacion);
            // Reseteo las estrellas
            estrellas.innerHTML = "";
            // Hago un bucle para poner las estrellas de valoracion
            for (let index = 0; index < pelicula.valoracion; index++) {
                // Creamos la estrella de la iteracion del bucle
                const estrella = document.createElement("i");
                // Añadimos la clase correspondiente para que se muestre como estrella
                estrella.classList.add("fa","fa-star");
                // Insertamos la estrella en el div de valoracion
                estrellas.append(estrella);
            }
            // Cambiar la imagen del cartel al de la película seleccionada
            cartelImg.src = `assets/imgs/${pelicula.cartel}`;
        });
    };

// Creamos la funcion para buscar el tipo de clasificacion
function buscarClasificacion(clasificacionPeli) {
    fetch(BaseURL + "/clasificaciones/" + clasificacionPeli)
    .then(resp => {
        resp.json().then(clasificacionJson => {
            // Introducimos la clasificacion en el html
            clasificacion.innerText = clasificacionJson.nombre;
        })
    })
}