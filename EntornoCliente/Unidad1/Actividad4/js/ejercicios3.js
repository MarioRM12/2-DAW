/* Tarea 1

1.- Partiendo del archivo HTML adjunto en carpeta comprimida “actividad3-1”, mover el
primer DIV.COL que está dentro de DIV#lista, al final del mismo DIV#lista, añadiéndole la clase
“bg-primary”.
 La función debe llamarse “mover_al_ultimo”.
 La palabra “Programación” debe quedar la última.

*/
document.querySelector('#tarea1').addEventListener('click', () => {

    const lista = document.getElementById('lista');
    const primerElemento = lista.firstElementChild;
    const ultimoElemento = lista.lastElementChild;
    lista.appendChild(primerElemento);
    primerElemento.classList.add('bg-primary');
    ultimoElemento.classList.remove('bg-primary');

});

/* Tarea 2

2.- Partiendo del archivo HTML adjunto en carpeta comprimida “actividad3-2”, copiar los
DIV.COL dentro del DIV#original, al DIV#copia.
 La función debe llamarse “copiar”.
 La lista debe aparecer en las dos filas (original y copia).

*/
document.querySelector('#tarea2').addEventListener('click', () => {

    const original = document.getElementById('original');
    const copia = document.getElementById('copia');
    const elementos = original.querySelectorAll('.col');
    elementos.forEach((element) => {
        copia.appendChild(element.cloneNode(true));
    });

});

/* Tarea 3

3.- Partiendo del archivo HTML adjunto en carpeta comprimida “actividad3-3”, ordenar los
DIV.COL dentro del propio DIV#ordenar, según el texto que tiene cada DIV.COL.
 La función debe llamarse “ordenar”.
 Las palabras deben quedar ordenadas en la misma fila.

*/

document.querySelector('#tarea3').addEventListener('click', () => {

    const ordenar = document.getElementById('ordenar');
    const elementos = Array.from(ordenar.querySelectorAll('.col'));
    elementos.sort((a, b) => a.textContent.localeCompare(b.textContent));
    elementos.forEach((element) => {
        ordenar.appendChild(element);
    });

});

/* Tarea 4

4.- Partiendo del archivo HTML adjunto en carpeta comprimida “actividad3-4”, leer/copiar los
DIV.COL dentro del DIV#desordenado, ordenarlos según el texto que tiene cada DIV.COL, y
ponerlos ordenados en el DIV#ordenado.
 La función debe llamarse “duplicar_y_ordenar”.
 La fila “desordenado” no debe modificarse.
 La fila “ordenado” debe tener todas las palabras ordenadas alfabéticamente.

*/

document.querySelector('#tarea4').addEventListener('click', () => {

    const desordenado = document.getElementById('desordenado');
    const ordenado = document.getElementById('ordenado');
    const elementos = Array.from(desordenado.querySelectorAll('.col'));
    const elementosOrdenados = elementos.map((element) => element.cloneNode(true));
    elementosOrdenados.sort((a, b) => a.textContent.localeCompare(b.textContent));
    ordenado.innerHTML = ''; // Limpiamos el contenido anterior en ordenado
    elementosOrdenados.forEach((element) => {
        ordenado.appendChild(element);
    });

});