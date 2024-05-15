import { Component, OnInit  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { UsuarioService } from './services/services.service';
import { Usuarios, usuarioVacio } from './login/interfaces';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'examenAngular2021';
  usuarioLogeado:boolean = false;
  usuario:Usuarios=usuarioVacio;

  constructor(private servicio:UsuarioService,
    private router:Router
  ){
    this.usuarioLogeado = servicio.usuarioLogeado;
    servicio.evLogin.subscribe((user) =>{ 
      this.usuarioLogeado = true;
      this.usuario = user;
    })
    let u = localStorage.getItem("usuario");
    if(u) {
      this.usuarioLogeado=true;
      this.usuario = JSON.parse(u);
      servicio.usuario = JSON.parse(u);
    };
  }

  hayUsuarioLogueado():boolean{
    return this.servicio.usuarioLogeado;
  }

  ngOnInit(): void {
  }

  cerrarSesion(){
    this.usuario = usuarioVacio;
    this.usuarioLogeado = false;
    localStorage.removeItem("usuario");
    this.servicio.evLogout.emit();
    this.router.navigate(['/login']);
  }
}
