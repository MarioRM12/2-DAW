
let player = {
    id: 0,
    nombre: "",
    resultado: [],
    enJuego: ""
}

function cargar_player(id, nombre, resultado, enJuego = "A") {
    player.id = id;
    player.nombre = nombre;
    player.resultado = resultado;
    player.enJuego = enJuego;
}

// let enJuego = {
//     cartas: [],
//     intentos: 1,
//     siguiente: 'A',
//     acertadas: 0
// }

// function enJuego_reset() {
//     // Reinicializar las propiedades a valores por defecto.
//     enJuego.cartas = ;
//     enJuego.intentos= ;
//     enJuego.siguiente= ;
//     enJuego.acertadas= ;
// }