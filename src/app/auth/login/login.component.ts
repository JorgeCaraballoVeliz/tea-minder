import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor() {
    this.loginForm = new FormGroup({
      email: new FormControl("", [Validators.required]),
      contraseña: new FormControl("", [Validators.required])
    })
  }

  login() {
    console.log(this.loginForm.value)
  }
}
