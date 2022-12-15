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

  //Get Clients
  getAll():Observable<Clients[]>{
    return this.http.get<Clients[]>(this.url);
  }
}
