

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

import { LoginCompComponent } from './components/login-comp/login-comp.component';
import { SignupCompComponent } from './components/signup-comp/signup-comp.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { FooterComponent } from './components/footer/footer.component';
import { NewEventCompComponent } from './components/new-event-comp/new-event-comp.component';
import { objectToArrayPipe } from './objetcToArray.pipe';
import { CrearBoletasComponent } from './components/crear-boletas/crear-boletas.component';

import { NgxPaginationModule } from 'ngx-pagination';
import { InfoUsuarioCompComponent } from './components/info-usuario-comp/info-usuario-comp.component';
import { AppRoutingModule } from './app-routing.module';
import { MostrarBoletasComponent } from './components/mostrar-boletas/mostrar-boletas.component';

const routes: Routes = [
{ path: 'crearUsuario', component: SignupCompComponent },
{ path: 'entrar', component: LoginCompComponent },
{path: 'newEvent', component: NewEventCompComponent},
{path: 'mostrarBoletas', component: MostrarBoletasComponent},
{path: 'infoUsuario', component: InfoUsuarioCompComponent},
{ path: '', component: InicioComponent, pathMatch:'full'},
{path: 'crearBoletas', component:CrearBoletasComponent, pathMatch: 'full'  },

 ];

@NgModule({
  declarations: [
    AppComponent,
    HeaderCompComponent,
    MedioComponent,
    ProximosComponent,
    CardeventoComponent,
    LoginCompComponent,
    SignupCompComponent,
    InicioComponent,
    FooterComponent,
    NewEventCompComponent,
    objectToArrayPipe,
    InfoUsuarioCompComponent,
    CrearBoletasComponent,
    MostrarBoletasComponent,

  ],
  imports: [
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule,
  BrowserModule,
  HttpClientModule,
  RouterModule.forRoot(routes),
  RouterModule],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }],
  bootstrap: [AppComponent],
  exports:[RouterModule]
})
export class AppModule {}
