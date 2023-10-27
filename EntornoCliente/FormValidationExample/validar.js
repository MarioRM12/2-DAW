const formulario = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const edad = document.getElementById("edad");
const boton = document.getElementById("submit");


//PASO 1: Personalizar mensaje de validación
//Indicar mayoría de edad

function validaEdad() {

    if (edad.validity.valueMising) {
        
        edad.setCustomValidity("La edad es obligatoria")

    }else if (edad.validity.rangeOverflow) {

        edad.setCustomValidity("La edad es dmasiada cantidad");

    }else if (edad.validity.rangeUnderflow) {

        edad.setCustomValidity("Debe ser mayor de edad");

    }else{

        edad.setCustomValidity("")

    }

}

//edad.addEventListener('input', validaEdad);

//Paso 2: Configurar mensaje la primera vez
validaEdad();

//PASO 3: Segunda validación tras la automática del navegador por HTML5
// correo electrónico de dominio @gmail.com

function extraeDominio() {

    let correo = "" + email.value;
    return correo.substring(correo.indexOf('@') +1 )
}

function validaEmail() {

    
    if (edad.validity.valueMising) {
        
        edad.setCustomValidity("La edad es obligatoria")

    }else if (extraeDominio() != 'gmail.com') {
        
        email.setCustomValidity("El dominio debe ser @gmail.com");
    
    }else{

        edad.setCustomValidity("");
    }
    
}

email.addEventListener('blur', validaEmail);

function validaFormulario(event) {



}

//PASO 4: Eliminar validación automática del navegador
formulario.setAttribute('novalidate', true);


//PASO 5: Añadir validación únicamente Javascript (Requisito paso 4)

// function validaNombre() {

// }
// function validaEmail(){

// }

// function validaEdadHTML5(){

// }

// function validaEdadJS(){

// }

// function validaFormulario(event) {

// }



