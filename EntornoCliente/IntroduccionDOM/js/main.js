
////Modificar DIV primera celda (id: f1c1)

let celda1 = document.getElementById('f1c1');
celda1.innerText="Primera celda";

// asignar innerText que incluya etiquetas HTML

celda1.innerHTML="<h2>Primera celda</h2>";

////Modifivar DIV segunda celda (id: f1c2)

const celda2 = document.getElementById('f1c2');
celda2.innerText="Segunda celda";

// asignar innerHTML que incluya etiquetas HTML

celda2.innerHTML="<b>Segunda celda</b>";

////Modificar DIV tercera celda (id: f1c3) asignando estilo CSS (color y fontsize)

const celda3 = document.querySelector('#f1c3');
celda3.style.color = 'red';
celda3.style.fontSize = '25px';

////Modificar imagen (https://e7.pngegg.com/pngimages/602/440/png-clipart-javascript-open-logo-number-js-angle-text.png)
const imagen = document.querySelector('img');
imagen.src="https://e7.pngegg.com/pngimages/602/440/png-clipart-javascript-open-logo-number-js-angle-text.png";
imagen.width='150';
imagen.alt = 'Logo de javascript';

////Aumentar texto de la fila 2 (todos los div dentro de fila2) usando $

const fila2 = document.querySelectorAll('#fila2 div');

//asi en h2
for (let c of fila2) {
    c.innerHTML = `<h2>${c.innerText}</h2>`;
}

////Cambiar texto de la última celda (id: f2c3), texto pedido al usuario.

const celda6 = document.getElementById('f2c3');
let texto = prompt('Dime texto');
celda6.innerText = texto;

    //opcion 2
    celda6 = document.getElementById('f2c3');
    celda6.innerText = prompt('Dime texto');

    //opcion 2
    document.getElementById('f2c3').innerText = prompt('Dime texto');

////Función para la pulsación del botón
const boton = document.getElementById('boton');
boton.addEventListener('click', cambiarTitulo)

//boton_click: añadir * en título

//boton_click2: añadir - en título

//Asignación de función a la pulsación del botón (click, mousedown, mouseup)

//Restauración del título al hacer clic en el mismo.


////Añadir nuevos elementos HTML al final de un elemento existente (id: ultimaFila)
//Crear una nueva fila div-row, con un elemento columna div-col (con bg-danger).

//Añadir al final del contenedor (container || container-fluid)


////Añadir nuevo elemento HTML junto a un elemento existente (antes de ultimaFila)
////element.insertAdjacentElement(position, element); //beforbegin, afterbegin, beforeend, afterend
//Crear una nueva fila div-row, con un elemento columna div-col (con bg-warning).

//Añadir antes del div con id ultimaFila
