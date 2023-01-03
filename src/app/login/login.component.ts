import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { login } from './login';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginDates: login = {
    email: '',
    password: ''
  };

  constructor(private router: Router, private loginService: LoginService) {}

  loginUser(form: NgForm) {
    console.log('form value', form.value);
    
    this.loginService.login(this.loginDates)
    .subscribe(response => {
      this.router.navigate(['/home'])
    })
  }
}
