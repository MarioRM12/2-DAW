function comparar(a, b) { return a - b; }

function generarNumeros(){
    numeros=[];
    for(let x=1;x<=90;x++){
        numeros.push(x);
    }
    numeros = _.shuffle(numeros);
}

function pintarCarta(){
    for(let x=0;x<=23;x++){
        const etqSquare = document.getElementById("square" + x);
        etqSquare.innerText=carton[x];
        etqSquare.className="";
        if(bolasAcertadas.indexOf(carton[x])>=0){
            etqSquare.classList.add("bg-info", "text-white");
        }
    }
}

function pedirCarta(){
    resetearJuego();
    generarNumeros();
    carton = numeros.slice(0,24);
    carton.sort(comparar);

    console.log(numeros);;
    console.log(carton);

    pintarCarta();

    enJuego_reset();
    //Activar botón Empezar
    btnEmpezar.removeAttribute("disabled");

}

function resetearJuego(){
    aciertos = 0;
    cantidad=0;
    bolasAcertadas=[];
    localStorage.removeItem("enJuego");

}

function empezar(){
    //Desactivar botón Pedir
    btnPedirCarta.setAttribute("disabled","true");

    //Comienza el sorteo
    //let aciertos = 0, cantidad=0, bolasAcertadas=[]
    let interval;
    let numero;
    numeros=_.shuffle(numeros);

    interval = setInterval(() => {
        //Sacar un número
        numero=numeros.pop();
        cantidad++;
        //Mostrar número
        etqJugando.innerText=numero;
        //Marcar número si lo tengo
        let pos=carton.indexOf(numero);
        if(pos>=0){
            let etqNumero = document.getElementById("square" + pos);
            etqNumero.classList.add("bg-info", "text-white");
            bolasAcertadas.push(numero);
            aciertos++;
        }

        //Guardar estado de juego
        enJuego.aciertos=aciertos;
        enJuego.bolasAcertadas=bolasAcertadas;
        enJuego.cantidad=cantidad;
        enJuego.carton=carton;
        enJuego.numeros=numeros;
        localStorage.setItem("enJuego", JSON.stringify(enJuego));

        //Comprobar si tengo los 5

        if (aciertos >= 5) {
            clearInterval(interval);
            etqResultado.innerText = "Se han sacado " + cantidad + 
                " bolas, y las bolas premiadas son " + 
                bolasAcertadas.join(",");
            jugador.resultado.push(cantidad);
            localStorage.setItem("jugador",JSON.stringify(jugador));
            btnPedirCarta.removeAttribute("disabled");
            enJuego_reset();
        }
    }, 200);    
}

function sesionComenzar(jug) {
    btnPedirCarta.removeAttribute("disabled");
    btnCerrar.hidden=false;
    btnConsultar.hidden=true;
    etqUsuario.hidden=true;
    etqPasswd.hidden=true;
    etqSaludo.innerText=jug.nombre;
}

function consultarUsuario(){
    obtenerJugadores().then(resp => {
        jugadores=resp;
        jugador=jugadores.find((x) => x.nombre == etqUsuario.value)
        if(jugador){
            if(jugador.passwd == etqPasswd.value){
                sesionComenzar(jugador);
                //Guardar sesión en LocalStorage
                localStorage.setItem("jugador",JSON.stringify(jugador));
            }
        }
    });
}

function cerrarSesion(){
    btnPedirCarta.setAttribute("disabled",true);
    btnEmpezar.setAttribute("disabled",true);
    btnCerrar.hidden=true;
    btnConsultar.hidden=false;
    etqUsuario.hidden=false;
    etqPasswd.hidden=false;
    etqSaludo.innerText="";
    //Limpiar sesión en LocalStorage
    localStorage.removeItem("jugador");
}