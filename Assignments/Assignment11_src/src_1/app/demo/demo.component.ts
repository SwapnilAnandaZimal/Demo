import { Component } from '@angular/core';
import { ArithmeticService } from '../arithmetic.service';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css',
  providers : [ArithmeticService]
})
export class DemoComponent 
{
  
 constructor(private obj : ArithmeticService)
 {
   
 }
 Sum : any = "";
 Sub : any = "";

  public Addition(N1 : any , N2 : any)
  {
    this.Sum = this.obj.Sum(parseInt(N1),parseInt(N2));
  }

  public Substraction(N1 : any , N2 : any)
  {
    this.Sub= this.obj.Substraction(parseInt(N1),parseInt(N2));
  }
}
