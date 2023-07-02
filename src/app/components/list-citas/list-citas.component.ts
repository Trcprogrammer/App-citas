import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-list-citas',
  templateUrl: './list-citas.component.html',
  styleUrls: ['./list-citas.component.css']
})
export class ListCitasComponent {
  @Input() listadoDatos:any[]=[]
  @Output() eliminarDatos=new EventEmitter();

  

  borrarDatos(index:number){
     
this.eliminarDatos.emit(index)

  }


}
