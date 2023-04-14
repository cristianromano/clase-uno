import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';
import { ErrorComponent } from './components/error/error.component';
import { RouterLink } from '@angular/router';
import { RegistroComponent } from './components/registro/registro.component';
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'bienvenido',
    component: BienvenidoComponent,
  },
  {
    path: '',
    component: BienvenidoComponent,
  },
  {
    path: 'bienvenido',
    component: BienvenidoComponent,
  },
  {
    path: 'registro',
    component: RegistroComponent,
  },
  {
    path: '**',
    component: ErrorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
