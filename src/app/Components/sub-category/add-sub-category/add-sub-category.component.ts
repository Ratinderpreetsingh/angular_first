import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-sub-category',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-sub-category.component.html',
  styleUrl: './add-sub-category.component.css'
})
export class AddSubCategoryComponent {
    subCategoryData={
      subcategory_name :'',
      subcategory_description:'',
      category_id:''

      
    }
    addsubCategory(){
      console.log(this.subCategoryData)
    }
}
