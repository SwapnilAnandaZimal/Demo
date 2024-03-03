import { Component } from '@angular/core';
import { StringService } from '../string.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css',
  providers : [StringService]
})
export class Child2Component
{
  Count : any ;
  constructor(private obj :StringService )
  {
    console.log("Inside Child2 component");
  }

  CheckCount(str : string)
  {
    this.Count = this.obj.CountUpperCaseChars(str);
  }
}
