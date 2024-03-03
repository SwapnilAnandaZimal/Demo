import { Injectable } from '@angular/core';
import { escape } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  constructor() { console.log("Inside number service") }

   IsPrime(num: number): boolean {
    if (num <= 1) return false;
    else if (num > 2) {

      // looping through 2 to number-1
      for (let i = 2; i < num; i++) {
          if (num % i == 0) {
              return false;
          }
      }}
      return true;
  
}
}
