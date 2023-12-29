import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `<h1> Using inline template and styles </h1> <h1 class = "color">Marvellous Infosystems</h1>
  <label for = "name">Name :</label>
  <input type = "text" id = "name">
  <router-outlet></router-outlet>`,
  styles: `.color{
    color: blue;
}`
})
export class AppComponent {
  title = 'Assignment6_3';
}
