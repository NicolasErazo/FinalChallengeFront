import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { LoginService } from '../login/login.service';

import { Clients } from './clients';
import { ClientsService } from './clients.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
})
export class ClientsComponent implements OnInit {
  clients: Clients[];

  constructor(private clientService: ClientsService, private loginService: LoginService) {}

  ngOnInit(): void {
    this.clientService.getAllClients().subscribe((c) => { 
      this.clients = c 
      if(this.clients.length<=0){
        Swal.fire({
          position: 'center',
          icon: 'question',
          title: 'No registered customers!',
          showConfirmButton: false,
          timer: 1500
        })
      }
    });
  }



  delete(client: Clients): void {
    this.clientService.deleteClientById(client.id).subscribe(
      (res) => {
        this.clientService.getAllClients().subscribe((response) => {
          (this.clients = response),
            Swal.fire('Client Deleted!', 'Successful request!', 'success');
        });
      },
      (err) => {
        console.log(err);
        // Entra aquí si el servicio entrega un código http de error EJ: 404,

        if (err.status == 403) {
          Swal.fire('¡Cannot delete a customer with active products!','Ok?','error');
        }
      }
    );
  }
}
