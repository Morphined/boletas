import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Evento_model } from '../models/eventos';


@Injectable({
  providedIn: 'root'
})
export class EventoServiceService {

  
  URL_API = 'http://localhost:3000';
  datos_evento:Evento_model={
    nombreEvento:'',
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
}
