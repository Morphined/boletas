import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { format } from 'path';
import { LoginServService } from 'src/app/services/login-serv.service';
import { Router } from '@angular/router';
import { stringify } from 'querystring';



@Component({
  selector: 'login-comp',
  templateUrl: './login-comp.component.html',
  styleUrls: ['./login-comp.component.css']
})
export class LoginCompComponent {

   username: string;
   estaloggeado: boolean;


  constructor(public servicioLogin: LoginServService, private router: Router){}

  


  loginUsuario(email: string){
    this.servicioLogin.loginUsuario(email).subscribe((res) =>{
      console.log('Haciendo login de: '+ email);
      
      this.username = res;
      this.estaloggeado = true;
      
      
      
      
    }, function(err){
      console.log(err);
    }
    )
    
  }
  

}
