import { Component, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { login } from './login';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent{
  loginDates: login = {
    email: '',
    password: ''
  };

  constructor(private router: Router, private loginService: LoginService) { }

  loginUser(form: NgForm) {
    console.log('form value', form.value);

    this.loginService.login(this.loginDates)
      .subscribe(response => {
        this.router.navigate(['/home'])
        Swal.fire('You are logged in!', 'Successful request!', 'success');
      })
  }

  destroyToken(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/home']);
    Swal.fire('You have closed session!', 'Successful request!', 'success');
  }
  
}
