import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

  mostrar:boolean = true;

  milista:string[] = ['Carlos', 'Miguel', 'Juan', 'Pedro'];

  mostrarOcultar() {
    this.mostrar = !this.mostrar;
  }
}
