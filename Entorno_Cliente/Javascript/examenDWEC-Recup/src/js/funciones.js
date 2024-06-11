

function rutaCarta(i) {
    //DEVUELVE LA RUTA PARA LA CARTA EN EL ARRAY cartas[i]
    return "assets/img/cartas/" + cartas[i] + ".png"
}


function cartaJugada(etqCarta){
    //SI LA CARTA SE ESTÁ MOSTRANDO (NO ESTÁ CON REVERSO ROJO)
}

function valorCarta(carta){
    //carta es algo como "5H"
    let cartaValor=carta.substring(0,1);
    console.log(cartaValor);
    return ordenValores.indexOf(cartaValor)+1;
    
}

function restablecerCartas(){

    //PONER TODAS LAS CARGAS CON REVERSO ROJO
    for(let i=0; i<12; i++) {
        const etqCarta=document.getElementById('carta' + i);
        etqCarta.src="assets/img/cartas/red_back.png";
    }

    //VACIAR LAS PILAS Y PONER UNA CARTA CON REVERSO GRIS
    etqPila1.innerText="";
    const etqCartaGris=document.createElement("img");
    etqCartaGris.src="assets/img/cartas/grey_back.png";
    etqPila1.appendChild(etqCartaGris);
    etqPila2.innerText="";
    const etqCartaGris2=document.createElement("img");
    etqCartaGris2.src="assets/img/cartas/grey_back.png";
    etqPila2.appendChild(etqCartaGris2);

    //INICIAR EL RESTO DE VARIABLES Y ELEMENTOS DEL DOM
    cartaSeleccionada = -1; 
    pila1 = [];
    puntosPila1 = 0;
    pila2 = [];
    puntosPila2 = 0;
    estado=CARTA;   

}

function voltearCarta(i, etqCarta){
    const etq=document.getElementById('carta');
    //Si se puede pulsar sobre las cartas y se pulse
    //una carta que esté bocabajo, voltear la carta.
    //cartas[i]
    if(etqCarta.src.includes("red") && estado==CARTA){
        etqCarta.src=rutaCarta(i);
        console.log(etqCarta.src);
        cartaSeleccionada=i;
        estado=PILA;
        const etqSiguiente = document.getElementById("siguiente");
        etqSiguiente.innerText="Seleccione pila:"
        enJuego.cartas = cartas;
        enJuego.estado= estado;
        enJuego.pila1= pila1;
        enJuego.pila2= pila2;
        enJuego.puntosPila1= puntosPila1;
        enJuego.puntosPila2= puntosPila2;
        enJuego.cartaSeleccionada= cartaSeleccionada;
        localStorage.setItem("enJuego",JSON.stringify(enJuego));
    }
}

function clickPila(pila,indice) {
    //SI ES EL MOMENTO DE SELECIONAR PILA
    console.log("estado", estado)
    if(estado==PILA){
        let etqPila, puntosPila;
        if(pila===1) {
            etqPila = etqPila1;
            puntosPila = puntosPila1;
            pila1.push(cartas[indice]);
        } else {
            etqPila = etqPila2;
            puntosPila = puntosPila2;
            pila2.push(cartas[indice]);
        }
        //COLOCAR CARTA SELECCIONADA EN PILA pila
        if(puntosPila==0) {
            //SI NO HAY CARTAS EN LA PILA, SUSTITUIR LA GRIS
            etqPila.children[0].src=rutaCarta(indice);
        } else {
            //SI YA HAY CARTAS EN LA PILA, AÑADIR ETIQUETA IMG
            const etqNuevaCarta=document.createElement("img");
            etqNuevaCarta.src=rutaCarta(indice);
            etqPila.appendChild(etqNuevaCarta);

        }
        estado=CARTA;
        //SUMAR PUNTUACIÓN A LA pila
        puntosPila+=valorCarta(cartas[indice]);
        if(pila===1) {
            etqContadorA.innerText=puntosPila;
            puntosPila1=puntosPila;
        } else {
            etqContadorB.innerText=puntosPila;
            puntosPila2=puntosPila;
        }

        //QUITAR DE LAS CARTAS DE ABAJO (poner reverso gris)
        const etqCarta=document.getElementById('carta' + indice);
        etqCarta.src="assets/img/cartas/grey_back.png"

      

        //SI QUEDAN MÁS CARTAS, INDICAR QUE TOCA SELECCIONAR CARTA
        const etqSiguiente = document.getElementById("siguiente");
        etqSiguiente.innerText="Seleccione carta:"

        //SI NO QUEDAN MÁS CARTAS, INDICAR PARTIDA ACABADA
        if(pila1.length + pila2.length >= cartas.length) {
            juegosAcabados+=1;
            player.juegosAcabados=juegosAcabados;
            localStorage.setItem("player",JSON.stringify(player));
            localStorage.removeItem("enJuego");
            etqSiguiente.innerText="FIN DE JUEGO";
            estado=FIN;
            etqNuevoJuego.hidden=false;
        }

        //LOCALSTORAGE
        enJuego.cartas = cartas;
        enJuego.estado= estado;
        enJuego.pila1= pila1;
        enJuego.pila2= pila2;
        enJuego.puntosPila1= puntosPila1;
        enJuego.puntosPila2= puntosPila2;
        enJuego.cartaSeleccionada= cartaSeleccionada;
        localStorage.setItem("enJuego",JSON.stringify(enJuego));
    }
}

function cargar_jugador(j) {
    etqConsultar.hidden=true;
    etqCerrar.hidden=false;
    etqLogin.hidden=true;
    etqPassword.hidden=true;
    etqNombreUsuario.innerText=j.nombre;
    cargar_player(j.id, j.nombre, j.juegosAcabados);
}

function cerrarSesion(){
    etqConsultar.hidden=false;
    etqCerrar.hidden=true;
    etqLogin.hidden=false;
    etqPassword.hidden=false;
    etqNombreUsuario.innerText="";
    //localStorage.removeItem("player");
    localStorage.clear();
    zonaJuego.hidden=true;
}