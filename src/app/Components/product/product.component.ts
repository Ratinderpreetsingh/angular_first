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
export class ProductComponent  {
 
  selectedTab:string = 'productlist';



  selectTab(tab:string):void{
    this.selectedTab = tab
  }
   
 
}
