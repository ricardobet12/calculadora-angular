import { Component } from '@angular/core';
import { Usuario } from './model/usuarios';

@Component({
  selector: 'cal-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public listUsuarios:Usuario[];
  public names = ['Ricardo']
  public names2 = ['Mario','Michael']
  public numbers = [2,1,3,4,6]

  constructor(){
    //Inicializar la lista de usuarios.
    this.listUsuarios = [];
    let u: Usuario = new Usuario();
    u.nombre = 'Ricardo';
    u.edad = 20;
    u.idUsuario =1;
    u.estado = true;
    //Agregar objecto a la lista
    this.listUsuarios.push(u);

    this.addFirstElement('jhon')
    this.addlastElement('Cristian')
    //this.deleteFirstElement()
    //this.deleteLastElement()
    this.transformToString()
    this.transformToJoin('-')
    this.names = this.concat(this.names2)
    console.log(this.names)
    //No modifica la lista original
    console.log(this.names.slice(1,2))
    //Si modifica el array original
    //console.log(this.names.splice(0,3,'Alejandra'))
    //console.log(this.names)

    console.log(this.names.sort())
    console.log(this.names.reverse())
    console.log(this.numbers.sort((num1,num2) => num1 -num2) )
  }


  title = 'calculadora';

  public nombre = 'ricardo'

  
  public desabilitarBoton: boolean = false

  public imagenUrl = "http://i.pravatar.cc/300"

  public getNombre():string {
    return this.nombre
  }

  public addFirstElement(name: string): void {
    this.names.push(name)
  }

  public addlastElement(name: string): void {
    this.names.unshift(name)
  }

  public deleteFirstElement():void {
    let res = this.names.shift();
    console.log('Se elimino '+res)
  }

  public deleteLastElement(): void {
    let res = this.names.pop()
    console.log('Se elimino '+res)
  }

  public transformToString():void {
   let res = this.numbers.toString()
    console.log(res)
  }

  public transformToJoin(param: string): void {
    let res = this.numbers.join(param)
    console.log(res)
  }

  public concat(list:string[]): string[] {
    return this.names.concat(list)
  }

  deleteName(name:string): void {
    for (const iterator of this.names) {
      if (iterator == name) {
        this.names.splice(this.names.indexOf(iterator), 1)
      }
    }
  }

  public enviarMensaje(info:string): void {
    console.log(info)
    if (info == 'apagar') {
      this.desabilitarBoton = true
    }
  }
}
