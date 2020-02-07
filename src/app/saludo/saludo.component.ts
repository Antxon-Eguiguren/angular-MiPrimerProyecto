import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {

  // DEFINICIÓN PROPIEDADES: nombre y tipo
  mensaje: string;
  identificador: string;

  constructor() {

    // INICIALIZO LAS PROPIEDADES
    this.mensaje = 'Este es el mensaje';
    this.identificador = 'idParrafo';

    setTimeout(() => {
      this.mensaje = 'Otro mensaje diferente';
    }, 3000);

  }

  ngOnInit() {
  }

  devolverCadena() {
    return 'Cadena devuelta desde el método';
  }

  pulsarBoton($event) {
    console.log('Botón pulsado');
    this.mensaje = 'Texto desde el boton';
    console.log($event.target)
  }

}
