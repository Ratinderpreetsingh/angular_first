import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CategoryService } from '../../../Services/category/category.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-add-category',
  standalone: true,
  imports: [FormsModule,HttpClientModule],
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent {
  categoryData ={
    category_name:'',
    category_description:''
  };

  constructor(private categoryService:CategoryService){}
  addCategory(){
    console.log(this.categoryData)
    this.categoryService.createCategory(this.categoryData).subscribe({
      next:(categoryData)=>{
        console.log(categoryData)
      },
      error:(err:any)=>{
        console.log(err)
      }

    })

  }
}
