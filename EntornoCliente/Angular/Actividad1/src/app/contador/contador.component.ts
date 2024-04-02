import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  standalone: true,
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent {
  contador: number = 0;

  incrementarContador() {
    this.contador++;
  }
}
