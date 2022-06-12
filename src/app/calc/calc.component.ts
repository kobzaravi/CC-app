import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
})
export class CalcComponent implements OnInit {
  result!:number;
  
  constructor() { }
  Calculate(val1:string,val2:string){
    this.result=parseFloat(val1)*parseFloat(val2);
  }
  ngOnInit(): void {
  }

}

