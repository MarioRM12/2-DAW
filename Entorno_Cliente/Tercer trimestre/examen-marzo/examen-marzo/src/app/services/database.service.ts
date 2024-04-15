import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

//ENDPOINTS
const GRUPOSURL="http://localhost:3000/grupos"
const EQUIPOSURL="http://localhost:3000/equipos"
const USUARIOSURL="http://localhost:3000/usuarios"

const HTTPOPTIONS = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor() { 
  }

  //Métodos (incluir tipos correctos en los argumentos)
  getGrupos():Observable<Object>{
  }

  getEquipos():Observable<Object>{
  }

  getEquiposGrupo(g:any):Observable<Object>{
  }

  getUsuario(id:any):Observable<Object>{
  }

  getUsuarios():Observable<Object>{
  }

  getUsuariosEquipo(e:any):Observable<Object>{
  }

  crearUsuario(u:any):Observable<Object>{
  }

  actualizarUsuario(u:any):Observable<Object>{
  }

   deleteUsuario(u:any):Observable<any>{
   }
}

//INTERFACES
export interface Grupo {
  id: number,
  nombre: string
}

export interface Equipo {
  id: number,
  nombre: string,
  presupuesto: number,
  grupo: number 
}

export interface Usuario {
  id: number,
  nombre: string,
  passwd: string,
  equipo: number
}