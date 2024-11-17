import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
private apiUrl ='http://localhost:4000/api/product'
  constructor(private http:HttpClient) { }

  getProducts():Observable<{message:'String',products:Product[]}>{
    return this.http.get<{message:'String',products:Product[]}>(`${this.apiUrl}/getAllProduct`)
  }

  createProduct(product:Product):Observable<Product[]>{
    return this.http.post<Product[]>(`${this.apiUrl}/createProduct`,product)
  }
}
