import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginServService } from 'src/app/services/login-serv.service';

@Component({
  selector: 'signup-comp',
  templateUrl: './signup-comp.component.html',
  styleUrls: ['./signup-comp.component.css']
})
export class SignupCompComponent implements OnInit {

  constructor(public servicioLogin:LoginServService ) { }

  ngOnInit(): void {
  }

  crearUsuario(form:NgForm){
    this.servicioLogin.crearUsuario(form.value).subscribe(function(res){
      console.log('Creando usuario');
      form.reset();
    }, function(err){
      console.log(err);
    }
    )
  }

}
