import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  product = {
    product_name: '',
    product_description: '',
    product_price: 0,
    product_category:'',
    product_subcategory:''
  };
addProduct(){
  console.log(this.product)
  this.product = {
    product_name: '',
    product_description: '',
    product_price: 0,
    product_category:'',
    product_subcategory:''
  };
}
}
