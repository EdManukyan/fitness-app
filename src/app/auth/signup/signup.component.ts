import {Component, OnInit} from '@angular/core';
import {NgForm, Validators} from '@angular/forms';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signUpForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required, Validators.min(5)]),
  });

  constructor() {
  }

  ngOnInit() {
  }

  public onSubmit() {
    console.log(this.signUpForm.value);
  }

}
