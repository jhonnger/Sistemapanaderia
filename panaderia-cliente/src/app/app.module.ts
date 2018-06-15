import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import {APP_ROUTES} from './app.route';
import {MensajeAlertComponent} from './components/mensajeAlert/mensaje-alert.component';
import {MensajeExitoComponent} from './components/mensaje-exito/mensaje-exito.component';
import {LoadingComponent} from './components/Loading/loading.component';
import {MensajeConfirmComponent} from './components/mensaje-confirm/mensaje-confirm.component';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDialogModule, MatExpansionModule,
  MatIconModule,
  MatInputModule, MatListModule, MatProgressSpinnerModule, MatSidenavModule,
  MatSnackBarModule, MatTableModule, MatToolbarModule
} from '@angular/material';
import {UtilService} from './services/util.service';
import {AuthService} from './services/auth.service';
import {HttpClientModule} from '@angular/common/http';
import {JwtHelperService} from '@auth0/angular-jwt';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import {AuthGuardService} from './services/auth-guard.service';
import { UmComponent } from './components/um/um.component';
import { DashComponent } from './components/dash/dash.component';
import { UmBuscadorComponent } from './components/um/um-buscador/um-buscador.component';
import { UmFormularioComponent } from './components/um/um-formulario/um-formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MensajeAlertComponent,
    MensajeExitoComponent,
    LoadingComponent,
    MensajeConfirmComponent,
    HomeComponent,
    UmComponent,
    DashComponent,
    UmBuscadorComponent,
    UmFormularioComponent
  ], entryComponents: [ MensajeAlertComponent, MensajeExitoComponent, LoadingComponent, MensajeConfirmComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    APP_ROUTES,
    HttpClientModule,
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCheckboxModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    MatTableModule
  ],
  providers: [
    UtilService,
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
