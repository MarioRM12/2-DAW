


let imagenes = ['Ballena','Elefante', 'Gallo','Girafa','Hormiga','Leon','Pajaro','Perro'];

console.log(imagenes);

const origen = document.querySelector('#origen');
const destino = document.querySelector('#destino');

crearImagenes(destino, imagenes)

const etiquetas = document.querySelector('img');

const Ballena = document.querySelector('#Ballena');
const Elefante = document.querySelector('#Elefante');
const Gallo = document.querySelector('#Gallo');
const Jirafa = document.querySelector('#Jirafa');
const Hormiga = document.querySelector('#Hormiga');
const Leon = document.querySelector('#Leon');
const Pajaro = document.querySelector('#Pajaro');
const Perro = document.querySelector('#Perro');

Ballena.addEventListener('click' , () => {

    destino.appendChild(Ballena);
    imagenes.splice('Ballena',1);
    console.log(imagenes);

})

Elefante.addEventListener('click' , () => {

    destino.appendChild(Elefante);
    imagenes.splice('Elefante',1);
    console.log(imagenes);

})

Gallo.addEventListener('click' , () => {

    destino.appendChild(Gallo);
    imagenes.splice('Gallo',1);
    console.log(imagenes);

})

Jirafa.addEventListener('click' , () => {

    destino.appendChild(Jirafa);
    imagenes.splice('Jirafa',1);
    console.log(imagenes);

})

Hormiga.addEventListener('click' , () => {

    destino.appendChild(Hormiga);
    imagenes.splice('Hormiga',1);
    console.log(imagenes);

})

Leon.addEventListener('click' , () => {

    destino.appendChild(Leon);
    imagenes.splice('Leon',1);
    console.log(imagenes);

})

Pajaro.addEventListener('click' , () => {

    destino.appendChild(Pajaro);
    imagenes.splice('Pajaro',1);
    console.log(imagenes);

})

Perro.addEventListener('click' , () => {

    destino.appendChild(Perro);
    imagenes.splice('Perro',1);
    console.log(imagenes);

})

function crearImagenes(){
    let contador = 0;
    while (contador < 0) {
        let columna = document.createElement('div');
        columna.classList.add('col');
        let animal = imagenes[contador];
        columna.innerHTML = '<img id="'+animal+'"height=200"> </img>';
        origen.append(columna);
        contador++;
    }
}