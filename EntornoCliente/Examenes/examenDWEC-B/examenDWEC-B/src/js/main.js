// etiquetas globales
const intentosHTML = document.getElementById("intentos");
const mensaje = document.getElementById("mensaje");
const siguiente = document.getElementById("siguiente");

// inicialización etiquetas


//variables globales

//
//etqFormulario.hidden = true; //mostrar para la parte 2.
//etqZonaJuego.hidden = true; //mostrar para la parte 2.

let ordenValores = ['A','2','3','4','5','6','7','8','9','J','Q','K'];
//Generar cartas
let intentos = 0;
let acertadas = 0;
let cartas = [];
cartas = baraja();



//Cargar datos desde localStorage (Parte 2 y parate 3)



//Asignar event listener de cartas
for (let index = 0; index < 12; index++) {
    document.getElementById("carta" + index).addEventListener("click",() => destapar(index));   
}

//Event listener de botones
