import { Injectable, EventEmitter } from '@angular/core';

export const TURNO:number=1;
export const CHAT:number=2;

@Injectable({
    providedIn: 'root'
})
export class ChatService {
    personas:Persona[]=[
        {id: 1, nombre:'Oscar'},
        {id: 2, nombre:'Alberto'},
        {id: 3, nombre:'Miguel'},
        {id: 4, nombre:'Pablo'},
    ]
    turno:number=0;
    cola:number[]=[];
    chat:string[]=[];

    evTurno:EventEmitter<number>;
    evChat: EventEmitter<number>;

    constructor(){ 
        this.evTurno= new EventEmitter();
        this.evChat= new EventEmitter();
    }

    getPersonaTurno():Persona|undefined {
        return this.personas.find(x => x.id==this.turno);
    }

    getNombreTurno():string{
        let p:Persona|undefined=this.getPersonaTurno();
        if (p === undefined) {
            return "#libre#";
        } else {
            return p.nombre;
        }
    }

    pideTurno(id:number){
        let emitEvent=false;
        console.log("Servicio: pide turno " + id);
        console.log("{id} en cola? ", this.cola.includes(id));
        if(!this.cola.includes(id)) {
            this.cola.push(id);
            emitEvent=true;
        }
        if(this.turno==0) {
            // console.log("Asignar turno");
            let x:number|undefined=this.cola.pop();
            this.turno= (x===undefined) ? 0 : x;
            emitEvent||= this.turno>0;
        }
        if (emitEvent) { 
            console.log("Service:PideTurno Evento emitido");
            this.evTurno.emit(this.turno);
        }
        console.log("Service:PideTurno:Cola ", this.cola);
        console.log("Service:PideTurno:Turno ",this.turno);
    }

    acabarTurno(id:number) {
        if(this.turno==id) {
            let x:number|undefined = this.cola.shift();
            this.turno= (x===undefined) ? 0 : x;
            this.evTurno.emit(this.turno);
        }
    }
}

export interface Persona {
    id: number,
    nombre: string
}