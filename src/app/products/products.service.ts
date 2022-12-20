import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private url:string="http://localhost:8090/v0/api/clients";

  constructor(private http:HttpClient) { }

  //Get clients
  getAllProductsByClient(id:number):Observable<Products[]>{
    return this.http.get<Products[]>(this.url+'/'+id+'/products');
  }

  //Create client
  createProduct(product:Products, id:number):Observable<Products>{
    return this.http.post<Products>(this.url+'/'+id+'/products/add', product);
  }

  //Get client by Id
  getProductOfClientById(id:number):Observable<Products>{
    return this.http.get<Products>(this.url+'/'+id);
  }

  //Update client
  update(product:Products):Observable<Products>{
    return this.http.post<Products>(this.url, product)
  }

}
