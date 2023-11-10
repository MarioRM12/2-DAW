const form = document.getElementById("myForm");
const email = document.getElementById("mail");
const emailError = document.getElementById("emailError");

form.addEventListener("submit", function (event) {
if (!email.checkValidity()) {
    event.preventDefault();
    validateEmail();
}
});

function validateEmail() {
    
    if (email.validity.valueMissing) {
        emailError.textContent = "Please enter an email address.";
    } else if (email.validity.tooShort) {
        emailError.textContent = "Email address must be at least 10 characters.";
    } else if (email.validity.typeMismatch) {
        emailError.textContent = "Please enter a valid email address.";
    } else {
        // Additional custom validation for email format
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email.value)) {
        emailError.textContent = "Please enter a valid email address.";
        } else {
        // Clear error message if all conditions are met
        emailError.textContent = "";
        }
    }
}