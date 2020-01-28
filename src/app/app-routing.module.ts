import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
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
import { PagesGuard } from './guards/pages.guard';
import { AuthGuard } from './guards/auth.guard';
import { SeguimientoListaComponent } from './Components/seguimiento/seguimiento-lista/seguimiento-lista.component';
import { SeguimientoInfoComponent } from './Components/seguimiento/seguimiento-info/seguimiento-info.component';


const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'seguimiento-lista', component: SeguimientoListaComponent, canActivate: [AuthGuard] },
  { path: 'seguimiento-info/:nombre', component: SeguimientoInfoComponent, canActivate: [AuthGuard] },
  { path: 'seguimiento-info/0', component: SeguimientoInfoComponent, canActivate: [AuthGuard] },
  { path: 'sign-in', component: SignInComponent },
  { path: 'register-user', component: SignUpComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  { path: 'home', component: HomeComponent },
  { path: 'mantenimiento', component: MantenimientoComponent, canActivate: [PagesGuard] },
  {
    path: 'empresa',
    children: [
      { path: 'listar', component: EmpresaListaComponent, canActivate: [PagesGuard] },
      { path: 'agregar', component: EmpresaAgregarComponent, canActivate: [PagesGuard] },
      { path: 'editar/:id', component: EmpresaEditarComponent, canActivate: [PagesGuard] }
    ]
  },
  {
    path: 'area',
    children: [
      { path: 'listar', component: AreaListaComponent, canActivate: [PagesGuard] },
      { path: 'agregar', component: AreaAgregarComponent, canActivate: [PagesGuard] },
      { path: 'editar/:id', component: AreaEditarComponent, canActivate: [PagesGuard] }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
