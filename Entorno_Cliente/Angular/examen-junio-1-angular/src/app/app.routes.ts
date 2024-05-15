import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CentralComponent } from './components/central/central.component';
import { ListasComponent } from './components/listas/listas.component';
import { FormularioComponent } from './components/listas/formulario/formulario.component';

export const routes: Routes = [  
{ path: '', component: HomeComponent, },
{ path: 'home', component: HomeComponent},
{ path: 'Elecciones', component: CentralComponent},
// { path: 'Recuento', component: CentralComponent},
{ path: 'Listas', component: ListasComponent},
{ path: '**', component: HomeComponent}
];
