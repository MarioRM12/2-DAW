const jugando = document.getElementById("jugando");
const resultado = document.getElementById("resultado");

// Una función que genere todos los números del bingo (Desde el 1 al 90), que mezcle
// esas bolas y que las almacene en un arreglo. Este arreglo será devuelto por la función.

function generarBolas() {
    
    let Bolas = [];

    let num = 1;

    while (num < 90) {

        Bolas.push(num);
        
        num++;

    }

    let BolasOrdenado = _.shuffle(Bolas);

    return BolasOrdenado;
}

/*Una función que genere el cartón de bingo (24 números aleatorios de los 90). Esta
función será invocada por el botón Pedir cartón bingo. Cada vez que hagamos clic
sobre el botón se generará un cartón nuevo. Esos 24 números se mostrarán ordenados.
Las etiquetas HTML para los número tienen un id desde “square1” hasta “square24”.*/

function generarCarton() {

    let bolas = generarBolas();

    let iterador = 0;

    while (iterador <= 23) {

        const casilla = document.getElementById("square" + iterador);

        casilla.innerText = bolas.pop();

        iterador = iterador +1;
    }
    
}

/* Una función que vaya sacando una a una las bolas que se han generado previamente.
Se aconseja usar la función setInterval incluida en el código. Si la bola coincide con el
cartón, tendremos que añadirle la clase bg-info y text-white. Los números que
vayamos sacando se irán mostrando en la etiqueta identificada como jugando. Cuando
finalice la partida se mostrarán, en la etiqueta identificada como resultado, las 5 bolas
premiadas y cuántas bolas hemos sacado del bingo para obtener el resultado.*/

function sacarBola() {

    let bolas = generarBolas();

    let indice = 1,
    interval;

    interval = setInterval(() => {
        //aqui irían todas mis instrucciones

            let numeroSacado = bolas.pop();

            jugando.innerText(numeroSacado);

            let iterador = 0;
            while (iterador < 24) {
                const casilla = document.getElementById("square" + iterador);

                if (casilla.innerText == numeroSacado) {
                    numeroSacado.classList.add('bg-info','text-white');
                }
                
            }

            let resultado = [];
            
            resultado.push(numeroSacado);

        //en este caso puse un console.log
        console.log('ejecución ' + indice);

        //sumo una ejecución al indice y verifico
        //si ya no hay que seguir repitiendo la ejecución
        indice += 1;
        if (indice >= 9) {
            clearInterval(interval);
        }
    }, 1000);
    
}

// function comparar(a, b) { return a - b; }
