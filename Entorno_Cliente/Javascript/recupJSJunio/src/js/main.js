divprofesores = document.getElementById("profesores");
divmodulos = document.getElementById("modulos");
btnLogin = document.getElementById("botonLogin");
btnCerrar = document.getElementById("botonCerrar");
btnReset = document.getElementById("reset");
etqUsuario = document.getElementById("username");
etqPasswd = document.getElementById("password");
etqSaludo = document.getElementById("nombre_usuario");
desktop = document.getElementById("desktop");

//Aquí van las ejecuciones iniciales al cargar la página.

//COMENTAR PARA CORREGIR EL RESTO DEL EXAMEN
desktop.hidden = true;

reparto = JSON.parse(localStorage.getItem("reparto"));
renderizar_datos();


//EVENTLISTENER DE BOTONES
btnLogin.addEventListener("click",() => consultarUsuario());
btnCerrar.addEventListener("click",() => cerrarSesion());
btnReset.addEventListener("click", () => Resetear_datos());