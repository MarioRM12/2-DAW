
let Arreglo = ["hola","paco","que tal"];

function ej_1() {
    //1.- Crea un documento con un arreglo llamado actividad1 que contenga 3 elementos.
    alert(Arreglo);
}

function ej_2() {
    //2.- Añade un cuarto elemento al final del arreglo utilizando los métodos de los arreglos.

    let nuevo = prompt("Dime un nuevo elemento para añadir al final del array");

    Arreglo.push(nuevo);

    alert(Arreglo);
    
}

function ej_3() {
    //3.- Añade un quinto elemento al comienzo del arreglo utilizando los métodos de los arreglos.
    //Que guarde en una variable el nuevo tamaño del arreglo.

    let nuevo = prompt("Dime un nuevo elemento para añadir al principio del array");

    Arreglo.unshift(nuevo);

    alert(Arreglo);

}

function ej_4() {
    //4.- Que muestre por pantalla el arreglo y el tamaño.

    alert("El array es: " + Arreglo + "\n Su longuitud es: " + Arreglo.length);

}

function ej_5() {
    //5.- Que solicite por pantalla los datos necesarios para eliminar varios elementos de un array
    //desde una posición concreta.

    let elementoAEliminar = prompt("El array es: " + Arreglo + "\nIntroduzca el elemento a eliminar");
    
    let newArray = Arreglo.filter(item => item !== elementoAEliminar);
    
    Arreglo = newArray;

    alert(Arreglo);

}

function ej_6() {
    //6.- Que solicite por pantalla un valor y que devuelva el índice del arreglo donde se encuentra
    //ese valor.

    let valorBuscado = prompt("Ingrese el elemento que desea buscar:");

    let indice = Arreglo.indexOf(valorBuscado);
    
    if (indice == -1) {
        alert("El elemento '" + valorBuscado + "', no se encuentra en el array")
    }
    else {
        alert("El elemento '" + valorBuscado + "', se encuentra en la posición " + indice);
    }
}

function ej_7() {
    //8.- Busca al menos 2 métodos de los arreglos que encuentres interesantes y los utilizas.


}

function ej_8() {
    //8.- Busca al menos 2 métodos de los arreglos que encuentres interesantes y los utilizas.

    //Arreglo.

}

function ej_9() {
    //9.- Utilizando los métodos, que devuelva el array creado de manera que esté ordenado
    //alfabéticamente.
}

function ej_10() {
    //10.- Utilizando los métodos, que devuelva el array creado de manera que esté ordenado al
    //contrario.
}

function ej_11() {
    //11.- Investiga para encontrar un método dentro de la librería underscore.js que nos desordene
    //los elementos de un arreglo. Este arreglo desordenado lo almacenará en una copia. Muestra
    //que se vea el arreglo ordenado y desordenado.
}

do {
    opcion = parseInt(prompt("Menu...\n\
    1. Ejercicio 1 Muestra el array\n\
    2. Ejercicio 2 Añade un elemento al final\n\
    3. Ejercicio 3 Añade un elemento al principio\n\
    4. Ejercicio 4 Muestra el array y su longuitud\n\
    5. Ejercicio 5 Eliminar un elemento\n\
    6. Ejercicio 6 Posicion de un elemento\n\
    7. Ejercicio 7 -\n\
    8. Ejercicio 8\n\
    8. Ejercicio 9\n\
    8. Ejercicio 10\n\
    8. Ejercicio 11\n\
    0. Salir"))
    switch (opcion){
        case 1:
            ej_1();
        break;
        case 2: 
            ej_2();
        break;
        case 3: 
            ej_3();
        break;
        case 4: 
            ej_4();
        break;
        case 5:
            ej_5();
        break;
        case 6:
            ej_6();
        break;
        case 7:
            ej_7();
        break;
        case 8:
            ej_8();
        break;
        case 9:
            ej_9();
        break;
        case 10:
            ej_10();
        break;
        case 11:
            ej_10();
        break;
    }
} while (opcion > 0);