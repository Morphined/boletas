import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderCompComponent } from './component/header-comp/header-comp.component';
import { MedioComponent } from './medio/medio.component';
import { ProximosComponent } from './proximos/proximos.component';
import { CardeventoComponent } from './cardevento/cardevento.component';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderCompComponent,
    MedioComponent,
    ProximosComponent,
    CardeventoComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
