import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductService } from '../../Services/product/product.service';
import { Product } from '../../models/product.model';
import { ProductListComponent } from './product-list/product-list.component';
import { AddProductComponent } from './add-product/add-product.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,ProductListComponent,AddProductComponent],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  errorMessage: string | null = null;
  selectedTab:string = 'productlist';

  constructor(private productService: ProductService) {}

  selectTab(tab:string):void{
    this.selectedTab = tab
  }
   
  ngOnInit(): void {
    this.fetchProducts();
  }

  private fetchProducts(): void {
    this.productService.getProducts().subscribe(
      (data: Product[]) => {
        this.products = data;
        console.log(this.products);
      },
      (error) => {
        this.errorMessage = 'Failed to load products';
        console.error('Error loading products:', error);
      }
    );
  }
}
