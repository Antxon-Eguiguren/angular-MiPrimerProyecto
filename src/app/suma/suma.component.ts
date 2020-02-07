import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-suma',
  templateUrl: './suma.component.html',
  styleUrls: ['./suma.component.css']
})
export class SumaComponent implements OnInit {

  @Input() num1: number;
  @Input() num2: number;

  @Output() resuelveSuma: EventEmitter<number>;

  resultado: number;

  constructor() {
    this.resultado = 0;
    this.resuelveSuma = new EventEmitter();
  }

  ngOnInit() {
  }

  calcularResultado() {
    this.resultado = this.num1 + this.num2;
    this.resuelveSuma.emit(this.resultado);
  }

}
