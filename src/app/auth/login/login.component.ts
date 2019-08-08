import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public logInForm: FormGroup;

  constructor() {
  }

  ngOnInit() {
    this.formInit();
  }

  public onSubmit() {
    console.log(this.logInForm.value);
  }

  private formInit () {
    this.logInForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required, Validators.min(5)]),
    });
  }
}
