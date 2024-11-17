import { Component } from '@angular/core';
import { ProductService } from '../../../Services/product/product.service';
import { Product } from '../../../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: Product[] = [];

  constructor(private productService: ProductService) {}
  ngOnInit(): void {
    this.fetchProducts();
  }

  private fetchProducts(): void {
    this.productService.getProducts().subscribe(
      (data) => {
        this.products = data?.products;
        console.log(this.products);
      },
      (error) => {
        console.error('Error loading products:', error);
      }
    );
  }
}
