import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  @Output() resultado = new EventEmitter<number>();

  operandoA:number = 0;
  operandoB:number = 0;

  sumar():void{
    let resultado = this.operandoA + this.operandoB;
    this.resultado.emit(resultado);
  }

}
