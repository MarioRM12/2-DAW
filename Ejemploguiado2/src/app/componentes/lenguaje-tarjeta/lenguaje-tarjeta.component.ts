import { Component, Input } from '@angular/core';
import { Lenguaje } from '../../servicios/lenguajes.service';


@Component({
  selector: 'app-lenguaje-tarjeta',
  standalone: true,
  imports: [],
  templateUrl: './lenguaje-tarjeta.component.html',
  styleUrl: './lenguaje-tarjeta.component.css'
})
export class LenguajeTarjetaComponent {
  @Input() lenguaje:Lenguaje|null=null;
  @Input() rutaImagen:String="";
}
