import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, Validators ,ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers :[FormBuilder]
})
export class AppComponent {
  title = 'ReactiveForm';

  public constructor(private formBuilder:FormBuilder)
  {

  }
  LoginForm = this.formBuilder.group({
    Name     :['',[Validators.required,Validators.pattern("^[a-zA-Z]+$")]],
    Email    :['',[Validators.required,Validators.email]],
    PhoneNumber    :['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
    Address    :['',[Validators.required,Validators.minLength(30)]]
  })

  LogData(){ 
    console.log(this.LoginForm);
  }
}
