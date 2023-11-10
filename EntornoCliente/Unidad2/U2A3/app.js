const form = document.getElementById("myForm");
const email = document.getElementById("mail");

form.addEventListener("submit", validateEmail);

function validateEmail(event) {
    
    let test = true;
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (email.validity.valueMissing) {
        email.setCustomValidity("El email es obligatorio");
        test = false;
    } else if (email.validity.tooShort) {
        email.setCustomValidity("El email debe contener al menos 10 caracteres");
        test = false;
    } else if (!emailRegex.test(email.value)) {
        email.setCustomValidity("El email debe ser de este formato: a@a.aa");
        test = false;
    } else {
        email.setCustomValidity("");
        test = true;
    }

    // Decidir si enviar el formulario
    if (!test) {
        event.preventDefault();
    }

    if (test) {
        alert("Se ha enviado correctamente");
    }

    return test;
}
