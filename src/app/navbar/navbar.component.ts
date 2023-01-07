import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { HomeComponent } from '../home/home.component';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private router: Router, private loginService: LoginService) { }

  token = this.loginService.getToken();

  destroyToken(): void {
    localStorage.removeItem('token');
    window.location.replace('/home');
  }

}


