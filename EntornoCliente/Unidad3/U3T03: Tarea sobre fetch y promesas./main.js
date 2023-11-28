const baseURL = "http://localhost:3000/peliculas";

const ej1=document.getElementById("ejemplo1");
const ej2=document.getElementById("ejemplo2");
const ej3=document.getElementById("ejemplo3");



//MODELO CALLBACK
const callbackPeli = (titulo) => {
    ej1.innerText = titulo;
}

function leerPeliculaCallback(id, callback ) {
    let r=null;
    fetch(baseURL + 'peliculas/' + id).then( (resp) => {
        resp.json().then( (data) => {
            callback(data.nombre);
        });

    }).catch( error => console.log("fetch1 error:" + error) );
    
}

leerPeliculaCallback(1, callbackPeli);

//////////////////////

//MODELO Promesa .then.catch
//(async () => {
//await 

let pelicula={"nombre": "nada"};
let nombre;

fetch(baseURL + "peliculas/2").then( resp => {
    if (resp.status == 200) {
        resp.json().then(data => {
            pelicula = data;
            //ej3.innerText = "Película DENTRO: " + data.nombre;
            console.log("fetch leído");
        })
    } else {
        pelicula=null
        console.log("La película no existe");
        //ej3.innerText = "No se localiza la película."
    }
}).catch ( error => console.log("fetch2 error:" + error));

//setTimeout(()=>{
if (pelicula!= null) {
    nombre = "=>" + pelicula.nombre;
} else {
    nombre = "NO EXISTE";
}
ej2.innerText = "Película: " + nombre;