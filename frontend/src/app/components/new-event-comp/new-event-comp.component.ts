import { Component, OnInit } from '@angular/core';
import { EventoServiceService } from 'src/app/services/evento-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-event-comp',
  templateUrl: './new-event-comp.component.html',
  styleUrls: ['./new-event-comp.component.css']
})
export class NewEventCompComponent implements OnInit {

  constructor(public servicioEvento:EventoServiceService) { }

  ngOnInit(): void {
  }
  crearEvento(form:NgForm){

    this.servicioEvento.crearEvento(form.value).subscribe(
      (res)=>{
        console.log("agregando nuevo evento");
        form.reset()
      },
      (err)=>console.log(err)
      

    )

  }

}
