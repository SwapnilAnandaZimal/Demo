import { Component,EventEmitter,Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  @Input()
  public ChildData : any ;

  @Output()
  public emitter = new EventEmitter();
  public SendMessage()
  {
    this.emitter.emit("Hello from child");
  }
}
