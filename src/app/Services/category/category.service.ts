import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl =`http://localhost:3000/category`
  constructor(private http:HttpClient) { }

  // get all categories
  getAllCategoires():Observable<Category[]>{
    return this.http.get<Category[]>(this.apiUrl)
  }


  // add categories
  createCategory(category:Category):Observable<Category[]>{
    console.log(category)
    return this.http.post<Category[]>(this.apiUrl,category)
  }
}
