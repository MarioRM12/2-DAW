import { Component } from '@angular/core';
import { Lenguaje } from '../../servicios/lenguajes.service';

@Component({
  selector: 'app-lenguaje',
  standalone: true,
  imports: [],
  templateUrl: './lenguaje.component.html',
  styleUrl: './lenguaje.component.css'
})
export class LenguajeComponent {
  lenguaje:Lenguaje;
}
