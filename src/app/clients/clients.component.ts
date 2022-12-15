import { Component, OnInit } from '@angular/core';
import { Products } from '../products/products';
import { ProductsService } from '../products/products.service';
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

  delete(client:Clients):void{
    this.clientService.deleteClientById(client.id).subscribe(
      res=>this.clientService.getAll().subscribe(
        response=>this.clients=response
      )
    );
  }

}
