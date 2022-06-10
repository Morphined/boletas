import { Component, OnInit } from '@angular/core';
import { EventoServiceService } from 'src/app/services/evento-service.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

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
    error: (err) => console.log(err),
    });
    }

}
