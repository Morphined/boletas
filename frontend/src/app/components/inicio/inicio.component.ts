import { Component, OnInit, Input } from '@angular/core';
import { json } from 'body-parser';
import { EventoServiceService } from 'src/app/services/evento-service.service';
import { LoginCompComponent } from '../login-comp/login-comp.component';



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})



export class InicioComponent implements OnInit {

  users:any;
  p: number = 1;
  total: number = 0;
  username: string;
  enviarUsuarioFunc(username: string){
    this.username = username;
  }


  constructor(public servicioEvento:EventoServiceService) { }

  ngOnInit(): void {
    this.listadoEventos();
  }

  listadoEventos() {
    this.servicioEvento.obtenerEventos().subscribe({
    next: (res) => {
    console.log('------ Obteniendo eventos - READ ------');
    this.servicioEvento.documentos = res;

    },
    error: (err) => console.log(err)
    });
    }

      pageChangeEvent(event: number){
      this.p = event;
      this.listadoEventos();
  }

  }






