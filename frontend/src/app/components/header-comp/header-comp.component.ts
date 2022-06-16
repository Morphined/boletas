import { Component, OnInit } from '@angular/core';
import { EventoServiceService } from '../../services/evento-service.service'



@Component({
  selector: 'app-header-comp',
  templateUrl: './header-comp.component.html',
  styleUrls: ['./header-comp.component.css']
})
export class HeaderCompComponent implements OnInit {


  constructor(private servicio: EventoServiceService) { }

  ngOnInit(): void {
  }

  buscarEventos(datos: any){
    console.log(datos.value)
      this.servicio.buscarEventos(datos.value).subscribe
      ({next:(res:any)=>{
        this.servicio.documentos=res
      }, error:(err)=>{
        console.log(err)
      }});

  }



}
