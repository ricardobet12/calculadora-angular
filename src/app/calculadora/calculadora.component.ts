import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cal-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  public longButtons: string[] = ['AC','DEL']
  public buttons: string[] = ['7','8','9','/','4','5','6','*','1','2','3','-','.','0','=','+']
  public result: string = ""


  constructor() { }

  ngOnInit(): void {
  }

  public addToExpression(data:string): void {
    if (data == 'AC') {
      this.result = ''
    }else if(data == 'DEL') {
    this.result = this.result.substring(0, this.result.length - 1);
    }else if(data == '='){
      this.result = eval(this.result)
    } else {
      this.result += data
    }
  }
}
