import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  resultado: string;

  constructor() {
    this.resultado = '';
  }

  ngOnInit() {
  }

  manejarClick(pNumero) {
    if (pNumero === 'c') {
      this.resultado = '';
    } else if (pNumero === '=') {
      this.resultado = eval(this.resultado);
    } else {
      this.resultado += pNumero;
    }
    return this.resultado;
  }

}
