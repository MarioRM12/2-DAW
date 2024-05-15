import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};
const URLHOST = "http://localhost:3000/"
const URLPARTIDOS = URLHOST + "partidos";
const URLREPRESENTANTES = URLHOST + "representantes";

@Injectable({
  providedIn: 'root'
})
export class ApilistasService {

  constructor(private http:HttpClient) { 
  }

  getPartidos():Observable<Object>{
    return this.http.get(URLPARTIDOS);
  }

  getRepresentante(){
    return this.http.get(URLREPRESENTANTES);
  }

  getRepresentantesPartido(){
    return this.http.get(URLPARTIDOS);
  }

  nuevoRepresentante(){
  }

  modificarRepresentante(){
  }

  deleteRepresentante(){
  }
}
