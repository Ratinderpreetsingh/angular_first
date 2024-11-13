import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subcategory } from '../../models/subcategory.model';

@Injectable({
  providedIn: 'root'
})
export class SubcategoryService {
  private apiUrl =`http://localhost:3000/subcategory`
  constructor(private http:HttpClient) {}

  // get all subcategorues
  getAllSubcategory():Observable<Subcategory[]>{
    return this.http.get<Subcategory[]>(this.apiUrl)
  }
  
  // createSubCategores
  createSubCategory(subcategory:Subcategory):Observable<Subcategory[]>{
    return this.http.post<Subcategory[]>(this.apiUrl,subcategory)
  }
}
