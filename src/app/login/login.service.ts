import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { login } from './login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url:string="http://localhost:8090/v0/api/login";

  constructor(private http:HttpClient) { }

    login(creds: login){
      return this.http.post(this.url, creds, {
        observe: 'response'
      }).pipe(map((response: HttpResponse<any>) => {
        const body = response.body;
        const headers = response.headers;

        const bearerToken = headers.get('Authorization')!;
        const token = bearerToken.replace('Bearer', '');

        localStorage.setItem('token', token);

        return body;
      }))
    }

    getToken(){
      return localStorage.getItem('token');
    }
}
