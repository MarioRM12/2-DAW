import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/services.service';
import { FormsModule, NgForm } from '@angular/forms';
import { Usuarios, usuarioVacio } from '../login/interfaces';
import { JsonPipe } from '@angular/common';
@Component({
  selector: 'app-registrar',
  imports:[FormsModule, JsonPipe],
  standalone: true,
  templateUrl: './registrar.component.html',
  styleUrl: './registrar.component.css'
})
export class RegistrarComponent implements OnInit {

  usuarioNuevo:Usuarios=usuarioVacio;
  usuarioLogeado:boolean=false;
  usuarioAdmin:boolean=false;

  constructor(private router:Router,
      private servicio:UsuarioService
  ) {  }

  ngOnInit(): void {
    this.usuarioLogeado=this.servicio.usuarioLogeado;
    this.usuarioAdmin=(this.servicio.usuario.rol=="administrador");
    if(!this.usuarioAdmin) this.usuarioNuevo.rol="cliente";
  }

  registrar(f:NgForm){
    console.log(f);
    this.servicio.registrarUsuario(this.usuarioNuevo).subscribe({
      next: (data) => this.router.navigate(['/listar'])
      ,
      error: () => console.log("Error DB")
    });
  }
  
}
