import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Usuarios } from '../interfaces';
import { UsuarioService } from '../../services/services.service';


@Component({
  selector: 'app-login-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent  {
 
 //usuarioLogeado:boolean=false;
  miFormulario:FormGroup=this.fb.group({
      login:['', [Validators.required, Validators.minLength(3)]],
      passwd:['', Validators.required]
  })
  router: any;
  
  comprobarUsu(){
      // this.varUsu.consultarUsuario();
      console.log(this.miFormulario.value);
      this.usuarioService.consultarUsuario(this.miFormulario.value)
        .subscribe(result => { 
          if(result.length === 1){
            console.log('hay resultado');
            this.usuarioService.usuarioLogeado=true;
            this.ruta.navigate(['/usuarios']);
            this.usuarioService.usuarioActivo=result;
            localStorage.setItem('usuario', JSON.stringify(result));
          }
          console.log(result)
        
        });
      
  }

  campoEsValido(campo:string){
      return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched;
  }

   constructor ( private fb:FormBuilder, private usuarioService:UsuarioService, private ruta:Router) {
     
    }
}
