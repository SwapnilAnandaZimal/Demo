import { Component, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent 
{

  @Output()
  public emitter = new EventEmitter<any>();
  
  public SendDataToParent(data : any) : void
  {
    this.emitter.emit(data);
  }
}
