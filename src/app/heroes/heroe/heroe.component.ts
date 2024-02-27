import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html',
    styleUrl: '../..//app.component.css',
    standalone:true,
    
})

export class HeroeComponent {
    nombre: string = 'Hulk';
    edad: number = 32;
  //getter 
    get nombreCapitalizado(){
        return this.nombre.toUpperCase();
    }
    
    obtenerNombre():string{    
        return `${this.nombre} - ${this.edad}`;
    }
    //one way data binding
    cambiarNombre():void{
      this.nombre = 'Spiderman';
    }
    cambiarEdad():void{
        this.edad = 40
    }


}