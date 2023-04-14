import { Component } from '@angular/core';
import { Usuario } from '../../usuario';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  usuario: Usuario = new Usuario();
  mensaje: string = '';
  constructor() {
    this.usuario.clave = '';
    this.usuario.nombre = '';
  }
  onSubmit() {
    debugger;
    if (this.usuario) {
      const usersSaved = Object.keys(localStorage)
        .map((key) => {
          const item = localStorage.getItem(key);
          if (item !== null) {
            try {
              return JSON.parse(item);
            } catch (error) {
              console.error(
                `Error parsing item with key '${key}' from localStorage:`,
                error
              );
            }
          }
          return null;
        })
        .filter((item) => item !== null);

      const userFound = usersSaved.find((usuario) => {
        return (
          usuario.nombre === this.usuario.nombre &&
          usuario.clave === this.usuario.clave
        );
      });

      if (userFound) {
        this.mensaje = 'Usuario encontrado en el localStorage';
      } else {
        this.mensaje = 'No hubo coincidencia';
      }
    }
  }
}
