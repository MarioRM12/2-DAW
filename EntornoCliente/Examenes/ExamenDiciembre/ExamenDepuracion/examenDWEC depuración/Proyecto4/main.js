//Debe mostrar en las casillas: dos, tres, uno.

const lista = ['dos', 'tres', 'uno'];

let indice = 1;

for(let item of lista){
    document.getElementById("casilla" + indice).innerText = item;
    indice++;
}