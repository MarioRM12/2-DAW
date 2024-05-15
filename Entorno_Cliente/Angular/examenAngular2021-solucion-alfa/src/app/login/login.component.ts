import { JsonPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UsuarioService } from '../services/services.service';
import { Usuarios } from './interfaces';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, JsonPipe, NgIf, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  usuario: string='';
  passwd: string='';
  _acceder: boolean = true; //acceder por defecto
  datosUsuario: Usuarios=this.servicio.usuario;


  constructor(private servicio:UsuarioService,
    private router:Router
  ){
    let u = localStorage.getItem("usuario");
    if(u) {router.navigate(['/listar']);}
  }

  acceder(user: string, pass: string){
    this.servicio.consultarUsuario(user).subscribe({
      next: (data) => {
        if((data as Usuarios[]).length>0) {
          this.datosUsuario = (data as Usuarios[])[0];
          this.servicio.usuarioLogeado=true;
          localStorage.setItem("usuario", JSON.stringify(this.datosUsuario));
          this.servicio.evLogin.emit(this.datosUsuario);
          if(this._acceder){
            this.router.navigate(['/listar']);
          } else {
            this.router.navigate(['/registrar']);
          }
        }
      },
      error: () => {console.log("ERROR DB");}
    })
    
  }

  clickRegistrar(){
    this._acceder = false;
  }
  clickAcceder(){
    this._acceder = true;
  }


}
