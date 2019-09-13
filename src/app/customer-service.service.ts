import { Injectable } from '@angular/core';
import { Customer } from './customer';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:4000/customers'
   }
   
   public findAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.url);
  }
 
  public save(cust: Customer) {
    return this.http.post<Customer>(this.url, cust);
  }

  // public printString(): Observable<string> {
  //   return this.http.get<string>(this.url);
  // }
  
}
