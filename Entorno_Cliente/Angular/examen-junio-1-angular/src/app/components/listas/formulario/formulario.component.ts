import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  representante: any= {
    id: 0,
    nombre: "",
    partido: 0
  };
  partidos: any;
  errorDb: any;
  esNuevo: any;

  constructor(){
  }

  enviar(){
  }

  cancelar(){
  }
}
