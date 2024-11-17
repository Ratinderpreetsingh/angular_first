import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl =`http://localhost:4000/api/category`
  constructor(private http:HttpClient) { }

  // get all categories
  getAllCategoires():Observable<{message:'String',category:Category[]}>{
    return this.http.get<{message:'String',category:Category[]}>(`${this.apiUrl}/getAllCategory`)
  }


  // add categories
  createCategory(category:Category):Observable<Category[]>{
    console.log(category)
    return this.http.post<Category[]>(`${this.apiUrl}/createCategory`,category)
  }
}
