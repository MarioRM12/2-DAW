// Constantes de html
const btnNuevo = document.getElementById("btnNuevo");
const btnPedir = document.getElementById("btnPedir");
const btnDetener = document.getElementById("btnDetener");
const jugadorPuntos = document.querySelector("h1 small");
const computadoraPuntos = document.getElementById("PuntosComp");
const jugadorCartas = document.getElementById("jugador-cartas");
const computadoraCartas = document.getElementById("computadora-cartas");

// Arreglo con las cartas
let cartas = [];
// Acumuladores de puntos
let acuPuntosJugador = 0;
let acuPuntosComputador = 0;

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


//Funciones principales para el juego

    // Funcion para boton pedir juego
    function nuevoJuego() {

        // Función para manejar el clic en el botón "Pedir carta"
        btnPedir.addEventListener("click",pedirCarta);

        // Función para manejar el clic en el botón "Detener"
        btnDetener.addEventListener("click",detener);
        
        //Vaciamos la baraja
        cartas = [];

        //Reiniciamos los puntos
        acuPuntosJugador = 0;
        acuPuntosComputador = 0;
        jugadorPuntos.innerText = acuPuntosJugador;
        computadoraPuntos.innerText = acuPuntosComputador;

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

        if (cartas.length == 0) {
            alert("Debes iniciar una nueva partida");
        }else if (acuPuntosJugador <= 20) {

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

            acuPuntosJugador += +valorCarta;

            jugadorPuntos.innerText = acuPuntosJugador;

            if (acuPuntosJugador >= 21) {
                detener();

                // Función para manejar el clic en el botón "Pedir carta"
                btnPedir.removeEventListener("click",pedirCarta);

                // Función para manejar el clic en el botón "Detener"
                btnDetener.removeEventListener("click",detener);
                
            }

        }else{
            detener();
        }


    }

    // Funcion para boton detener
    function detener() {

        // Función para manejar el clic en el botón "Pedir carta"
        btnPedir.removeEventListener("click",pedirCarta);

        // Función para manejar el clic en el botón "Detener"
        btnDetener.removeEventListener("click",detener);

        // Hacemos el filtrado correspondiente de las casuisticas
        if (acuPuntosJugador > 21) {

            // Sacamos la carta del array
            let cartaSacada = cartas.pop();

            // Creamos la imagen
            let nuevaImagenCarta = document.createElement('img');
            nuevaImagenCarta.classList.add('carta');
            nuevaImagenCarta.src = `assets/cartas/${cartaSacada}.png`;
            computadoraCartas.append(nuevaImagenCarta);

            // Calculamos los puntos de la carta sacada
            let valorCarta = cartaSacada.slice(0, -1);

            if (valorCarta == "J" || valorCarta == "Q" || valorCarta == "K") {
                valorCarta = 10;
            } else if (valorCarta == "A") {
                valorCarta = 11;
            }

            acuPuntosComputador += +valorCarta;
    
            computadoraPuntos.innerText = acuPuntosComputador;

            setTimeout(() => alert("Ha ganado la computadora. \nPulse 'Nuevo Juego' para empezar otra partida"),300);

        }else if (acuPuntosJugador == 21) {

            setTimeout(() => alert("Has Ganado pedazo de espabilado"),300);

        }else{

            while (acuPuntosJugador > acuPuntosComputador && acuPuntosComputador < 21 ) {
            
                // Sacamos la carta del array
                let cartaSacada = cartas.pop();
    
                // Creamos la imagen
                let nuevaImagenCarta = document.createElement('img');
                nuevaImagenCarta.classList.add('carta');
                nuevaImagenCarta.src = `assets/cartas/${cartaSacada}.png`;
                computadoraCartas.append(nuevaImagenCarta);
    
                // Calculamos los puntos de la carta sacada
                let valorCarta = cartaSacada.slice(0, -1);
    
                if (valorCarta == "J" || valorCarta == "Q" || valorCarta == "K") {
                    valorCarta = 10;
                } else if (valorCarta == "A") {
                    valorCarta = 11;
                }
    
                acuPuntosComputador += +valorCarta;
    
                computadoraPuntos.innerText = acuPuntosComputador;
    
            }

        }
        
        // Determinamos el ganador
        if (acuPuntosComputador > acuPuntosJugador && acuPuntosComputador <= 21) {
            setTimeout(() => alert("Ha ganado la computadora. \nPulse 'Nuevo Juego' para empezar otra partida"),300);
        }else if (acuPuntosComputador < acuPuntosJugador && acuPuntosJugador < 21 || acuPuntosComputador > 21) {
            setTimeout(() => alert("Has Ganado pedazo de espabilado. \nPulse 'Nuevo Juego' para empezar otra partida"),300);
        }else if (acuPuntosComputador == acuPuntosJugador ) {
            setTimeout(() => alert("Habeis empatado, por tanto gana la casa. \nPulse 'Nuevo Juego' para empezar otra partida"),300);
        }

    }

//Añadimos las funciones al los botones

    // Función para manejar el clic en el botón "Nuevo Juego"
    btnNuevo.addEventListener("click",nuevoJuego);

    // Función para manejar el clic en el botón "Pedir carta"
    btnPedir.addEventListener("click",pedirCarta);

    // Función para manejar el clic en el botón "Detener"
    btnDetener.addEventListener("click",detener);