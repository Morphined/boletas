import { Component, OnInit } from '@angular/core';
import { CrearBoletasService } from 'src/app/services/crear-boletas.service';

@Component({
  selector: 'app-mostrar-boletas',
  templateUrl: './mostrar-boletas.component.html',
  styleUrls: ['./mostrar-boletas.component.css']
})
export class MostrarBoletasComponent implements OnInit {

  p: number = 1;
  total: number = 0;

  constructor(public mostrarBoletasService: CrearBoletasService) { }

  ngOnInit(): void {
    this.mostrarBoleta()
  }

  mostrarBoleta() {
    this.mostrarBoletasService.mostrarBoletas().subscribe({
      next: (res: any) => {
        console.log('------ Obteniendo boletas - READ ------');
        this.mostrarBoletasService.doc_boletas = res;
      },
      error: (err) => console.log(err),
    });
  }

  pageChangeEvent(event: number) {
    this.p = event;
    this.mostrarBoletasService.mostrarBoletas();
  }

}
