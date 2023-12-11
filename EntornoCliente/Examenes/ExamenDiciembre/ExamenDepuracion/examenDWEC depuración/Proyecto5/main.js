//Al pulsar el botón, la casilla3 cambia el texto de "Sin pulsar" a "Botón pulsado"

const boton = document.getElementById('pulsame');
const casilla3 = document.getElementById('casilla3');

texto = "Boton pulsado";

function mostrarAviso() {
    casilla3.innerText = texto;
}


boton.addEventListener('click', mostrarAviso);