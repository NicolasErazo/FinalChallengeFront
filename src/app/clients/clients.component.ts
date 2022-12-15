import { Component, OnInit } from '@angular/core';
import { Clients } from './clients';
import { ClientsService } from './clients.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients:Clients[];

  constructor(private clientService: ClientsService){}

  ngOnInit(): void {
      this.clientService.getAll().subscribe(
        c => this.clients = c
      );
  }
}
