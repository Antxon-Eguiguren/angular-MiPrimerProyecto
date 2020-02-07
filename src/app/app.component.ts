import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  arrNums: number[];
  campoTexto: string;

  constructor() {
    this.arrNums = [5, 8, 3];
    this.campoTexto = 'Valor por defecto';
    setTimeout(() => this.campoTexto = 'Valor después de 2 seg', 3000);
  }

  manejarTerminaContador($event) {
    console.log($event);
  }

  manejarResuelveSuma($event) {
    console.log(`El resultado de la suma es ${$event}`);
  }

}
