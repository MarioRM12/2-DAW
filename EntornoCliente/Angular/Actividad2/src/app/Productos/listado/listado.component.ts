import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [NgFor],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {

  productos:any[] = [
    {nombre: "Logitech g502",precio: "50",categoria: "Raton"},
    {nombre: "Logitech G Pro",precio: "50",categoria: "Raton"},
    {nombre: "Logitech g502",precio: "50",categoria: "Raton"},
    {nombre: "Logitech g502",precio: "50",categoria: "Raton"}
  ];

  Eliminar(position:number){
    this.productos = this.productos.splice(position,1);
  }

  Desechados:any[] = [
  ];

}
