import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(private loginService: LoginService){
  }

  ngOnInit(): void {
    if(!this.token){
      Swal.fire('You have closed session!', 'Come back soon!', 'success');
    }else {
      Swal.fire('You are logged in!', 'Welcome!', 'success');
    }
  }

  token = this.loginService.getToken();

}
