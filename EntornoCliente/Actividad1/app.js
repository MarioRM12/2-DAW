
//LAS RESPUESTAS DE CADA FUNCION SALEN EN LA CONSOLA.


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

    console.log("Con ternaria:")
    num1 == num2 ? console.log("Los numeros son iguales") : (num1 > num2 ? console.log("El numero",num1,"es mayor que " + num2) : console.log("El numero",num2,"es mayor que " + num1));

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
        while (iterador < num1) {
            console.log(iterador)
            iterador++
        }
    }
    else
    {
        iterador = num1
        while (iterador < num2) {
            console.log(iterador)
            iterador++
        }
    }

}

function ej_5() {

    /*5.- Mostrar todos los números impares que hay entre dos números introducidos por el usuario.*/

    let num1 = parseInt(prompt("Escribe el primer número"));
    let num2 = parseInt(prompt("Escribe el segundo número"));

    if (isNaN(num1) || isNaN(num2)) {
        console.log("Por favor, introduce números válidos.");
        return;
    }

    for (let i = num1; i <= num2; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}

function ej_6() {

    /*6.- Mostrar todos los números divisores de un numero introduce en prompt*/
    
    let num = parseInt(prompt("Escribe un número para encontrar sus divisores"));

    if (isNaN(num)) {
        console.log("Por favor, introduce un número válido.");
        return;
    }

    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            console.log(i);
        }
    }
}

function ej_7() {

    /*7.- Que nos diga si un número es par o impar.
    - Ventana prompt
    - Si no es válido que nos pida de nuevo el numero*/

    let num;

    do {
        num = parseInt(prompt("Escribe un número para saber si es par o impar"));
    } while (isNaN(num));

    if (num % 2 === 0) {
        console.log("El número " + num + " es par.");
    } else {
        console.log("El número " + num + " es impar.");
    }
}

function ej_8() {

    /* 8.- Que muestre la tabla de multiplicar de un valor introducido por pantalla.*/

    let num = parseInt(prompt("Escribe un número para mostrar su tabla de multiplicar"));

    if (isNaN(num)) {
        console.log("Por favor, introduce un número válido.");
        return;
    }

    for (let i = 1; i <= 10; i++) {
        console.log(num + " x " + i + " = " + (num * i));
    }
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
