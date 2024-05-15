import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/services.service';
import { Usuarios } from '../login/interfaces';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-listar',
  standalone: true,
  imports:[NgFor, FormsModule],
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css'
})
export class ListarComponent implements OnInit {

  usuarios:Usuarios[]=[];

  constructor(private servicio:UsuarioService){
  
  }

  ngOnInit(): void {
    let esAdmin=this.servicio.usuario.rol=="administrador";
    this.servicio.getUsuarios('',esAdmin).subscribe({
      next: (data) => this.usuarios=data as Usuarios[]
      ,
      error: () => console.log("Error DB")
    })
  }

  filtrar(cadena:string){
    let esAdmin=this.servicio.usuario.rol=="administrador";
    console.log(esAdmin);
    this.servicio.getUsuarios(cadena,esAdmin).subscribe({
      next: (data) => this.usuarios=data as Usuarios[]
      ,
      error: () => console.log("Error DB")
    })
  }
}
