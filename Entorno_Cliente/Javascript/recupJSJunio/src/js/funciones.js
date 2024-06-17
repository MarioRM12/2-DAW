// Aquí van las funciones usadas en la ejecución del main y en los listener.

function click_modulo(i) {

    let etqtemporal = document.getElementById("modulo" + i);

    etqtemporal.classList = "col-2 m-2 btn bg-warning";

    //quitamos los demas botones.
    for(let i=0; i<8; i++) {
        let etqtemporal2 = document.getElementById("modulo" + i);
        //etqtemporal2.removeEventListener();
    }

    moduloSeleccionado=i;

    //console.log(moduloSeleccionado);

}

function click_profesor(i) {

    let etqProfesorSelec = document.getElementById("profesor" + i);

    if (moduloSeleccionado != -1) {

        //Eliminar hijo

            let etqModuloTemp = document.getElementById("modulo" + moduloSeleccionado);

            divmodulos.removeChild(etqModuloTemp);


        //Adjuntar hijo al profesor

            let moduloNuevo = document.createElement("div");
            
            moduloNuevo.addEventListener("click", () => click_modulo(moduloSeleccionado));

            moduloNuevo.id = "modulo" + moduloSeleccionado;

            moduloNuevo.classList = "col m-2 btn btn-success";

            //h1 y span

            moduloNuevo.innerHTML = "<h1>" + modulos[moduloSeleccionado] + "</h1><span id=\"horasModulo" + i + "\">(" + horasModulos[moduloSeleccionado] + ")</span></small>";

            etqProfesorSelec.appendChild(moduloNuevo);

        //Cambios en las variables globales

            modulosAsignados.push(moduloSeleccionado);

            modulosProfesores[i].push[moduloSeleccionado];

            horasProfesores[i] += horasModulos[moduloSeleccionado];

        //Actualizamos las horas

            let horasActualizadas = document.getElementById("horas" + i);

            horasActualizadas.innerText = horasProfesores[i];

        //Comprobamos que no se ha pasado de horas

            // if(reparto.horasProfesores[i] > 18){
            //     let etqBotonSelec = document.getElementById("botonProfesor" + i);
            //     etqBotonSelec.classList = "col btn btn-secondary text-white";
            // }else if(reparto.horasProfesores[i] > 21){
            //     let etqBotonSelec = document.getElementById("botonProfesor" + i);
            //     etqBotonSelec.classList = "col btn btn-danger text-white";
            // }
            // else{
            //      
            // }

        //reiniciamos el moduloselecionado

            moduloSeleccionado = -1;

        //Guardamos en el localStorage

            reparto={moduloSeleccionado,modulosAsignados,horasProfesores,modulosProfesores,user};

            localStorage.setItem("reparto",JSON.stringify(reparto));
    }
}

//function cargar_datos(){}
//function inicializar_datos() {}

function Resetear_datos() {
    modulosProfesores = [[],[],[],[]];
    moduloSeleccionado = -1;
    modulosAsignados=[];
    horasProfesores = [0,0,0,0];
    reparto=null;
    localStorage.clear();
    renderizar_datos();
}

