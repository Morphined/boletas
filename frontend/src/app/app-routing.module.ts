import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SignupCompComponent } from './component/signup-comp/signup-comp.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'signup', component: SignupCompComponent },
  { path: 'root', component: AppComponent}
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
