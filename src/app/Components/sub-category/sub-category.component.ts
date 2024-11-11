import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SubCategoryListComponent } from './sub-category-list/sub-category-list.component';
import { AddSubCategoryComponent } from './add-sub-category/add-sub-category.component';

@Component({
  selector: 'app-sub-category',
  standalone: true,
  imports: [CommonModule,SubCategoryListComponent,AddSubCategoryComponent],
  templateUrl: './sub-category.component.html',
  styleUrl: './sub-category.component.css'
})
export class SubCategoryComponent {
  selectedTab:string = 'subcategorylist'
  selectTab(tab:string):void{
    this.selectedTab = tab
  }
}
