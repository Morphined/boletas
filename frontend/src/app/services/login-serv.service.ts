import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario_modelo } from '../models/usuarios';

@Injectable({
  providedIn: 'root'
})
export class LoginServService {

  constructor(public http: HttpClient) { 
  }

  URL_API = 'http://localhost:3000';
  documentos: Usuario_modelo[]=[];
  datos_Usuario:Usuario_modelo={
    nombres:'',
    apellidos:'',
    tipo_identificacion:'',
    numero_identificacion:'',
    ciudad:'',
    pais: '',
    email:'',
    telefono:'',
    contrasena:'',
    login: false
  }


  obtenerUsuarios(){
    let peticion = this.http.get<Usuario_modelo[]>(this.URL_API+'/obtenerUsuarios');
    return peticion;
  };

  crearUsuario(datos: Usuario_modelo){

    let peticion = this.http.post(this.URL_API + '/crearUsuario', datos);
    return peticion;

  }

  deleteUsuario(id: string){
    let peticion = this.http.delete(this.URL_API+'/deleteUsuario/'+ id);
    return peticion;
  }

  updateUsuario(datos: Usuario_modelo){

    let peticion = this.http.post(this.URL_API+ '/updateUsuario', datos);
    return peticion;

  }

  usuarioLog(){
    let peticion = this.http.get<boolean>(this.URL_API+'/loginHecho');
    return peticion;
  }

  usuarioActual(){
    let peticion = this.http.get<Usuario_modelo>(this.URL_API+'/usuarioActual');
    return peticion;
  }

  loginUsuario(email: string){

    let peticion = this.http.get(this.URL_API+'/obtenerUsuario/'+ email, {responseType: 'text'});
    return peticion;

  }

  
  
}
