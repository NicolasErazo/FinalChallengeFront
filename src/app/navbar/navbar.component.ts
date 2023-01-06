import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private router: Router) { } 

  destroyToken(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/home']);
    Swal.fire('You have closed session!', 'Come back soon!', 'success');
  }
  
}
