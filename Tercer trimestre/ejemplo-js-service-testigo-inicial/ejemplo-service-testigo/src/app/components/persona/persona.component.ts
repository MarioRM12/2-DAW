import { Component, Input } from '@angular/core';
import { ChatService, Persona, TURNO } from '../../services/chat.service';
import { NgIf } from '@angular/common';

const INACTIVO:number=0;
const ESPERANDO:number=1;
const HABLANDO:number=2;

@Component({
  selector: 'app-persona',
  standalone: true,
  imports: [NgIf],
  templateUrl: './persona.component.html',
  styleUrl: './persona.component.css'
})
export class PersonaComponent {
  @Input() persona:Persona={id:-1, nombre:""};

  estado:number=INACTIVO;



  constructor(private _chatService:ChatService){
    _chatService.evTurno.subscribe(t => {
        if(t==this.persona.id){
          // this.cambiarEstado();
          this.estado = HABLANDO;
        } else if (_chatService.cola.includes(this.persona.id)) {
          this.estado = ESPERANDO;
        } else {
          this.estado = INACTIVO;
        }
      })
  }

  estadoInactivo():boolean{ return this.estado === INACTIVO; }
  estadoEsperando():boolean{ return this.estado === ESPERANDO; }
  estadoHablando():boolean{ return this.estado === HABLANDO; }
  
  cambiarEstado():void{
    console.log(this.persona.nombre, "cambiar estado.")
    if(this.estadoInactivo()) { 
      // this.estado=ESPERANDO;
      this._chatService.pideTurno(this.persona.id);
    } else if(this.estadoEsperando()) {
      // this.estado=HABLANDO;
    } else if(this.estadoHablando()) {
      // this.estado=INACTIVO;
      this._chatService.acabarTurno(this.persona.id);
    }
  }
}
