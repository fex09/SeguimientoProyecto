import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

// Material modules
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSelectModule} from '@angular/material/select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './Components/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './Components/sidenav/sidenav.component';
import { HomeComponent } from './Components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MantenimientoComponent } from './Components/mantenimiento/mantenimiento.component';
import { EmpresaAgregarComponent } from './Components/empresa/empresa-agregar/empresa-agregar.component';
import { EmpresaEditarComponent } from './Components/empresa/empresa-editar/empresa-editar.component';
import { EmpresaListaComponent } from './Components/empresa/empresa-lista/empresa-lista.component';
import { SnackbarComponent } from './Components/snackbar/snackbar.component';
import { AreaListaComponent } from './Components/area/area-lista/area-lista.component';
import { AreaAgregarComponent } from './Components/area/area-agregar/area-agregar.component';
import { AreaEditarComponent } from './Components/area/area-editar/area-editar.component';
import { DashboardComponent } from './Components/login/dashboard/dashboard.component';
import { SignInComponent } from './Components/login/sign-in/sign-in.component';
import { SignUpComponent } from './Components/login/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './Components/login/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './Components/login/verify-email/verify-email.component';
import { AuthService } from './Services/auth.service';
import { SeguimientoListaComponent } from './Components/seguimiento/seguimiento-lista/seguimiento-lista.component';
import { SeguimientoInfoComponent } from './Components/seguimiento/seguimiento-info/seguimiento-info.component';




@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HomeComponent,
    MantenimientoComponent,
    EmpresaAgregarComponent,
    EmpresaEditarComponent,
    EmpresaListaComponent,
    SnackbarComponent,
    AreaListaComponent,
    AreaAgregarComponent,
    AreaEditarComponent,
    DashboardComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    SeguimientoListaComponent,
    SeguimientoInfoComponent
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
    MatSelectModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
