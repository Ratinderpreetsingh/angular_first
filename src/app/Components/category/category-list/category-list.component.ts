import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AddCategoryComponent } from '../add-category/add-category.component';
import { CategoryService } from '../../../Services/category/category.service';
import { Category } from '../../../models/category.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent {
   category:Category[] =[]
   constructor(private catgoryService:CategoryService){}

   ngOnInit():void{
    this.catgoryService.getAllCategoires().subscribe(
      (catgoories)=>{
        return this.category =catgoories
      },
      (error)=>{
        console.log(error)
      }
    )
   }
}
