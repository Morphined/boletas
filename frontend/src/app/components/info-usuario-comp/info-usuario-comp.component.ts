import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LoginServService } from 'src/app/services/login-serv.service';
import { Usuario_modelo } from 'src/app/models/usuarios';

@Component({
  selector: 'app-info-usuario-comp',
  templateUrl: './info-usuario-comp.component.html',
  styleUrls: ['./info-usuario-comp.component.css']
})
export class InfoUsuarioCompComponent implements OnInit {
 
  usuario : Usuario_modelo;



  constructor(public servicioLogin: LoginServService) { }

  


  ngOnInit(): void {

    this.servicioLogin.usuarioActual().subscribe((res)=>{

      this.usuario = res;

    }, function(err){
      console.log(err);
    });

  }

}
