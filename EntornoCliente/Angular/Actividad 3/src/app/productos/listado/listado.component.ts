import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

import { Producto } from '../productos.module';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {
  productos: Producto[]= [
    {nombre: "Bolígrafo", precio: 2.50, categoria: "Papelería"},
    {nombre: "Martillo", precio: 5, categoria: "Ferretería"},
    {nombre: "Cuaderno", precio: 3.50, categoria: "Papelería"},
    {nombre: "Regla", precio: 1.50, categoria: "Papelería"},
    {nombre: "Destornillador", precio: 4.50, categoria: "Ferretería"}
  ]
  eliminado: Producto|null = null;

  eliminar(producto:string):void {
    let pos=this.productos.findIndex((item)=> item.nombre == producto );
    // console.log("Eliminando " + producto + " de posición " + pos)
    if(pos>=0) {
      this.eliminado = this.productos[pos];
      this.productos.splice(pos, 1);
    }
    setTimeout(() => {
      this.eliminado = null;
    }, (1000));
  }
}
