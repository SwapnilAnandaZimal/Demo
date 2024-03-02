import { Component } from '@angular/core';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css',
  providers : [NumberService]
})
export class Child1Component 
{
  PrimeOrNot : string = '' ;

constructor(private obj : NumberService)
{
console.log("Inside Child1 component")
}


CheckPrime(number : any )
{
if(this.obj.IsPrime(parseInt(number)))
{
  this.PrimeOrNot = "It is prime number "
}
else{
  this.PrimeOrNot ="It is non prime number"
}
}

}
