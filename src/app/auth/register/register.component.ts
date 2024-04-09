import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  registerForm: FormGroup;

  constructor() {
    this.registerForm = new FormGroup({
      email: new FormControl("", [Validators.required]),
      nombre: new FormControl("", [Validators.required, Validators.minLength(2)]),
      contraseña: new FormControl("", [Validators.required, Validators.minLength(8)])
    })
  }

  register() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
    }
  }
}
