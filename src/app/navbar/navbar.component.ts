import { Component } from '@angular/core';
import { Router } from '@angular/router';
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


