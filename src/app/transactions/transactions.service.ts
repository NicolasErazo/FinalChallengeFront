import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transactions } from './transactions';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  private url:string="http://localhost:8090/v0/api/transactions";

  constructor(private http:HttpClient) { }

  //Get clients
  getAllTransactionsByProduct(id:number):Observable<Transactions[]>{
    return this.http.get<Transactions[]>(this.url+'/'+id);
  }

  //Create client
  createTransaction(transaction:Transactions, id:number):Observable<Transactions>{
    return this.http.post<Transactions>(this.url+'/'+id+'/add', transaction);
  }
}
