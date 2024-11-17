import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../../models/customer.model';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private apiUrl =`http://localhost:4000/api/customer/get`

  constructor(private http:HttpClient) { }

  getAllCustomers():Observable<{message:'String',Customer:Customer[]}>{
    return this.http.get<{message:'String',Customer:Customer[]}>(this.apiUrl)
  }
}
