//Aquí van las declaraciones de variables globales al resto de archivos e inicializaciones básicas.

let profesores = ["Carlos", "Jose Manuel", "Miguel", "Manuel"];
let horasProfesores = [0,0,0,0];

let modulos = ["DWEC", "BBDD", "DWES", "DIW", "LM", "SI", "ED", "DAW"];
let horasModulos = [6, 7, 8, 6, 5, 4, 7, 8];

let modulosAsignados=[]; //guarda todos los módulos asignados a cualquier profesor

let modulosProfesores = [[],[],[],[]]; //el índice 0 son los módulos de Carlos, 1 de Jose Manuel, ...
let moduloSeleccionado = -1;

let user={
    id: 0,
    nombre: "",
    password: ""
}

let reparto={}
