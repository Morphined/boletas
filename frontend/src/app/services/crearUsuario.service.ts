import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario_modelo } from '../models/usuarios';

@Injectable({
  providedIn: 'root'
})
export class crearUsuario {
  
  URL_API= "http://localhost:3000"

  datos_usuario: Usuario_modelo={
    nombres:'',
    apellidos:'',
    tipo_identificacion:'',
    numero_identificacion:'',
    ciudad:'',
    pais:'',
    email:'',
    telefono:'',
    password:'',
  }

  constructor(private http:HttpClient) { }

  singUp(datos:Usuario_modelo){
   let peticion=  this.http.post(this.URL_API + "/crearUsuario", datos )
   return peticion;
  }


}
