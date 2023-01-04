import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Clients } from '../clients/clients';
import { ClientsService } from '../clients/clients.service';
import { Login } from '../login/login';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css'],
})
export class AddClientComponent implements OnInit {
  client: Clients = new Clients();
  users: Login[];

  constructor(
    private clientService: ClientsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private userService: LoginService
  ) {}

  ngOnInit(): void {
    this.data();
    this.userService.getUsers().subscribe((c) => (this.users = c));
  }

  create(): void {
    console.log(this.client);
    console.log(this.client.userCreator);
    this.clientService.createClient(this.client).subscribe(
      (res) => {
        this.router.navigate(['/clients']),
          Swal.fire('Client Created!', 'Successful request!', 'success');
      },
      (err) => {
        // Entra aquí si el servicio entrega un código http de error EJ: 404,

        if (err.status == 403) {
          Swal.fire('¡Incorrect Information!', 'Fill all the fields', 'error');
        }

        if (err.status == 400) {
          Swal.fire('You must be of legal age!', 'Ok?', 'error');
        }
      }
    );
  }

  data(): void {
    this.activatedRoute.params.subscribe((e) => {
      let id = e['id'];
      if (id) {
        this.clientService
          .getClientById(id)
          .subscribe((r) => (this.client = r));
      }
    });
  }

  update(): void {
    if(this.client.userModifier != null){
      this.clientService.updateClient(this.client).subscribe((res) => {
        this.router.navigate(['/clients']),
          Swal.fire('Client Updated!', 'Successful request!', 'success');
      });
    }else{
      Swal.fire('¡Incorrect Information!', 'Fill all the fields', 'error');
    }
  }
}
