import { ApplicationConfig, NgModule } from '@angular/core';
import { provideRouter } from '@angular/router';
import { ContadorComponent } from './contador/contador.component';
import { routes } from './app.routes';

NgModule({
  declarations: [
    // ...
    ContadorComponent
  ],
  // ...
})

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
