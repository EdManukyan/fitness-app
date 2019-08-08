import {Component, OnInit} from '@angular/core';
import {Validators} from '@angular/forms';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public maxDate: Date;
  public signUpForm: FormGroup;

  constructor() {
  }

  ngOnInit() {
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);

    this.formInit();
  }

  public onSubmit() {
    console.log(this.signUpForm.value);
  }

  private formInit () {
    this.signUpForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required, Validators.min(5)]),
      birthDate: new FormControl('', [Validators.required]),
      terms: new FormControl('', [Validators.required]),
    });
  }

}
