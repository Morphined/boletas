import { RouterModule, Routes } from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';  

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderCompComponent } from './components/header-comp/header-comp.component';
import { MedioComponent } from './components/medio/medio.component';
import { ProximosComponent } from './components/proximos/proximos.component';
import { CardeventoComponent } from './components/cardevento/cardevento.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { LoginCompComponent } from './components/login-comp/login-comp.component';
import { SignupCompComponent } from './components/signup-comp/signup-comp.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { FooterComponent } from './components/footer/footer.component';
import { CrearEventoComponent } from './components/crear-evento/crear-evento.component';
import { NewEventCompComponent } from './components/new-event-comp/new-event-comp.component';

const routes: Routes = [
{ path: 'crearCuenta', component: SignupCompComponent },
{ path: 'crearEvento', component: CrearEventoComponent },
{ path: 'entrar', component: LoginCompComponent },
{path: 'newEvent', component: NewEventCompComponent},
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
    InicioComponent,
    FooterComponent,
    CrearEventoComponent,
    NewEventCompComponent
  ],
  imports: [
    FormsModule,
  BrowserModule,
  HttpClientModule, 
  RouterModule.forRoot(routes),
  RouterModule],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }],
  bootstrap: [AppComponent],
  exports:[RouterModule]
})
export class AppModule {}
