import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Clients } from '../clients/clients';
import { ClientsService } from '../clients/clients.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  client:Clients = new Clients();

  constructor(private clientService: ClientsService, private router:Router, private activatedRoute:ActivatedRoute ){}

  ngOnInit(): void {
    this.dates();
  }

  create():void{
    console.log(this.client);
    this.clientService.create(this.client).subscribe(
      res=>this.router.navigate(['/clients'])
    );
  }

  dates():void{
    this.activatedRoute.params.subscribe(
      e=>{
        let id=e['id'];
        if(id){
          this.clientService.getClientById(id).subscribe(
            r=>this.client=r
          );
        }
      }
    );
  }

  update():void{
    this.clientService.update(this.client).subscribe(
      res=>this.router.navigate(['/clients'])
    )
  }

}
