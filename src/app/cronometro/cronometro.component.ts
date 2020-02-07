import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent implements OnInit {

  // TODO: crear la variable (ejemplo TODO Tree)
  // FIXME: arregla esto, es un error
  contador: number;

  @Input() inicio: number;
  @Input() fin: string;

  @Output() terminaContador: EventEmitter<string>;

  constructor() {
    this.contador = 12;
    this.terminaContador = new EventEmitter();
  }

  ngOnInit() {
    this.contador = this.inicio || 10;
  }

  comenzarContador() {
    const intervalo = setInterval(() => {
      this.contador--;
      if (this.contador === 0) {
        clearInterval(intervalo);
        this.terminaContador.emit('El cronómetro ha terminado');
      }
    }, 1000);
  }

}
