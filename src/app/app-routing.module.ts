import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { UsersComponent } from './Components/users/users.component';
import { MantenimientoComponent } from './Components/mantenimiento/mantenimiento.component';
import { EmpresaAgregarComponent } from './Components/empresa/empresa-agregar/empresa-agregar.component';
import { EmpresaEditarComponent } from './Components/empresa/empresa-editar/empresa-editar.component';
import { EmpresaListaComponent } from './Components/empresa/empresa-lista/empresa-lista.component';
import { LoginComponent } from './Components/login/login.component';
import { AreaListaComponent } from './Components/area/area-lista/area-lista.component';
import { AreaAgregarComponent } from './Components/area/area-agregar/area-agregar.component';
import { AreaEditarComponent } from './Components/area/area-editar/area-editar.component';


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
    path: 'empresa',
    children: [{
        path: 'listar',
        component: EmpresaListaComponent
      },
      {
        path: 'agregar',
        component: EmpresaAgregarComponent
      },
      {
        path: 'editar/:id',
        component: EmpresaEditarComponent
      }
    ]
  },
  {
    path: 'area',
    children: [{
        path: 'listar',
        component: AreaListaComponent
      },
      {
        path: 'agregar',
        component: AreaAgregarComponent
      },
      {
        path: 'editar/:id',
        component: AreaEditarComponent
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
