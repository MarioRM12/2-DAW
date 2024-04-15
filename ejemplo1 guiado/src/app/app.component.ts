import { Component } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BodyComponent } from './components/body/body.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NgIf,
     RouterOutlet, HeaderComponent, FooterComponent,
     BodyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title:string = 'Carlos';
  mostrar:boolean =true ;
  lista:string[] = ["uno", "dos", "tres"];

  cambiar(){
    this.mostrar = !this.mostrar;
  }

}
