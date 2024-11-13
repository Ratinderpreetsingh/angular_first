import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CategoryService } from '../../../Services/category/category.service';
import { CommonModule } from '@angular/common';
import { SubcategoryService } from '../../../Services/subcategory/subcategory.service';

@Component({
  selector: 'app-add-sub-category',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './add-sub-category.component.html',
  styleUrl: './add-sub-category.component.css'
})
export class AddSubCategoryComponent {
    subCategoryData={
      subcategory_name :'',
      subcategory_description:'',
      category_id:''
    }
    catgoryList:any=[]
    constructor(
      private categoryService:CategoryService,
      private subCategoService:SubcategoryService
    
    ){}

    ngOnInit():void{
       this.categoryService.getAllCategoires().subscribe(
        (cateory)=>{
          console.log(cateory)
          return this.catgoryList = cateory
        }
       )
    }
    addsubCategory(){
      console.log(this.subCategoryData)
      this.subCategoService.createSubCategory(this.subCategoryData).subscribe({
        next:(subcategoryData)=>{
          console.log(subcategoryData)
        },
        error:(err:any)=>{
          console.log(err)
        }
      })
    }
}
