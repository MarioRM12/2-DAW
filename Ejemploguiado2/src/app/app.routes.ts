import { Routes } from '@angular/router';
import { AboutComponent } from './componentes/about/about.component';
import { HomeComponent } from './componentes/home/home.component';
import { LenguajesComponent } from './componentes/lenguajes/lenguajes.component';

export const routes: Routes = [
    {path: "home", component:HomeComponent },
    {path: "about", component: AboutComponent},
    {path: "lenguajes", component: LenguajesComponent},
    {path: "lenguaje/:id", component: LenguajesComponent},
    {path: "buscardor/:termino", component: },
    {path: "**", pathMatch:"full", redirectTo:'home'}
];
