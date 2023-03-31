import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'clase-uno';
  edadUno: number = 0;
  EdadDos: number = 0;
  res: number = 0;
  prom: number = 0;
  cambiarTitulo() {
    this.title = 'Nuevo titulo';
  }

  sumar() {
    this.res = Number(this.edadUno) + Number(this.EdadDos);
    this.prom = 0;
  }

  dividir() {
    this.prom = (Number(this.edadUno) + Number(this.EdadDos)) / 2;
    this.res = 0;
  }

  limpiar() {
    this.edadUno = 0;
    this.EdadDos = 0;
    this.res = 0;
    this.prom = 0;
  }
}
