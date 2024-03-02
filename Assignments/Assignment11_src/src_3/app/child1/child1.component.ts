import { Component } from '@angular/core';
import { NumberService } from '../number.service';
import { StringService } from '../string.service';
@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css',
  providers: [StringService, NumberService]
})

export class Child1Component {
  Count: any;
  PrimeOrNot: any;
  constructor(private numObj: NumberService, private strObj: StringService) {
    console.log('Inside Child Component');
  }

  CheckPrime(num: any) {
    if (this.numObj.IsPrime(parseInt(num))) {
      this.PrimeOrNot = 'It is prime number';
    }
    else {
      this.PrimeOrNot = 'It is not a prime number';
    }
  }

  CountCapitalLetters(str: string) {
    this.Count = this.strObj.CountUpperCaseChars(str);
  }

}
