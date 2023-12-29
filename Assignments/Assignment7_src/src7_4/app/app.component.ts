import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Assignment7_4';
  public Name: string = "Marvellous Infosystems";
  public CaseChange(input: string): void {
    if (input == "upper") {
      this.Name =this.Name.toUpperCase();
    }
    else if(input == "lower")
    {
      this.Name = this.Name.toLowerCase();
    }
  }
}
