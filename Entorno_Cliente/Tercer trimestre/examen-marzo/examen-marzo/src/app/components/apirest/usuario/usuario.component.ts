import { Component } from '@angular/core';
import { DatabaseService, Usuario } from '../../../services/database.service';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {

  usuario={
    id: -1,
    nombre: "",
    equipo: -1,
    passwd: ""
  };

  equipos=[];

  esNuevo=true;
  siguienteIdUsuario:number=1;

  constructor(private dbService:DatabaseService){
   
    dbService.getUsuarios().subscribe(data => {
          this.siguienteIdUsuario=(data as Usuario[]).map(u => u.id).reduce((a,b) => (a > b) ? a : b) + 1;
        })
      }

  enviar(formulario:any){

  }

  cancelar(){
  }
}
