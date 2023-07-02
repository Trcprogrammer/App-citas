import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'citas';
    datos:any[]=[];

  almacen(cita:any):void{
    console.log('componente padre')
    console.log(cita);
    this.datos.push(cita)
    console.log(this.datos)
    
  }

  eliminarPadre(index:number){
    this.datos.splice(index,1)

  }


}
