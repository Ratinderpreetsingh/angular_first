import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subcategory } from '../../models/subcategory.model';

@Injectable({
  providedIn: 'root'
})
export class SubcategoryService {
  private apiUrl =`http://localhost:4000/api/subcategory`
  constructor(private http:HttpClient) {}

  // get all subcategorues
  getAllSubcategory():Observable<{message:'String',subcategory:Subcategory[]}>{
    return this.http.get<{message:'String',subcategory:Subcategory[]}>(`${this.apiUrl}/getSubCategory`)
  }
  
  // createSubCategores
  createSubCategory(subcategory:Subcategory):Observable<Subcategory[]>{
    return this.http.post<Subcategory[]>(`${this.apiUrl}/createSubCategory`,subcategory)
  }
}
