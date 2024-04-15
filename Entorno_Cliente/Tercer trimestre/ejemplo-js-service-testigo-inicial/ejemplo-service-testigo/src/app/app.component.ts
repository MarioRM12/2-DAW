import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ControlComponent } from './components/control/control.component';
import { PersonaComponent } from './components/persona/persona.component';
import { ChatComponent } from './components/chat/chat.component';
import { ChatService, Persona } from './services/chat.service'; 
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NgFor,
        ControlComponent, PersonaComponent, ChatComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  personas:Persona[]=[];

  constructor(private _chatService:ChatService){
    this.personas=_chatService.personas;
  }
  
}
