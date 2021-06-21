import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tdform',
  templateUrl: './tdform.component.html',
  styleUrls: ['./tdform.component.css']
})
export class TdformComponent implements OnInit {
  defaultQuestion = 'teacher';
  answer = '';
  user = {
    username : '',
    email : '',
    secret : '',
    answer : ''
  };
  formSubmitted:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

  onFormSubmit(form:NgForm) {
    console.log(form);
    this.formSubmitted = true;
    this.user.username = form.value.username;
    this.user.email = form.value.email;
    this.user.secret = form.value.secret;
    this.user.answer = form.value.answer;
  }
}
