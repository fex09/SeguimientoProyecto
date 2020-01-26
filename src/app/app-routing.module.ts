import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { UsersComponent } from './Components/users/users.component';
import { MantenimientoComponent } from './Components/mantenimiento/mantenimiento.component';
import { EmpresaAgregarComponent } from './Components/empresa/empresa-agregar/empresa-agregar.component';
import { EmpresaEditarComponent } from './Components/empresa/empresa-editar/empresa-editar.component';
import { EmpresaListaComponent } from './Components/empresa/empresa-lista/empresa-lista.component';
import { AreaListaComponent } from './Components/area/area-lista/area-lista.component';
import { AreaAgregarComponent } from './Components/area/area-agregar/area-agregar.component';
import { AreaEditarComponent } from './Components/area/area-editar/area-editar.component';
import { SignInComponent } from './Components/login/sign-in/sign-in.component';
import { SignUpComponent } from './Components/login/sign-up/sign-up.component';
import { DashboardComponent } from './Components/login/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './Components/login/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './Components/login/verify-email/verify-email.component';


const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'register-user', component: SignUpComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  { path: 'home', component: HomeComponent },
  { path: 'users', component: UsersComponent },
  { path: 'mantenimiento', component: MantenimientoComponent },
  {
    path: 'empresa',
    children: [
      { path: 'listar', component: EmpresaListaComponent },
      { path: 'agregar', component: EmpresaAgregarComponent },
      { path: 'editar/:id', component: EmpresaEditarComponent }
    ]
  },
  {
    path: 'area',
    children: [
      { path: 'listar', component: AreaListaComponent },
      { path: 'agregar', component: AreaAgregarComponent },
      { path: 'editar/:id', component: AreaEditarComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