function renderizar_datos(){

    if (reparto) {
        
        //Renderiza profesores

            //vaciamos
            divprofesores.innerText = "";

            //Creamos las nuevas etqs
            for(let i=0; i<4; i++) {
        
                let profesorNuevo = document.createElement("div");
        
                profesorNuevo.addEventListener("click", () => click_profesor(i));
        
                profesorNuevo.id = "profesor" + i;
        
                profesorNuevo.classList = "col-2 m-2 profesor";
        
                //BOTON
        
                    const bonton = document.createElement("div");
            
                    bonton.id = "boton" + profesores[i];
            
                    bonton.classList = "col btn btn-primary text-white";
            
                    //h1 small y span
            
                    bonton.innerHTML = "<h1>" + profesores[i] + "</h1><small>Horas: <span id=\"horas" + i + "\">(" + reparto.horasProfesores[i] + ")</span></small>";
            
                    profesorNuevo.appendChild(bonton);

                //Comprobamos si tiene algun modulo

                    console.log(reparto.modulosProfesores);

                    //Añadimos los hijos

                    reparto.modulosProfesores[i].forEach(element => {

                        let moduloNuevo = document.createElement("div");
            
                        moduloNuevo.addEventListener("click", () => click_modulo(element));
            
                        moduloNuevo.id = "modulo" + element;
            
                        moduloNuevo.classList = "col m-2 btn btn-success";
            
                        moduloNuevo.innerHTML = "<h1>" + modulos[element] + "</h1><span id=\"horasModulo" + i + "\">(" + horasModulos[element] + ")</span></small>";
            
                        profesorNuevo.appendChild(moduloNuevo);
                    });
        
                divprofesores.appendChild(profesorNuevo);
        
            }
        
        //Renderiza módulos
        
            //vaciamos
            divmodulos.innerText = "";
        
        
            //Creamos las nuevas etqs
            for(let i=0; i<8; i++) {
        
                const moduloNuevo = document.createElement("div");
                
                moduloNuevo.addEventListener("click", () => click_modulo(i));
        
                moduloNuevo.id = "modulo" + i;
        
                moduloNuevo.classList = "col-2 m-2 btn btn-success";
        
                //h1 y span
        
                moduloNuevo.innerHTML = "<h1>" + modulos[i] + "</h1><span id=\"horasModulo" + i + "\">(" + horasModulos[i] + ")</span></small>";
        
                divmodulos.appendChild(moduloNuevo);
        
            }

            //Eliminamos los ya usados

                reparto.modulosAsignados.forEach(element => {
                    let etqModuloTemp = document.getElementById("modulo" + element);
                    divmodulos.removeChild(etqModuloTemp);
                });

    }else{
        //Renderiza profesores

            //vaciamos
            divprofesores.innerText = "";

            //Creamos las nuevas etqs
            for(let i=0; i<4; i++) {
        
                const profesorNuevo = document.createElement("div");
        
                profesorNuevo.addEventListener("click", () => click_profesor(i));
        
                profesorNuevo.id = "profesor" + i;
        
                profesorNuevo.classList = "col-2 m-2 profesor";
        
                //BOTON
        
                const bonton = document.createElement("div");
        
                bonton.id = "boton" + profesores[i];
        
                bonton.classList = "col btn btn-primary text-white";
        
                //h1 small y span
        
                bonton.innerHTML = "<h1>" + profesores[i] + "</h1><small>Horas: <span id=\"horas" + i + "\">(" + horasProfesores[i] + ")</span></small>";
        
                profesorNuevo.appendChild(bonton);
        
                divprofesores.appendChild(profesorNuevo);
        
            }
        
        //Renderiza módulos
        
            //vaciamos
            divmodulos.innerText = "";
        
        
            //Creamos las nuevas etqs
            for(let i=0; i<8; i++) {
        
                const moduloNuevo = document.createElement("div");
                
                moduloNuevo.addEventListener("click", () => click_modulo(i));
        
                moduloNuevo.id = "modulo" + i;
        
                moduloNuevo.classList = "col-2 m-2 btn btn-success";
        
                //h1 y span
        
                moduloNuevo.innerHTML = "<h1>" + modulos[i] + "</h1><span id=\"horasModulo" + i + "\">(" + horasModulos[i] + ")</span></small>";
        
                divmodulos.appendChild(moduloNuevo);
        
            }
    }

}

//LOGIN

function sesionComenzar(jug) {
    desktop.hidden=false;
    btnCerrar.hidden=false;
    btnLogin.hidden=true;
    etqUsuario.hidden=true;
    etqPasswd.hidden=true;
    etqSaludo.innerText=jug.nombre;
}


function consultarUsuario(){
    obtenerDatos().then(resp => {
        let users=resp;
        user=users.find((element) => element.nombre == etqUsuario.value)
        if(user){
            if(user.passwd == etqPasswd.value){
                sesionComenzar(user);
                //Guardar sesión en LocalStorage
                localStorage.setItem("user",JSON.stringify(user));
            }
        }
        else{
            alert("Usuario no encontrado");
        }
    });
}

const obtenerDatos = () => {
    let url="http://localhost:3000/users";

    if(fetch(url).then(resp => resp.json())){
        return fetch(url).then(resp => resp.json());
    }
    else{
        alert("Error de conexion a BBDD");
    }

    // try {
    //     respuesta = fetch(url).then(resp => resp.json())
    //     return respuesta;
    // } catch (error) {
    //     alert("Error de conexion a BBDD");
    //     return false;
    // }

}

function cerrarSesion(){
    btnCerrar.hidden=true;
    btnConsultar.hidden=false;
    etqUsuario.hidden=false;
    etqPasswd.hidden=false;
    etqSaludo.innerText="";
    //Limpiar sesión en LocalStorage
    localStorage.removeItem("user");
}
