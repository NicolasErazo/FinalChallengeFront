import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Clients } from './clients';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  private url:string="http://localhost:8090/v0/api/clients";

  constructor(private http:HttpClient) { }

  //Get clients
  getAllClients():Observable<Clients[]>{
    return this.http.get<Clients[]>(this.url);
  }

  //Create client
  createClient(client:Clients):Observable<Clients>{
    return this.http.post<Clients>(this.url, client);
  }

  //Get client by Id
  getClientById(id:number):Observable<Clients>{
    return this.http.get<Clients>(this.url+'/'+id);
  }

  //Update client
  updateClient(client:Clients):Observable<Clients>{
    return this.http.post<Clients>(this.url, client)
  }

  //Delete client
  deleteClientById(id:number):Observable<Clients>{
    console.log(id);
    return this.http.delete<Clients>(this.url+'/'+id)
  }

}
