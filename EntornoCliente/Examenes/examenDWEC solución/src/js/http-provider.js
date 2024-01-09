/**
 * Devuelve la promesa del método json, por lo que hay que usar then-catch.
 * @returns Promise
 */
const obtenerJugadores = () => {
    let url="http://localhost:3000/jugador";
    return fetch(url).then(resp => resp.json());
}

// NO USAR LO SIGUIENTE
// const actualizarJugadores = () => {
//     let url;


//     let data = {

//     }
//     fetch(url, {
//         method: '',
//         body: JSON.stringify(data),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     }).then(resp => resp.json())

// }