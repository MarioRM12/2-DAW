const etqlista = document.getElementById("listado-peliculas");
const cartelImg = document.getElementById("cartel-img");
const director = document.getElementById("director");
const clasificacion = document.getElementById("clasificacion");
const estrellas = document.getElementById("estrellas");
const BaseURL = "http://localhost:3000";

// Obtener la lista de películas y crear botones para cada una
fetch(BaseURL + "/peliculas")
    .then(resp => resp.json())
    .then(lista => {
        const listadoPeliculas = document.getElementById("listado-peliculas");
        lista.forEach(peli => {
            const botonPelicula = document.createElement("button");
            botonPelicula.innerText = peli.nombre;
            botonPelicula.classList.add("btn", "btn-primary", "mb-2");
            botonPelicula.addEventListener('click', () => {
                buscarPelicula(peli.id);
            });
            listadoPeliculas.querySelector(".btn-group-vertical").appendChild(botonPelicula);
        });
    });

// Función para cargar la información de la película al hacer clic en un botón
function buscarPelicula(id) {
    
    cartelImg.src = "assets/gif/giphy.gif"; // Mostrar el gif de carga
    director.innerText = "Cargando director...";
    clasificacion.innerText = "Cargando clasificación...";

    // Utilizando fetchSlow para cargar lentamente la información del director
    fetchSlow(BaseURL + "/pelicula/" + id)
        .then(resp => resp.json())
        .then(pelicula => {
            director.innerText = pelicula.director;
            buscarClasificacion(pelicula.clasificacion);
            estrellas.innerHTML = "";
            for (let index = 0; index < pelicula.valoracion; index++) {
                const estrella = document.createElement("i");

                estrella.classList.add("fa");
                estrella.classList.add("fa-star");

                estrellas.append(estrella);
               
            }
            // Cambiar la imagen del cartel al de la película seleccionada
            cartelImg.src = `assets/imgs/${pelicula.cartel}`;
        });
    };

function buscarClasificacion(clasificacionPeli) {
    fetch(BaseURL + "/clasificaciones/" + clasificacionPeli)
    .then(resp => {
        resp.json().then(clasificacionJson => {
            clasificacion.innerText = clasificacionJson.nombre;
        })
    })
}