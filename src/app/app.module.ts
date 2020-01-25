import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

// Material modules
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './Components/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './Components/sidenav/sidenav.component';
import { HomeComponent } from './Components/home/home.component';
import { UsersComponent } from './Components/users/users.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { MantenimientoComponent } from './Components/mantenimiento/mantenimiento.component';
import { EmpresaAgregarComponent } from './Components/empresa/empresa-agregar/empresa-agregar.component';
import { EmpresaEditarComponent } from './Components/empresa/empresa-editar/empresa-editar.component';
import { EmpresaListaComponent } from './Components/empresa/empresa-lista/empresa-lista.component';
import { LoginComponent } from './Components/login/login.component';
import { SnackbarComponent } from './Components/snackbar/snackbar.component';
import { AreaListaComponent } from './Components/area/area-lista/area-lista.component';
import { AreaAgregarComponent } from './Components/area/area-agregar/area-agregar.component';
import { AreaEditarComponent } from './Components/area/area-editar/area-editar.component';


@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HomeComponent,
    UsersComponent,
    MantenimientoComponent,
    EmpresaAgregarComponent,
    EmpresaEditarComponent,
    EmpresaListaComponent,
    LoginComponent,
    SnackbarComponent,
    AreaListaComponent,
    AreaAgregarComponent,
    AreaEditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTooltipModule,
    MatSnackBarModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
