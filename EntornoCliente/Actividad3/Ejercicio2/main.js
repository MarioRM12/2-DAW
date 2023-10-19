

/*2.- Utilizando un bucle, mostrar la suma y la media de los números introducidos hasta
introducir un número negativo y ahí mostrar el resultado. En este caso, tendrá que cumplir lo
siguientes requisitos:
 Que los resultados que se muestren sean en el html.
 Una vez que se muestre el primer resultado, añadir un botón por si el usuario quiere
volver a introducir más valores.
 Por cada vez que generemos una suma y media de valores se crea una fila en el
documento html con los resultados.*/

const PedirvaloresBoton = document.getElementById("boton");
const sumahtml = document.getElementById("Suma");
const mediahtml = document.getElementById("Media");

PedirvaloresBoton.addEventListener("click", () => {
  let contador = 0;
  let sumatorio = 0;
  let introducido = 0;
  let media = 0;

  do {
      introducido = parseInt(prompt("Introduzca un número válido"));

    if (!isNaN(introducido) && introducido >= 0) {
      contador++;
      sumatorio += introducido;
    }
  } while (introducido >= 0);

  if (contador > 0) {
    media = (sumatorio/contador);
  }

  sumahtml.innerText = "Suma: " + sumatorio;
  mediahtml.innerText = "Media: " + media;

});
