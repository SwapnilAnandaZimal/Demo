import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithmeticService {

  constructor() { }
  Sum(Num1 : number, Num2 : number) : number
  {
    return Num1 + Num2;
  }

  Substraction(Num1 : number, Num2 : number) : number
  {
    return Num1 - Num2;
  }

}
