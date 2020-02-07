import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent implements OnInit {

  // TODO: crear la variable (ejemplo TODO Tree)
  // FIXME: arregla esto, es un error

  @Input() inicio: number;
  @Input() fin: number;

  @Output() terminaContador: EventEmitter<string>;

  contador: number;
  final: number;

  constructor() {
    this.terminaContador = new EventEmitter();
  }

  ngOnInit() {
    // Para que contador tenga el valor de inicio y si no está definido que coja el valor por defecto 10.
    this.contador = this.inicio || 10;

    // Para que final tenga el valor de fin y si no está definido que coja el valor por defecto 0.
    this.final = this.fin || 0;
  }

  comenzarContador() {
    const intervalo = setInterval(() => {
      this.contador--;
      if (this.contador === this.final) {
        clearInterval(intervalo);
        this.terminaContador.emit('El cronómetro ha terminado');
      }
    }, 1000);
  }

}
