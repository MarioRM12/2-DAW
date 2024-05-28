//Variables globales (etiquetas y demás)
const botonEmpezar = document.getElementById("start");
const botonPedirCarta = document.getElementById("botonPedirCarta");

//Configuración de eventos (eventListeners)
botonEmpezar.addEventListener("click", generarCarton);
botonPedirCarta.addEventListener("click", sacarBola)

//Comprobación localStorage
//  1. Información de jugador (parte 2)

//  2. Información de partida en juego (parte 3)