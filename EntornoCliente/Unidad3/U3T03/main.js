const etqlista = document.getElementById("listado-peliculas");

const BaseURL = "http://localhost:3000";

fetch(BaseURL+"/peliculas")
    .then(resp => {
        resp.json().then(lista => {
            lista.forEach(peli => {
                etqli = document.createElement("li");
                etqli.innerText = peli.nombre;
                etqli.addEventListener('click', () => {
                    buscarPelicula(peli.id);
                })
                etqlista.append(etqli);
            });
        });
    });