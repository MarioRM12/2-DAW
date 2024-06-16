
//Código que se pude utilizar en la función de empezar a jugar (llevarla a funciones.js)



//Variables globales (etiquetas y demás)
const btnPedirCarta = document.getElementById("botonPedirCarta");
const btnEmpezar = document.getElementById("start");
const etqJugando = document.getElementById("jugando");
const etqResultado = document.getElementById("resultado");
const btnCerrar = document.getElementById("botonCerrarSesion");
const btnConsultar = document.getElementById("botonConsultar");
const etqUsuario = document.getElementById("usuario");
const etqPasswd = document.getElementById("passwd");
const etqSaludo = document.getElementById("saludo");

let numeros=[]; // los 90 números
let carton=[];  // los primeros  24
let jugadores=[];

let aciertos = 0, cantidad=0, bolasAcertadas=[];

//Inicialización de bototes
btnCerrar.hidden=true;
btnEmpezar.setAttribute("disabled","true");
btnPedirCarta.setAttribute("disabled","true");



//Configuración de eventos (eventListeners)
btnPedirCarta.addEventListener("click",() => pedirCarta());
btnEmpezar.addEventListener("click", () => empezar());
btnConsultar.addEventListener("click",() => consultarUsuario());
btnCerrar.addEventListener("click", () => cerrarSesion());

//Comprobación localStorage
//  1. Información de jugador (parte 2)
jugador = JSON.parse(localStorage.getItem("jugador"));
if(jugador){
    sesionComenzar(jugador);
}

//  2. Información de partida en juego (parte 3)
let tmpEnJuego=JSON.parse(localStorage.getItem("enJuego"));
if(tmpEnJuego){
    enJuego=tmpEnJuego;
    aciertos=enJuego.aciertos;
    bolasAcertadas=enJuego.bolasAcertadas;
    cantidad=enJuego.cantidad;
    carton=enJuego.carton;
    numeros=enJuego.numeros;
    btnPedirCarta.setAttribute("disabled","true");
    pintarCarta();
    empezar();
}
