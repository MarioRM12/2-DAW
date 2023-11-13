/**
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */


var btnNuevo = document.getElementById("btnNuevo");
var btnPedir = document.getElementById("btnPedir");
var btnDetener = document.getElementById("btnDetener");
var jugadorPuntos = document.querySelector("#jugador h1 small");
var computadoraPuntos = document.querySelector("#computadora h1 small");
var jugadorCartas = document.getElementById("jugador-cartas");
var computadoraCartas = document.getElementById("computadora-cartas");

// Arreglo con las cartas

let cartas = [];

// Cartas numéricas del 2 al 10
for (let i = 2; i <= 10; i++) {
  cartas.push(i + "C", i + "D", i + "H", i + "S");
}

// Cartas con letras (J, Q, K, A)
let letras = ["J", "Q", "K", "A"];
for (let j = 0; j < letras.length; j++) {
  cartas.push(letras[j] + "C", letras[j] + "D", letras[j] + "H", letras[j] + "S");
}

// Función para barajar las cartas
function barajar() {
    cartas = _.shuffle(cartas);
}

// Función para calcular los puntos de un jugador
function calcularPuntos(cartasJugador) {
    // Implementa la lógica para calcular los puntos según las reglas dadas
    // ...

    // Devuelve la cantidad de puntos calculados
    return puntos;
}

// Función para mostrar una carta en el HTML
function mostrarCarta(carta, contenedor) {
    // Implementa la lógica para mostrar la carta en el contenedor
    // ...
}

// Función para iniciar un nuevo juego
function nuevoJuego() {
    // Reinicia las variables y la interfaz gráfica
    // ...
}

// Función para manejar el clic en el botón "Nuevo Juego"
btnNuevo.addEventListener("click", function () {
    nuevoJuego();
});

// Función para manejar el clic en el botón "Pedir carta"
btnPedir.addEventListener("click", function () {
    // Implementa la lógica para pedir una carta
    // ...
});

// Función para manejar el clic en el botón "Detener"
btnDetener.addEventListener("click", function () {
    // Implementa la lógica para detener el juego
    // ...
});