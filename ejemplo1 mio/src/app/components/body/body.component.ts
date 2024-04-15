import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

  mostrar:boolean = true;

  mostrarOcultar(){

    this.mostrar = !this.mostrar

  }

}
