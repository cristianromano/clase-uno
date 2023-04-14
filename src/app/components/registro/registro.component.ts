import { Component } from '@angular/core';
import { Usuario } from 'src/app/usuario';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent {
  usuario: Usuario = new Usuario();

  uniqueKey = 'usuario_' + Math.floor(Math.random() * 1000) + 1;

  constructor() {
    this.usuario.clave = '';
    this.usuario.nombre = '';
  }
  onSubmit() {
    if (this.usuario) {
      localStorage.setItem(this.uniqueKey, JSON.stringify(this.usuario));
    }
  }
}
