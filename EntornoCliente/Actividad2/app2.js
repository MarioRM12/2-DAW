
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
    //7.- Busca al menos 2 métodos de los arreglos que encuentres interesantes y los utilizas.

    let nuevoElemento = prompt("Ingrese un nuevo elemento:");
    let posicion = prompt("Ingrese la posición en la que desea agregar el elemento:");
    
    // Convierte la posición a un número entero.
    posicion = parseInt(posicion);

    if (posicion >= 0 && posicion <= Arreglo.length) {
        Arreglo.splice(posicion, 0, nuevoElemento); // Inserta el elemento en la posición dada.
        alert("El elemento '" + nuevoElemento + "' ha sido agregado en la posición " + posicion);
        alert("El array resultante es: " + Arreglo);
    } else {
        alert("La posición especificada no es válida.");
    }

}

function ej_8() {
    //8.- Busca al menos 2 métodos de los arreglos que encuentres interesantes y los utilizas.

    if (Arreglo.length > 0) {
        let elementoEliminado = Arreglo.pop();
        alert("Elemento eliminado: " + elementoEliminado);
        alert("El array resultante es: " + Arreglo);
    } else {
        alert("El arreglo está vacío, no se puede eliminar ningún elemento.");
    }

}

function ej_9() {
    //9.- Utilizando los métodos, que devuelva el array creado de manera que esté ordenado
    //alfabéticamente.

    Arreglo.sort();
    alert("El arreglo ordenado alfabéticamente es: " + Arreglo);

}

function ej_10() {
    //10.- Utilizando los métodos, que devuelva el array creado de manera que esté ordenado al
    //contrario.

    Arreglo.reverse();
    alert("El arreglo invertido es: " + Arreglo);

}

function ej_11() {
    //11.- Investiga para encontrar un método dentro de la librería underscore.js que nos desordene
    //los elementos de un arreglo. Este arreglo desordenado lo almacenará en una copia. Muestra
    //que se vea el arreglo ordenado y desordenado.

    // Primero, asegúrate de incluir la librería underscore.js en tu proyecto.

    // Desordenar el arreglo usando _.shuffle
    let arregloDesordenado = _.shuffle(Arreglo);

    alert("Arreglo original: " + Arreglo);
    alert("Arreglo desordenado: " + arregloDesordenado);

    Arreglo = arregloDesordenado;

}

do {
    opcion = parseInt(prompt("Menu...\n\
    1. Ejercicio 1 Muestra el array\n\
    2. Ejercicio 2 Añade un elemento al final\n\
    3. Ejercicio 3 Añade un elemento al principio\n\
    4. Ejercicio 4 Muestra el array y su longuitud\n\
    5. Ejercicio 5 Eliminar un elemento\n\
    6. Ejercicio 6 Posicion de un elemento\n\
    7. Ejercicio 7 Ingresar elemento en posicion deseada\n\
    8. Ejercicio 8 Elimina el elemento en la ultima posicion\n\
    9. Ejercicio 9 Ordenar alfabeticamente el array\n\
    10. Ejercicio 10 Invertir el array\n\
    11. Ejercicio 11 Desordenar el array\n\
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