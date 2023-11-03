const formulario = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const edad = document.getElementById("edad");
const boton = document.getElementById("submit");

const nombreError = document.querySelector("#nombreError span");
const emailError = document.querySelector("#emailError span");
const edadError = document.querySelector("#edadError span");


//PASO 1: Personalizar mensaje de validación

//Indicar mayoría de edad
// function validaEdad() {
//     if (edad.validity.valueMissing) {
//         edad.setCustomValidity("La edad es obligatoria");
//     } else if (edad.validity.rangeOverflow) {
//         edad.setCustomValidity("La edad es damasiada cantidad");
//     } else if (edad.validity.rangeUnderflow) {
//         edad.setCustomValidity("Debe ser mayor de edad");
//     } else {
//         edad.setCustomValidity("");
//     }
// }
edad.addEventListener('blur',validaEdad)

//Paso 2: Configurar mensaje la primera vez
validaEdad();


//PASO 3: Segunda validación tras la automática del navegador por HTML5
//correo electrónico de dominio @gmail.com

function extraeDominio() { //Se usa en paso 3 y paso 5.
    let correo = "" + email.value;
    return correo.substring(correo.indexOf('@')+1);
}

// function validaEmail(){
//     if (email.validity.valueMissing) {
//         email.setCustomValidity("El email es obligatorio");
//     } else if (extraeDominio() != "gmail.com") {
//         email.setCustomValidity("Debe terminar en @gmail.com");
//     } else {
//         email.setCustomValidity("");
//     }
// }

email.addEventListener('blur',validaEmail)
validaEmail();

function validaFormulario(event) {

}

//PASO 4: Eliminar validación automática del navegador
formulario.setAttribute('novalidate',true);


//PASO 5: Añadir validación únicamente Javascript (Requisito paso 4)

function validaNombre() {
    let test = true;
    if (!nombre.value.length>0) {
        nombre.setCustomValidity("El nombre es obligatorio");
        test = false;
    } else {
        nombre.setCustomValidity("");
    }
    return test;
}

function validaEmail(){
    let test = true;
    if (email.validity.valueMissing) {
        email.setCustomValidity("El email es obligatorio");
        test = false;
    } else if (extraeDominio() != "gmail.com") {
        email.setCustomValidity("Debe terminar en @gmail.com");
        test = false;
    } else {
        email.setCustomValidity("");
        test = true;
    }
    return test;
}

function validaEdad() {
    let test = true;
    if (edad.validity.valueMissing) {
        edad.setCustomValidity("La edad es obligatoria");
        test = false;
    } else if (edad.validity.rangeOverflow) {
        edad.setCustomValidity("La edad es damasiada cantidad");
        test = false;
    } else if (edad.validity.rangeUnderflow) {
        edad.setCustomValidity("Debe ser mayor de edad");
        test = false;
    } else {
        edad.setCustomValidity("");
        test = true;
    }
    return test;
}

function validaEdadJS(){

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
    if (!validaEdad()) {
        edadError.innerText = edad.validationMessage;
        edadError.classList.add("active");
        test = false;
    } else {
        edadError.className = "error";
        edadError.innerText = "";
    }
    //Decidir si enviar el formulario
    if (!test) {
        event.preventDefault();
    }
    return test;
}

formulario.addEventListener('submit',validaFormulario);
