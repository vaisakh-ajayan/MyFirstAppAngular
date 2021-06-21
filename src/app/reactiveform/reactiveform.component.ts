import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  genders = ['male', 'female'];
  constructor() { }
  signupForm:FormGroup;

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      usr:new FormControl(null, Validators.required),
      email:new FormControl(null, [Validators.required, Validators.email]),
      gender:new FormControl('male')
    });
  }

  onFormSubmit(){
    console.log(this.signupForm);
  }

}
