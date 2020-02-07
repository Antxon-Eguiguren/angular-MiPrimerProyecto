import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {

  // DEFINICIÓN PROPIEDADES: nombre y tipo
  mensaje: string;
  identificadorParrafo: string;

  constructor() {
    // INICIALIZO LAS PROPIEDADES
    this.mensaje = 'Este es el mensaje';
    this.identificadorParrafo = 'idParrafo';
  }

  ngOnInit() {
    // LO QUE SE EJECUTE AQUÍ SE HARÁ CUANDO SE INICIA EL COMPONENTE (SE CARGA LA PÁGINA CON EL COMPONENTE)
    setTimeout(() => {
      this.mensaje = 'Otro mensaje diferente ejecutado pasados de 3 segundos';
    }, 3000);
  }

  devolverCadena() {
    return 'Cadena devuelta desde el método';
  }

  pulsarBoton() {
    this.mensaje = 'Texto desde el boton';
  }

}
