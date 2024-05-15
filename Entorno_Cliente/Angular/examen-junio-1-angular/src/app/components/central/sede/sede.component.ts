import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import { CentralComponent } from '../central.component';
import { Sede } from './sede.interface';

@Component({
  selector: 'app-sede',
  standalone: true,
  imports: [CentralComponent, NgIf, NgClass],
  templateUrl: './sede.component.html',
  styleUrl: './sede.component.css'
})
export class SedeComponent implements OnInit {

  enviado: Boolean = true;
  @Input() reseteo: EventEmitter<any> = new EventEmitter<any>();
  @Input() sede: Sede = { id: 0, nombre: '', representantes_1: 0, representantes_2: 0 };
  @Input() i: number = -1;
  @Output() evTarjetaSeleccionada: EventEmitter<Sede> = new EventEmitter<Sede>();

  constructor() {

  }

  enviarResultado() {
    this.evTarjetaSeleccionada.emit(this.sede);
    this.enviado = false;
  }

  ngOnInit():void {
    this.reseteo.subscribe(() => {this.enviado = true})
  }
}
