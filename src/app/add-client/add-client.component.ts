import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Clients } from '../clients/clients';
import { ClientsService } from '../clients/clients.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css'],
})
export class AddClientComponent implements OnInit {
  client: Clients = new Clients();

  constructor(
    private clientService: ClientsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.data();
  }

  create(): void {
    console.log(this.client);
    this.clientService.create(this.client).subscribe(
      (res) => {
        this.router.navigate(['/clients']),
          Swal.fire('Client Created!', 'Successful request!', 'success');
      },
      (err) => {
        // Entra aquí si el servicio entrega un código http de error EJ: 404,

        if (err.status == 500) {
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
    this.clientService.update(this.client).subscribe((res) => {
      this.router.navigate(['/clients']),
        Swal.fire('Client Updated!', 'Successful request!', 'success');
    });
  }
}
