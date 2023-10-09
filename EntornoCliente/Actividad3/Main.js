/*
RELACIÓN DE ACTIVIDADES JAVASCRIPT Y EL DOM
1.- Proyecto que pida dos números y que nos diga cual es mayor, menor o si son iguales. En
este caso, tendrá que cumplir lo siguientes requisitos:
 Mostrará tanto los dos números como el mensaje en el documento html.
 Tendrá un icono que pedirá los valores tantas veces como hagamos clic sobre él.
 Mostrará a la derecha un icono según los resultados:
o Si es mayor pondrá el icono:

o Si es menor pondrá el icono:

o Si es igual pondrá el icono:
 Para la creación de los iconos utilizaremos un arreglo, es decir, el nombre de las
imágenes estará almacenado en un arreglo, pero sin la extensión.
 Realizar el ejercicio con el operador condicional ternario.
 Los estilos del documento serán los adecuados para que se muestren en una única fila
todos los valores.
 Que tenga un control de errores para que los números introducidos sean correctos. (Si
los números no son número o son menores o iguales a cero) En caso de error, que
muestre un mensaje emergente de alerta y vuelva a pedir los datos.
*/


const iconos = ["si.png", "boton-x.png", "igual.png"];

const calcularBoton = document.getElementById("calcular");
const valor1Span = document.getElementById("valor1");
const valor2Span = document.getElementById("valor2");
const resultadoSpan = document.getElementById("resultado");
const iconoImg = document.getElementById("icono");

calcularBoton.addEventListener("click", () => {
  const numero1 = parseFloat(document.getElementById("numero1").value);
  const numero2 = parseFloat(document.getElementById("numero2").value);

  if (isNaN(numero1) || isNaN(numero2) || numero1 <= 0 || numero2 <= 0) {
    alert("Por favor, ingrese números válidos y mayores que cero.");
    return;
  }

  valor1Span.textContent = numero1;
  valor2Span.textContent = numero2;

  if (numero1 > numero2) {
    resultadoSpan.textContent = "Mayor";
    iconoImg.src = iconos[0];
  } else if (numero1 < numero2) {
    resultadoSpan.textContent = "Menor";
    iconoImg.src = iconos[1];
  } else {
    resultadoSpan.textContent = "Igual";
    iconoImg.src = iconos[2];
  }
});