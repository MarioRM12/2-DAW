// Constantes de html
const btnNuevo = document.getElementById("btnNuevo");
const btnPedir = document.getElementById("btnPedir");
const btnDetener = document.getElementById("btnDetener");
const jugadorPuntos = document.querySelector("h1 small");
const computadoraPuntos = document.querySelector("#computadora h1 small");
const jugadorCartas = document.getElementById("jugador-cartas");
const computadoraCartas = document.getElementById("computadora-cartas");

// Arreglo con las cartas
let cartas = [];

// Funciones generales

    // Funcion para barajar las cartas.
    function barajar() {

        cartas = _.shuffle(cartas);

    }

    //Funcion para rellenar la baraja con todas las cartas.
    function rellenarBaraja(baraja) {

        // Cartas numéricas del 2 al 10
        for (let i = 2; i <= 10; i++) {
            baraja.push(i + "C", i + "D", i + "H", i + "S");
        }
        
        // Cartas con letras (J, Q, K, A)
        let letras = ["J", "Q", "K", "A"];
        for (let j = 0; j < letras.length; j++) {
            baraja.push(letras[j] + "C", letras[j] + "D", letras[j] + "H", letras[j] + "S");
        }

    }

    // Función para calcular los puntos de un jugador
    function calcularPuntos(cartasJugador) {
        // Implementa la lógica para calcular los puntos según las reglas dadas
        // ...

        // Devuelve la cantidad de puntos calculados
        return puntos;
    }

    //a
    function insertarimagen() {
        
        //<img class="carta" src="assets/cartas/

    }


//Funciones principales para el juego

    // Funcion para boton pedir juego
    function nuevoJuego() {
        
        //Vaciamos la baraja
        cartas = [];

        //Rellenamos la baraja de nuevo
        rellenarBaraja(cartas);
        
        // Barajo las cartas
        barajar();

        // Vaciamos la mesa de juego
        jugadorCartas.innerHTML = "";
        computadoraCartas.innerHTML = "";

    }

    // Funcion para boton pedir carta
    function pedirCarta() {

        // Sacamos la carta del array
        let cartaSacada = cartas.pop();

        // Creamos la imagen
        let nuevaImagenCarta = document.createElement('img');
        nuevaImagenCarta.classList.add('carta');
        nuevaImagenCarta.src = `assets/cartas/${cartaSacada}.png`;
        jugadorCartas.append(nuevaImagenCarta);

        // Calculamos los puntos de la carta sacada
        let valorCarta = cartaSacada.slice(0, -1);

        if (valorCarta == "J" || valorCarta == "Q" || valorCarta == "K") {
            valorCarta = 10;
        } else if (valorCarta == "A") {
            valorCarta = 11;
        }

        jugadorPuntos.innerText = +valorCarta;

    }

    // Funcion para boton detener
    function detener() {
        
    }

//Añadimos las funciones al los botones

    // Función para manejar el clic en el botón "Nuevo Juego"
    btnNuevo.addEventListener("click",nuevoJuego);

    // Función para manejar el clic en el botón "Pedir carta"
    btnPedir.addEventListener("click",pedirCarta);

    // Función para manejar el clic en el botón "Detener"
    btnDetener.addEventListener("click",detener);