function baraja() {

    let ordenValores = ['A','2','3','4','5','6','7','8','9','J','Q','K'];
    let palo = ['H', 'C', 'D', 'S'];

    let Nuevascartas = [];

    ordenValores.forEach(element => {
        Nuevascartas.push(element+palo[1]);
    });

    // Nuevascartas = _.shuffle(Nuevascartas);

    return Nuevascartas;

}

function destapar(index) {
    let carta = document.getElementById("carta"+index);
   
    if (!carta.classList.contains("girada")) {

        carta.src="assets/img/cartas/"+ cartas[index] +".png";
        carta.classList.add("girada");
        carta.classList.add(""+cartas[index]);

        if (carta.classList.contains("" +ordenValores[0])) {
            siguiente.innerText = "" + ordenValores[++index];
            mensaje.innerText = "Felicidades, es esa, a por la siguiente";
        }
        else
        {
            mensaje.innerText = "Te has equivocado";
        }
    }
}


function tapar(index){
    let carta = document.getElementById("carta"+index);
    
    carta.src="assets/img/cartas/red_back.png";
    carta.classList.remove("girada");
}