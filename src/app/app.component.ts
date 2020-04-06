import { Component } from '@angular/core';
import { Usuario } from './model/Usuario';

@Component({
  selector: 'usr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mi-primer-proyecto';

  public nombre: string = 'ricardo';

  public names: string[] = ['Ricardo'];
  public names2: string[] = ['Michael','Mario']
  public listUsuarios: Usuario[] = [];
  public activedButton: boolean = false;

  public imagenURL = "http://lorempixel.com/400/200";

  constructor() {
    let usuario:Usuario = new Usuario();
    usuario.idUsuario = 1;
    usuario.edad = 20;
    usuario.nombre = 'Ricardo';
    usuario.estado = true;

    this.listUsuarios.push(usuario);
    let usuario2:Usuario = new Usuario();
    usuario2.idUsuario = 2;
    usuario2.edad = 20;
    usuario2.nombre = 'Jhon';
    usuario2.estado = true;
    this.listUsuarios.push(usuario2);

    this.addFirtsElement('Jhon');
    this.addlastEelement('Cristian');
    //this.deleteFirstElement();
    //this.deleteLastElement();
    
    this.names = this.concat(this.names2);
    console.log(this.names);
    console.log(this.names.sort());
    console.log(this.names.reverse());

    //No modifica el array original
    console.log(this.names.slice(1,2))
    console.log(this.names.indexOf('Cristian'))
    //Si modifica el array original
    console.log(this.names.splice(this.names.indexOf('Cristian'),1))
    console.log(this.names)

    this.eliminarPorId(2)
  }

  public mostrarEvento(event): void {
      console.log('El enter fue presionado');
  }

  public desactivarBoton(data:boolean): void {
    this.activedButton = data;
  }
  public eliminarPorId(id:any): void {
    for (const iterator of this.listUsuarios) {
      if (iterator.idUsuario == id) {
        this.listUsuarios.splice(this.listUsuarios.indexOf(iterator),1);
      }
    }
    if (!this.activedButton) {
    }
  }



  public concat(list: string[]): string[] {
    return this.names.concat(list)
   
  }

  public addFirtsElement(name: string): void {
    this.names.unshift(name);
  }

  public addlastEelement(name: string): void {
    this.names.push(name);
  }

  public deleteFirstElement(): void {
    let res = this.names.shift();
    console.log("se elimino a "+res);
  }

  public deleteLastElement(): void {
    let res = this.names.pop();
    console.log("se elimino a "+res);
  }

}
