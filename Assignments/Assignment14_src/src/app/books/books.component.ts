import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {

  public books : string[] = [
    'ng-book','Node.js: Novice to Ninja',
    'Android Programming: The Big Nerd Ranch Guide','Big Data For Dummies',' Make Your Own Neural Network By Tariq Rashid'
  ]
}
