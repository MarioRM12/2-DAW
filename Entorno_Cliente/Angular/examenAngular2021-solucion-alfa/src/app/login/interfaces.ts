export interface Usuarios {
    id:                   number;
    login:                string;
    nombreCompleto:       string;
    passwd:               string;
    email:                string;
    rol:                  string;
    telefono:             string;
}

export let usuarioVacio= {
        id:0,
        login:"",
        nombreCompleto:"",
        passwd:"",
        rol:"",
        email:"",
        telefono:"",
}

