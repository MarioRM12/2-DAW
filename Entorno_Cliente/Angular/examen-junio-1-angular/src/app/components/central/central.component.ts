import { Component, EventEmitter, Output} from '@angular/core';
import { SedeComponent } from './sede/sede.component';
import { CommonModule, NgFor, PercentPipe } from '@angular/common';
import { Sede } from './sede/sede.interface';

const SEDES:any[]=[
  { id:1, nombre: "Almería", representantes_1: 5, representantes_2: 2 },
  { id:2, nombre: "Granada", representantes_1: 3, representantes_2: 4 },
  { id:3, nombre: "Málaga", representantes_1: 4, representantes_2: 3 },
  { id:4, nombre: "Cádiz", representantes_1: 2, representantes_2: 5 },
  { id:5, nombre: "Huelva", representantes_1: 0, representantes_2: 7 },
  { id:6, nombre: "Sevilla", representantes_1: 1, representantes_2: 6 },
  { id:7, nombre: "Córdoba", representantes_1: 7, representantes_2: 0 },
  { id:8, nombre: "Jaén", representantes_1: 6, representantes_2: 1 }
];

@Component({
  selector: 'app-central',
  standalone: true,
  imports: [CommonModule, SedeComponent, NgFor],
  templateUrl: './central.component.html',
  styleUrl: './central.component.css'
})
export class CentralComponent {
  @Output() sedes:any = SEDES;
  resultado_partido_1: number=0;
  resultado_partido_2: number=0;
  porcentaje: number=0;
  contador_sedes: number=0;
  total_sedes: number= 8;

  @Output() reseteo: EventEmitter<any> = new EventEmitter<any>();

  constructor(){
  }

  computarSede(sede: Sede, i:number){

    this.resultado_partido_1 = this.resultado_partido_1 + sede.representantes_1 ;
    this.resultado_partido_2 = this.resultado_partido_2 + sede.representantes_2;

    this.contador_sedes= this.contador_sedes + 1;


    this.porcentaje = (this.contador_sedes / this.total_sedes) * 100;

    console.log("SedeComputada:", sede.nombre);
  }

  resetear(){

    this.resultado_partido_1=0;
    this.resultado_partido_2=0;
    this.porcentaje=0;
    this.contador_sedes=0;
    this.total_sedes= 8;

    this.reseteo.emit();

  }

}
