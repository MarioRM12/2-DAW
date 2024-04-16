import { Component, OnInit } from '@angular/core';
import { ChatService, TURNO } from '../../services/chat.service';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css'
})
export class ControlComponent implements OnInit {
  turno:number=0;
  nombreTurno:string="";
  cola:number[]=[];
  
  constructor(private _chatService:ChatService) {
    _chatService.evTurno.subscribe(x => {
      console.log("Evento recibido Control: ", x);
      this.turno= x;
      this.cola = _chatService.cola;
      this.nombreTurno = _chatService.getNombreTurno();
      console.log("actualizado:", this.turno, this.cola);
    })
  }
  
  ngOnInit(): void {
    this.turno= this._chatService.turno;
    this.nombreTurno= this._chatService.getNombreTurno();
    this.cola = this._chatService.cola;
  }



  listaCola():string{
    return this.cola.join(', ');
  }



}
