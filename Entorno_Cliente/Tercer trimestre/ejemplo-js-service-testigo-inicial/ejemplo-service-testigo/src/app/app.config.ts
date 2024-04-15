import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { ChatService } from './services/chat.service';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), ChatService]
};
