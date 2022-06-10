import { Component, OnInit } from '@angular/core';
import { crearUsuario } from 'src/app/services/crearUsuario.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'signup-comp',
  templateUrl: './signup-comp.component.html',
  styleUrls: ['./signup-comp.component.css']
})
export class SignupCompComponent implements OnInit {

  constructor(public crearUsuario: crearUsuario) { }

  ngOnInit(): void {
  }

  singUp(form:NgForm){

    this.crearUsuario.singUp(form.value).subscribe(
      (res)=>{
        console.log("agregando nuevo usuario");
        form.reset()
      },
      (err)=>console.log(err)
      

    )

  }

}
