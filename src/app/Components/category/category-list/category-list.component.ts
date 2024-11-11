import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AddCategoryComponent } from '../add-category/add-category.component';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent {

}
