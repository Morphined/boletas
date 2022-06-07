import { RouterModule, Routes } from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';  

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderCompComponent } from './components/header-comp/header-comp.component';
import { MedioComponent } from './components/medio/medio.component';
import { ProximosComponent } from './components/proximos/proximos.component';
import { CardeventoComponent } from './components/cardevento/cardevento.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { LoginCompComponent } from './components/login-comp/login-comp.component';
import { SignupCompComponent } from './components/signup-comp/signup-comp.component';
import { InicioComponent } from './components/inicio/inicio.component';


const routes: Routes = [
{ path: 'crearCuenta', component: SignupCompComponent },
{ path: 'entrar', component: LoginCompComponent },
{ path: '', component: InicioComponent, pathMatch:'full'},
{ path: '**', redirectTo: '/', pathMatch: 'full' },

 ];

@NgModule({
  declarations: [
    AppComponent,
    HeaderCompComponent,
    MedioComponent,
    ProximosComponent,
    CardeventoComponent,
    PaginationComponent,
    LoginCompComponent,
    SignupCompComponent,
    InicioComponent
  ],
  imports: [
  BrowserModule, 
  RouterModule.forRoot(routes),
  RouterModule],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }],
  bootstrap: [AppComponent],
  exports:[RouterModule]
})
export class AppModule {}
