import { Component } from '@angular/core';
import { HijoComponent } from '../hijo/hijo.component';

const DIAS:string[]=['lunes', 'martes', 'miércoles', 'jueves', 'viernes'];
const ESTACIONES:string[] = ['primavera', 'verano', 'otoño', 'invierno'];

@Component({
  selector: 'app-padre',
  standalone: true,
  imports: [HijoComponent],
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css'
})
export class PadreComponent {
  
  seleccionado_dias:boolean=true;
  botones_por_pulsar:string[] = [];
  botones_pulsados:string[] = [];


  constructor(){

  }

}
