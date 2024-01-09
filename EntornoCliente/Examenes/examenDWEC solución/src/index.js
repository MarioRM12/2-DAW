//Variables globales
const botonPedirCarta = document.getElementById("botonPedirCarta");
const botonJuego = document.getElementById("start");
const botonConsultar = document.getElementById("botonConsultar");
const botonCerrarSesion = document.getElementById("botonCerrarSesion");
const txtUsuario= document.getElementById("usuario");
const txtPassword = document.getElementById("passwd");
const etqSaludo = document.getElementById("saludo");
const etqBola = document.getElementById("jugando");
const etqResultado = document.getElementById("resultado");

let bolasBingo=[]
let carton=[];

//Inicialización de bototes
function inicializarBotones(){
botonPedirCarta.disabled = true;
botonJuego.disabled = true;
botonCerrarSesion.hidden = true;
botonConsultar.hidden = false;
txtUsuario.hidden = false;
txtPassword.hidden = false;
}

inicializarBotones();


//Configuración de eventos
botonJuego.addEventListener('click', empezarJuego);

botonPedirCarta.addEventListener('click', pedirCarton);

botonConsultar.addEventListener('click', comprobarJugador);

botonCerrarSesion.addEventListener('click', cerrarSesion);

//Comprobación localStorage

//  1. Información de jugador
let ls = localStorage.getItem("Jugador")
if (!!ls) {
    jugador = JSON.parse(ls);
    //console.log("localStorage: " + jugador);
    inicializarJugador(jugador);
}
//  2. Información de partida en juego
let ls_enJuego =localStorage.getItem("enJuego");
if(!!ls_enJuego){
    enJuego = JSON.parse(ls_enJuego);
    carton = enJuego.carton;
    bolasBingo = enJuego.bolas;
    pintarCarton(carton, enJuego.bolasPremiadas);
    empezarJuego(true);
}

