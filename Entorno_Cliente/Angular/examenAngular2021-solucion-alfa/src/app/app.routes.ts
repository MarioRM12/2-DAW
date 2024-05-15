import { Routes } from '@angular/router';
import { ListarComponent } from './listar/listar.component';
import { LoginComponent } from './login/login.component';
import { RegistrarComponent } from './registrar/registrar.component';

export const routes: Routes = [
    {path: 'listar', component: ListarComponent},
    {path: 'login', component: LoginComponent},
    {path: 'registrar', component: RegistrarComponent},
    {path: '**',  pathMatch: 'full', redirectTo: 'login'}
];
