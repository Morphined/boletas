import { Injectable, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Boletas_model } from '../models/boletas';
import { Evento_model } from '../models/eventos';
import { EventoServiceService } from './evento-service.service';


@Injectable({
  providedIn: 'root'
})
export class CrearBoletasService {

  constructor(private http:HttpClient) { }

  URL_API='http://localhost:3000'
  doc_boletas:Boletas_model[]=[];

  datosBoletas:Boletas_model = {
    usuario:'', 
    correo:'',
    celular:0,
    evento:'',
    cantidad:0,
    precio:0,
    moneda:'',
    metodoPago:'',
    fechaPublicacion:new Date(),
    _id:''
  }

  publicarBoletas(datos:Boletas_model){
    let peticion = this.http.post(this.URL_API + '/publicarBoletas/',datos);
    return peticion
  
  }

  obtenerNombre(id:string){
    let nombreEv = this.http.get(this.URL_API +'/obtenerEvento/:id');
    return nombreEv;
  }
}
