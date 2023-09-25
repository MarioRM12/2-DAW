
function ej_1() {

    /*1.- Proyecto que pida dos números y que nos diga cual es mayor, menor o si son iguales.
    Realizar el ejercicio con estructuras if y con el operador condicional ternario.*/

    let num1 = prompt("Escribe el primer número");
    let num2 = prompt("Escribe el segundo número");

    if (num1 == num2) {
        console.log("Los numeros son iguales");
    }
    else if (num1 > num2) {
        console.log("El numero",num1,"es mayor que",num2);    
    }
    else
    {
        console.log("El numero",num2,"es mayor que",num1);
    }

}

function ej_2() {

    /*2.- Mejora el ejercicio anterior. Si los números no son número o son menores o iguales a cero,
    nos los vuelva a pedir. Podéis utilizar la función isNaN aunque no es necesario.*/

    let num1, num2;

    do {
        num1 = parseInt(prompt("Escribe el primer número"));
    } while (isNaN(num1) || num1 <= 0);

    do {
        num2 = parseInt(prompt("Escribe el segundo número"));
    } while (isNaN(num2) || num2 <= 0);

    if (num1 === num2) {
        console.log("Los números son iguales");
    } else if (num1 > num2) {
        console.log("El número " + num1 + " es mayor que " + num2);
    } else {
        console.log("El número " + num2 + " es mayor que " + num1);
    }

}


function ej_3() {

    /* 3.- Utilizando un bucle, mostrar la suma y la media de los números introducidos hasta
    introducir un número negativo y ahí mostrar el resultado. */

    let teclado, acumulador = 0, contador = 0

    do {
        
        teclado = parseInt(prompt("Escriba un numero >= 0"))
        contador++
        acumulador += teclado

    } while (teclado >= 0)

    console.log("La suma es",acumulador,", La media es",acumulador/contador)

}

function ej_4() {
    
    /* 4.- Hacer un programa que muestre todos los números entre dos números introducidos por el
    usuario. */

    let num1 = prompt("Escribe el primer número");
    let num2 = prompt("Escribe el segundo número");

    
    let iterador;

    if (num1 > num2) {
        iterador = num2
        while (iterador <= num1) {
            console.log(iterador)
            iterador++
        }
    }
    else
    {
        iterador = num1
        while (iterador <= num2) {
            console.log(iterador)
            iterador++
        }
    }

}

function ej_5() {
    
}

function ej_6() {
    
}

function ej_7() {
    
}

function ej_8() {
    
}

let opcion;

do {
    opcion = parseInt(prompt("Menu...\n\
    1. Ejercicio 1\n\
    2. Ejercicio 2\n\
    3. Ejercicio 3\n\
    4. Ejercicio 4\n\
    5. Ejercicio 5\n\
    6. Ejercicio 6\n\
    7. Ejercicio 7\n\
    8. Ejercicio 8\n\
    0. Salir"))
    switch (opcion){
        case 1: 
            console.log("Hola que tal")
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
    }
} while (opcion > 0);
