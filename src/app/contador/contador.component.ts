import { Component } from '@angular/core';
@Component({
    standalone: true,
  selector: 'app-contador',
  styleUrl: '../app.component.css',
  template: `
    <h1>{{ title }}</h1>
    <!-- no aconsejable poner logica en los templates -->
    <!-- <button (click)="numero = numero +1"> +1 </button>
<span>{{numero}}</span>
<button (click)="numero= numero-1"> -1 </button> -->

    <button (click)="acumular(+1)">+1</button>
    <span>{{ numero }}</span>
    <button (click)="acumular(-1)">-1</button>

    <h2>Ejercicio</h2>

    <h3>
      La base es de : <strong>{{ base }}</strong>
    </h3>

    <button (click)="five(true)">+5</button>
    <span>{{ numero2 }}</span>
    <button (click)="five(false)">-5</button>
  `,
})
export class ContadorComponent {
  title: string = 'Contador App';
  numero: number = 0;
  numero2: number = 0;
  base: number = 5;

  // sumar(){
  //   //this.numero proiedad de la clase
  //   this.numero +1;
  // }
  // restar(){
  //   //this.numero proiedad de la clase
  //   this.numero -1;
  // }

  //  refactorizado
  acumular(valor: number) {
    this.numero += valor;
  }

  five(isAdd: boolean) {
    if (isAdd) {
      this.numero2 += this.base;
    } else {
      this.numero2 -= this.base;
    }
  }
}
