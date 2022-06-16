import { Component, OnInit } from '@angular/core';
import { CrearBoletasService } from 'src/app/services/crear-boletas.service';
import { NgForm } from '@angular/forms';
import { EventoServiceService } from 'src/app/services/evento-service.service';

@Component({
  selector: 'app-crear-boletas',
  templateUrl: './crear-boletas.component.html',
  styleUrls: ['./crear-boletas.component.css']
})
export class CrearBoletasComponent implements OnInit {

  constructor(public crearBoletasServ: CrearBoletasService, servicioEvento:EventoServiceService) { }

  ngOnInit(): void {
    this.crearBoletasServ.obtenerNombre
  }

  publicarBoletas(form: NgForm) {
    this.crearBoletasServ.publicarBoletas(form.value).subscribe(

      (res) => {
        alert("Boletas publicadas satisfactoriamente")
        form.reset()
      },
      (err) => console.log(err)
    );
  }

}
