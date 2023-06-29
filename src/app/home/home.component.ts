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
    // if(!this.token){
    //   Swal.fire({
    //     position: 'center',
    //     icon: 'success',
    //     title: 'You have closed session!',
    //     showConfirmButton: false,
    //     timer: 1500
    //   })
    // }else {
    //   Swal.fire({
    //     position: 'center',
    //     icon: 'success',
    //     title: 'You are logged in!',
    //     showConfirmButton: false,
    //     timer: 1500
    //   })
    // }
  }

  token = this.loginService.getToken();

}
