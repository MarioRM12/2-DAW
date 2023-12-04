const etqlista = document.getElementById("listado-peliculas");
const cartelImg = document.getElementById("cartel-img");
const director = document.getElementById("director");
const clasificacion = document.getElementById("clasificacion");
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
    const cartelImg = document.getElementById("cartel-img");
    cartelImg.src = "assets/gif/giphy.gif"; // Mostrar el gif de carga

    fetch(BaseURL + "/pelicula/" + id)
        .then(resp => resp.json())
        .then(pelicula => {
            director.innerText = "Cargando director...";
            clasificacion.innerText = "Cargando clasificación...";
            
            // Utilizando fetchSlow para cargar lentamente la información del director
            fetchSlow(BaseURL + "/pelicula/" + id)
                .then(resp => resp.text())
                .then(info => {
                    document.getElementById("director").innerText = info.director;
                    document.getElementById("clasificacion").innerText = pelicula.clasificacion;
                    // Cambiar la imagen del cartel al de la película seleccionada
                    cartelImg.src = `assets/imgs/${pelicula.cartel}`;
                });
        });
}




