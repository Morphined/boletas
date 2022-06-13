import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SignupCompComponent } from './components/signup-comp/signup-comp.component';
import { LoginCompComponent } from './components/login-comp/login-comp.component';



const routes: Routes = [
  { path: 'signup', component: SignupCompComponent },
  {path: 'login', component: LoginCompComponent}

];



@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
