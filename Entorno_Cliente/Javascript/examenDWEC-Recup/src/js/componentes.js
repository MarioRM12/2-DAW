
let cartas=[];
let ordenValores = ['A','2','3','4','5','6','7','8','9','J','Q','K'];
//Generar cartas, barajarlas y seleccionar la 12 a usar.

//Variables
let juegosAcabados = 0;
let estado = 0; /* 0=elegir carta; 1=elegir pila; 2=fin */
const CARTA = 0;
const PILA = 1;
const FIN = 2;
let cartaSeleccionada = -1; //Índice de carta seleccionada
let pila1 = [];
let puntosPila1 = 0;
let pila2 = [];
let puntosPila2 = 0;
let etqContadorA;
let etqContadorB;
let etqPila1;
let etqPila2;

const etqNombreUsuario = document.getElementById("nombre_usuario");
const etqLogin = document.getElementById("login");
const etqPassword = document.getElementById("password");
const etqConsultar = document.getElementById("botonConsultar");
const etqCerrar = document.getElementById("botonCerrarSesion");



let palos=["H"];
let cartasOrdenadas=[];

let player = {
    id: 0,
    nombre: "",
    juegosAcabados: 0
};


function cargar_player(id, nombre, juegosAcabados) {
    player.id = id;
    player.nombre = nombre;
    player.juegosAcabados = juegosAcabados;
    localStorage.setItem("player",JSON.stringify(player));
}

let enJuego = {
    cartas: [],
    estado: 0,
    pila1: [],
    pila2: [],
    puntosPila1: 0,
    puntosPila2: 0,
    cartaSeleccionada: -1,
}

function enJuego_reset() {
    // Reinicializar las propiedades a valores por defecto.
    enJuego.cartas = _.shuffle(cartasOrdenadas);
    enJuego.estado= 0;
    enJuego.pila1= [];
    enJuego.pila2= [];
    enJuego.puntosPila1= 0;
    enJuego.puntosPila2= 0;
    enJuego.cartaSeleccionada= -1;
    localStorage.removeItem('enJuego');
}