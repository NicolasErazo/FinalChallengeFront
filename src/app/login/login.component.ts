import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ClientsComponent } from '../clients/clients.component';
import { Login } from './login';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent{

  loginDates: Login = {
    email: '',
    password: ''
  };

  constructor(private router: Router, private loginService: LoginService) { } 

  token = this.loginService.getToken();

  loginUser(form: NgForm) {
    console.log('form value', form.value);

    this.loginService.login(this.loginDates)
      .subscribe(response => {
        window.location.replace('/home');
      }, (err) =>{
        if (err.status == 403) {
          Swal.fire('Enter allowed parameters!', 'Ok?', 'error');
        }
      })
  }

}
