import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuarios } from '../login/interfaces';

const URL="http://localhost:3000/usuario"

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  usuarioLogeado: boolean= false;
  usuarioActivo: boolean= false;
  evLogout:EventEmitter<null>=new EventEmitter();
  evLogin:EventEmitter<Usuarios>=new EventEmitter();

  usuario:Usuarios={
    id:0,
    login:"",
    nombreCompleto:"",
    passwd:"",
    rol:"",
    email:"",
    telefono:"",
  }

  constructor(private http:HttpClient) { }

  consultarUsuario(user:string):Observable<Object>{
    let url:string= URL + "?login=" + user;
    return this.http.get(url);
  }

  getUsuarios(cadena:string="", esAdministrador:boolean=false):Observable<Object>{
    let url:string= URL + "?_limit=10";
    if(!esAdministrador){
      url=url + "&rol=cliente";
    }
    if(cadena.length>0){
      url=url + "&nombreCompleto_like=" + cadena
    }
    console.log(url);
    return this.http.get(url);
  }

  registrarUsuario(user:Usuarios){
    let url=URL;
    return this.http.post(url,user);
  }

}
