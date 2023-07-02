import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-citas',
  templateUrl: './add-citas.component.html',
  styleUrls: ['./add-citas.component.css']
})
export class AddCitasComponent {
  nombre='';
  fecha='';
  hora="" 
  sintoma=""
  incorrecto:boolean=false;
  
  @Output() nuevaCita= new EventEmitter<any>(); 




 validar():void{
  if(this.nombre ==="" || this.fecha ==="" || this.hora === "" || this.sintoma === ""   ){

   this.incorrecto=true
   return
  }
  
this.incorrecto=false;

const objeto={
  nombre:this.nombre,
  fecha:this.fecha,
  hora:this.hora,
  sintoma:this.sintoma,

}

console.log(objeto);
this.nuevaCita.emit(objeto)
this.limpiarFormulario()


 }

 limpiarFormulario(){
  this.nombre=''
  this.fecha=''
  this.hora=''
  this.sintoma=''
 }



}
