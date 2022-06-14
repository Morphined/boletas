import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Evento_model } from '../models/eventos';
import { Observable, observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EventoServiceService {


  URL_API = 'http://localhost:3000';

  documentos: Evento_model[]=[];

  datos_evento:Evento_model={
    nombreEvento:'',
    emailCreador:'',
    organizadorEvento:'',
    descripcionEvento:'',
    categoriaEvento:'',
    fechaEvento:new Date(),
    horaInicioEvento: '',
    horaFinalEvento:'',
    ciudadEvento:'',
    paisEvento:'',
    direccionEvento:'',
    imagenEvento:''
  }

  constructor(private http:HttpClient) { }

  crearEvento(datos:Evento_model){
    let peticion = this.http.post(this.URL_API+"/evento",datos)
    return peticion;
  }

  obtenerEventos(){
    return this.http.get<Evento_model[]>(this.URL_API + '/obtenerEventos')
  };

  

  eliminarEventos(id: string) {
    //petición HTTP al servidor de NODE --> DELETE http://localhost:3000/eliminar_video/12345AAD1231
    let peticion = this.http.delete(this.URL_API + '/eliminarEvento/' + id);
    return peticion;
   }

   


  }


