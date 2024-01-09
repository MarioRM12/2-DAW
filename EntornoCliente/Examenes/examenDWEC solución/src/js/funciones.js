function comparar(a, b) { return a - b; }
//   let _ = require('underscore-node');
// console.log(miArray);

function generarBolas() {
    let bolas=[];
    for(i=1; i<=90; i++) {
        bolas.push(i);
    }
    bolas = _.shuffle(bolas);
    return bolas;
}

function pintarCarton(carton, premiadas = []) {
    for(let i=0; i<24; i++) {
        const etqSq = document.getElementById(`square${i}`);
        etqSq.innerText = carton[i];
        if (premiadas.includes(carton[i])) {
            etqSq.classList.add("bg-info", "text-white");
        } else {
            etqSq.classList.remove("bg-info", "text-white");
        }
    }
    etqBola.innerText = "";
    etqResultado.innerText = "";
    botonJuego.disabled = false;
    etqBola.innerTxt = "";
    etqResultado.innerTxt = "";
}

function pedirCarton() {
    carton = generarBolas().slice(0,24).sort((a,b) => comparar(a,b));
    pintarCarton(carton);

    return carton;
}

function finJuego(bolas, totalBolas){
    jugador.resultado.push(totalBolas);
    localStorage.setItem("Jugador", JSON.stringify(jugador));
    localStorage.removeItem("enJuego");
    enJuego_reset();
    etqResultado.innerText = `Se han sacado ${totalBolas} bolas, y las bolas premiadas son ${bolas.join(',')}.`
    botonPedirCarta.disabled = false;
}

function empezarJuego(){
    //Generar bolas de Bingo
    bolasBingo = generarBolas();
    //Desactivar botones
    botonPedirCarta.disabled = true;
    botonJuego.disabled = true;
    //Comienzo de sacar bolas
    let indice = 0,
        interval;
    let bolasPremiadas = [];
    if (enJuego.bolas.length > 0) {
        bolasBingo = enJuego.bolas;
        bolasPremiadas = enJuego.bolasPremiadas;
        indice = enJuego.bolasJugadas;
    }
    interval = setInterval(() => {
        //Guardar en localStorage
        enJuego.bolas = bolasBingo;
        enJuego.carton = carton;
        enJuego.bolasPremiadas = bolasPremiadas;
        enJuego.bolasJugadas = indice;
        localStorage.setItem("enJuego", JSON.stringify(enJuego));

        let bola = bolasBingo.pop();
        etqBola.innerText = bola;
        if (carton.includes(bola)) {
            //Apuntar bola premiada
            bolasPremiadas.push(bola);
            let pos = carton.indexOf(bola);
            const etq = document.getElementById("square" + pos);
            etq.classList.add("bg-info", "text-white");
        }

        //sumo una ejecución al indice y verifico
        //si ya recorrí todo
        indice += 1;
        if (bolasPremiadas.length >= 5 || bolasBingo.length == 0) {
            clearInterval(interval);
            finJuego(bolasPremiadas, indice);
        }
    }, 1000);
}

function inicializarJugador(usuario) {
    etqSaludo.innerHTML = "<h1>" + usuario.nombre + "</h1>";
    txtUsuario.hidden = true;
    txtPassword.hidden = true;
    botonConsultar.hidden = true;
    botonCerrarSesion.hidden = false;
    botonPedirCarta.disabled = false;
}

function comprobarJugador(){
    obtenerJugadores().then(listaJugadores => {
        let usuario=listaJugadores.find((j) => j.nombre == txtUsuario.value);
        if (usuario) {
            if(usuario.passwd==txtPassword.value) {
                jugador_cargar(usuario.id, usuario.nombre, usuario.resultado);
                localStorage.setItem("Jugador",JSON.stringify(jugador));
                //console.log(jugador);
                inicializarJugador(usuario);
            } else {
                etqSaludo.innerText = "Contraseña incorrecta.";    
            }
        } else {
            etqSaludo.innerText = "Usuario no encontrado.";
        }    
    });

}

function cerrarSesion(){
    //Eliminar localStorage
    localStorage.removeItem("Jugador");
    //anular Botones
    inicializarBotones();
}

