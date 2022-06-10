import { Component, OnInit } from '@angular/core';
import { EventoServiceService } from 'src/app/services/evento-service.service';

@Component({
  selector: 'app-cardevento',
  templateUrl: './cardevento.component.html',
  styleUrls: ['./cardevento.component.css']
})
export class CardeventoComponent implements OnInit {

  constructor(public servicioEvento:EventoServiceService) { }

  ngOnInit(): void {
  }

}
