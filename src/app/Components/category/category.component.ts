import { Component } from '@angular/core';
import { CategoryListComponent } from "./category-list/category-list.component";
import { AddCategoryComponent } from "./add-category/add-category.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CategoryListComponent, AddCategoryComponent,CommonModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  selectedTab:string ='Categorylist'

  selectTab(tab:string){
     this.selectedTab = tab
  }


}
