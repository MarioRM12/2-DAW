
// Descomentar para parte 3
formulario.hidden = false;
zonaJuego.hidden = true;



for(let palo of palos){
    cartasOrdenadas = cartasOrdenadas.concat("A" + palo);
    for(let i=2;i<10;i++){
        cartasOrdenadas = cartasOrdenadas.concat("" + i + palo);
    }
    for(let figura of ['J','Q','K']) {
        cartasOrdenadas = cartasOrdenadas.concat(figura + palo);
    }
}
cartas = _.shuffle(cartasOrdenadas);
cartas = cartasOrdenadas; //Comentar al acabar
console.log(cartasOrdenadas);
console.log(cartas);

etqContadorA=document.getElementById("contadorA");
etqContadorB=document.getElementById("contadorB");
etqPila1=document.getElementById('pila1');
etqPila2=document.getElementById('pila2');

//Cargar datos desde localStorage
let lsPlayer = JSON.parse(localStorage.getItem('player'));
if(lsPlayer){
    cargar_jugador(lsPlayer);
    zonaJuego.hidden=false;
}

let lsEnJuego = JSON.parse(localStorage.getItem('enJuego'));
if(lsEnJuego){
    cartas=[...lsEnJuego.cartas];
    estado=lsEnJuego.estado;
    pila1=lsEnJuego.pila1;
    pila2=lsEnJuego.pila2;
    puntosPila1=lsEnJuego.puntosPila1;
    puntosPila2=lsEnJuego.puntosPila2;
    cartaSeleccionada=lsEnJuego.cartaSeleccionada;
    etqContadorA.innerText=puntosPila1;
    etqContadorB.innerText=puntosPila2;
    console.log("lsEnJuego",lsEnJuego);
    if(pila1.length>0){
        etqPila1.innerText="";
        for(c of pila1){
            const etqNuevaCarta=document.createElement("img");
            etqNuevaCarta.src="assets/img/cartas/" + c + ".png"
            etqPila1.appendChild(etqNuevaCarta);
        }
    }
    if(pila2.length>0){
        etqPila2.innerText="";
        for(c of pila2){
            const etqNuevaCarta=document.createElement("img");
            etqNuevaCarta.src="assets/img/cartas/" + c + ".png"
            etqPila2.appendChild(etqNuevaCarta);
        }
    }
}


//Asignar event listener de cartas
for(let i=0; i<12; i++) {
    const etqCarta=document.getElementById('carta' + i);
    etqCarta.addEventListener('click', () => {
        voltearCarta(i, etqCarta);
    });
    //voltear carta si estaba en juego
    if (lsEnJuego){
        if(pila1.indexOf(cartas[i])>=0 || pila2.indexOf(cartas[i])>=0) {
            etqCarta.src="assets/img/cartas/grey_back.png";
        } else {
            if(estado==PILA && cartaSeleccionada==i) {
                etqCarta.src = rutaCarta(i);
            }
        }
        
    }
}

etqPila1.addEventListener('click', () => {
    clickPila(1, cartaSeleccionada);
});

etqPila2.addEventListener('click', () => {
    clickPila(2, cartaSeleccionada);
});

//Event listener de botones
const etqNuevoJuego=document.getElementById('nuevoJuego');
etqNuevoJuego.addEventListener('click', () => {
    cartas = _.shuffle(cartasOrdenadas);
    restablecerCartas();
    divMensaje.hidden = true;
    siguiente.innerText = 'Seleccionar carta';
});
etqNuevoJuego.hidden = true;

botonConsultar.addEventListener('click', () => {
    fetch('http://localhost:3000/players').then(resp => {
        resp.json().then(listaJugadores => {
            let encontrado = false;
            for(let j of listaJugadores){
                if(j.nombre == login.value && j.passwd == password.value){
                    cargar_jugador(j);
                    zonaJuego.hidden=false;
                    encontrado = true;
                    break;
                }
            }
            if (!encontrado){
                alert('No se encuentra el jugador');
            }
        })
    }).catch(error => alert("Error del servidor API REST"));
})

botonCerrarSesion.addEventListener('click', cerrarSesion)