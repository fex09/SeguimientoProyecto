import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { UsersComponent } from './Components/users/users.component';
import { MantenimientoComponent } from './Components/mantenimiento/mantenimiento.component';
import { EmpresaAgregarComponent } from './Components/empresa/empresa-agregar/empresa-agregar.component';
import { EmpresaEditarComponent } from './Components/empresa/empresa-editar/empresa-editar.component';
import { EmpresaListaComponent } from './Components/empresa/empresa-lista/empresa-lista.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'mantenimiento',
    component: MantenimientoComponent
  },
  {
    path: 'empresa-agregar',
    component: EmpresaAgregarComponent
  },
  {
    path: 'empresa-editar',
    component: EmpresaEditarComponent
  },
  {
    path: 'empresa-lista',
    component: EmpresaListaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
