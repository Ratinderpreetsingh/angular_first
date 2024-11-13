import { Component } from '@angular/core';
import { Subcategory } from '../../../models/subcategory.model';
import { CommonModule } from '@angular/common';
import { SubcategoryService } from '../../../Services/subcategory/subcategory.service';
import { LoadingComponent } from '../../../Common/loading/loading.component';

@Component({
  selector: 'app-sub-category-list',
  standalone: true,
  imports: [CommonModule,LoadingComponent],
  templateUrl: './sub-category-list.component.html',
  styleUrl: './sub-category-list.component.css'
})
export class SubCategoryListComponent {
  subcategoryList:Subcategory[] =[]
  constructor(private subcategoryService:SubcategoryService){}
  
  ngOnInit():void{
    this.subcategoryService.getAllSubcategory().subscribe(
      (subcategories)=>{
        console.log(subcategories)
        return this.subcategoryList =subcategories
      },
      (error)=>{
        console.log(error)

      }
    )
  }

}
