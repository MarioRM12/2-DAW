
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

}


function ej_3() {
    
}

function ej_4() {
    
}

function ej_5() {
    
}

function ej_6() {
    
}

function ej_7() {
    
}

function ej_8() {
    
}

do {
    let opcion = prompt("Menu...")
    switch (opcion){
        case 1: ej_1();
        break;
        case 2: ej_2();
        break;
        case 3: ej_3();
        break;
        case 4: ej_4();
        break;
        case 5: ej_5();
        break;
        case 6: ej_6();
        break;
        case 7: ej_7();
        break;
        case 8: ej_8();
        break;
    }
} while (opcion > 0);
