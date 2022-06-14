import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { format } from 'path';
import { LoginServService } from 'src/app/services/login-serv.service';
import { Router } from '@angular/router';





@Component({
  selector: 'login-comp',
  templateUrl: './login-comp.component.html',
  styleUrls: ['./login-comp.component.css']
})
export class LoginCompComponent {

   public username: string= 'Usuario';
   public estaloggeado: boolean= false;

   @Input() prueba = this.username;
   @Output() enviarUsuario = new EventEmitter<any>();

   

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
