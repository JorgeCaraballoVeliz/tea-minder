import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../data/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  //authservice: AuthService = inject(AuthService);
  loginForm: FormGroup;

  constructor(private authService: AuthService) {
    this.loginForm = new FormGroup({
      email: new FormControl("", [Validators.required]),
      contraseña: new FormControl("", [Validators.required])
    })
    //

  }

  login() {
    console.log(this.loginForm.value);
    //console.log(this.loginForm.value.email);
    this.authService.Login(this.loginForm.value.email, this.loginForm.value.contraseña)
  }
}
