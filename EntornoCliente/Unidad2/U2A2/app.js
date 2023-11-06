const form = document.getElementById("miformulario");
const nombre = document.getElementById("nombre");
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
    } else if (extraeDominio() != "vegasoft.com") {
        email.setCustomValidity("Debe terminar en @gmail.com");
        test = false;
    } else {
        email.setCustomValidity("");
        test = true;
    }
    return test;
}

function validanumero() {
    let test = true;
    if (numero.validity.valueMissing) {
        numero.setCustomValidity("La numero es obligatoria");
        test = false;
    } else if (numero.validity.rangeOverflow) {
        numero.setCustomValidity("La numero es damasiada cantidad");
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

function validanumeroJS(){

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
    return test;
}

formulario.addEventListener('submit',validaFormulario);

function validarFormulario() {
    if (form.checkValidity()) {
      alert('Formulario enviado correctamente');
      return true;
    } else {
      alert('Por favor, complete todos los campos correctamente.');
      return false;
    }
}