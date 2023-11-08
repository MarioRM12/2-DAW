const formulario = document.getElementById("miFormulario");
const nombre = document.getElementById("uname");
const email = document.getElementById("email");
const numero = document.getElementById("phone");
const boton = document.getElementById("submit");

const nombreError = document.querySelector("#NombreError span");
const emailError = document.querySelector("#EmailError span");
const numeroError = document.querySelector("#PhoneError span");


function extraeDominio() {
    let correo = "" + email.value;
    return correo.substring(correo.indexOf('@')+1);
}

formulario.setAttribute('novalidate',true);

function validaNombre() {

    let test = true;
    let regex = /^[a-z]\.([a-z]|[0-9])+$/;

    if (nombre.validity.valueMissing) {

        nombre.setCustomValidity("El nombre es obligatorio");
        test = false;

    }else if (!regex.test(nombre.value)) {

        nombre.setCustomValidity("El nombre ha de tener 1 caracter, seguido de un punto, y a continuación 3 o mas caracteres (Max 20 en total).");
        test = false;

    }else {

        nombre.setCustomValidity("");

    }
    return test;
}

function validaEmail(){

    let test = true;
    let regex = /^[\w\d]+@vegasoft\.com$/;

    if (email.validity.valueMissing) {

        email.setCustomValidity("El email es obligatorio");
        test = false;

    } else if (!regex.test(email.value)) {

        email.setCustomValidity("Debe haber contenido antes del '@' y terminar en 'vegasoft.com'");
        test = false;

    } else {

        email.setCustomValidity("");

    }
    return test;
}

function validanumero() {

    let test = true;
    let regex = /^((\d{3}[ \.\-]?){2}\d{4})?$/;

    if (numero.validity.valueMissing) {

        numero.setCustomValidity("El numero es obligatorio");
        test = false;

    }else if (!regex.test(numero.value)) {
        
        numero.setCustomValidity("El numero debe tener alguno de estos formatos: '333-333-3333' , '333.333.3333' , '333 333 3333' , '3333333333'");
        test = false;

    }
     else if (numero.validity.rangeOverflow) {

        numero.setCustomValidity("El numero es damasiado grande");
        test = false;

    } else if (numero.validity.rangeUnderflow) {

        numero.setCustomValidity("Debe ser mayor de numero");
        test = false;

    } else {
        
        numero.setCustomValidity("");
        test = true;

    }
    return test;

}


function validaFormulario(event) {

    let test = true;
    
    if (!validaNombre()) {

        nombreError.innerText = nombre.validationMessage;;
        nombreError.classList.add("active");
        test = false;

    } else {

        nombreError.className = "error";
        nombreError.innerText = "";
        
    }
    if (!validaEmail()) {

        emailError.innerText = email.validationMessage;
        emailError.classList.add("active");
        test = false;

    } else {

        emailError.className = "error";
        emailError.innerText = "";

    }
    if (!validanumero()) {

        numeroError.innerText = numero.validationMessage;
        numeroError.classList.add("active");
        test = false;

    } else {

        numeroError.className = "error";
        numeroError.innerText = "";

    }
    //Decidir si enviar el formulario
    if (!test) {

        event.preventDefault();

    }

    if (test) {
        
        alert("Se ha enviado correctamente");

    }

    return test;
}

formulario.addEventListener('submit',validaFormulario);