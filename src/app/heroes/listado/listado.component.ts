import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {
 heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Black Widow'];
 hereoBorrado :string | undefined = ''

 borrarHeroe(){
  let heroeDeleted =  this.heroes.shift();
   this.hereoBorrado = heroeDeleted;
 }

}
