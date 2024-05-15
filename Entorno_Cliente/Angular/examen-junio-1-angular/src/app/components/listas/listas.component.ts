import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApilistasService } from './service/apilistas.service';
import { Partido, Representante } from './interfaces/listas.interfaces';

interface Lista {
  partido: Partido,
  representantes: Representante
}

@Component({
  selector: 'app-listas',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './listas.component.html',
  styleUrl: './listas.component.css'
})
export class ListasComponent implements OnInit{

  partidos: Partido[] = [];
  listas: any;
  errorDB: any;

  constructor(private lista: ApilistasService){
  }

  eliminar(){
  }


  // Falta algun detalle para que funcione
  //
  ngOnInit(): void {
  //   this.lista.getPartidos()
  //   .subscribe(
  //     (partidos) => {
  //       this.partidos = partidos });
  }

}
