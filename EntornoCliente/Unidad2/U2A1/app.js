function validarFormulario() {
    var form = document.getElementById('miFormulario');
    if (form.checkValidity()) {
      alert('Formulario enviado correctamente');
      return true;
    } else {
      alert('Por favor, complete todos los campos correctamente.');
      return false;
    }
  }