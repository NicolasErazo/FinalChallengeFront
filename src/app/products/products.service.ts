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

  //Get Products by Client
  getAllProductsByClient(id:number):Observable<Products[]>{
    return this.http.get<Products[]>(this.url+'/'+id+'/products');
  }

  getAllProducts():Observable<Products[]>{
    return this.http.get<Products[]>('http://localhost:8090/v0/api/products');
  }

  //Create Product by Client
  createProduct(product:Products, id:number):Observable<Products>{
    return this.http.post<Products>(this.url+'/'+id+'/products/add', product);
  }

  //Get Product by clientId
  getProductOfClientById(idClient:number,idProduct:number):Observable<Products>{
    return this.http.get<Products>(this.url+'/'+idClient+'/products/'+idProduct);
  }

  //Update Product
  updateProduct(product:Products, id:number):Observable<Products>{
    return this.http.post<Products>(this.url+'/'+id+'/products/add', product)
  }

}
