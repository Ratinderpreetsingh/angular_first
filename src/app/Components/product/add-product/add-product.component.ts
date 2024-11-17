import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../../Services/product/product.service';
import { CategoryService } from '../../../Services/category/category.service';
import { CommonModule } from '@angular/common';
import { SubcategoryService } from '../../../Services/subcategory/subcategory.service';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  @Input() selectTab!: (tab: string) => void;  // Receive selectTab method from parent

  imageUrl: string = 'https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg'
  product = {
    product_name: '',
    product_description: '',
    product_price: 0,
    product_category: '',
    product_subcategory: ''
  };

  catgoryList:any=[]
  subCatgoryList:any=[]


  constructor(
    private productService: ProductService,
    private categoryService:CategoryService,
    private subcategoryService:SubcategoryService


  
  ) { }
  // get ALL catgory
  ngOnInit():void{
    this.categoryService.getAllCategoires().subscribe(
     (cateory)=>{
       console.log(cateory)
       return this.catgoryList = cateory?.category
     }
    )

    this.subcategoryService.getAllSubcategory().subscribe(
      (subcateory)=>{
        console.log(subcateory)
        return this.subCatgoryList = subcateory?.subcategory
      }
     )
 }



  // add product
  addProduct() {
    console.log(this.product)
    this.productService.createProduct(this.product).subscribe({
      next: (productData) => {
        console.log(productData)
        console.log(this.selectTab)
        this.selectTab('productlist')
      },
      error: (err: any) => {
        console.log(err)
      }

    })
    this.product = {
      product_name: '',
      product_description: '',
      product_price: 0,
      product_category: '',
      product_subcategory: ''
    };
  }
// uploadmage
  uplaodImage(e: any) {
    console.log(e.target.files[0])
    const file = e.target.files[0]

    if (file) {

      const reader = new FileReader();
      reader.onload = () => {
        this.imageUrl = reader.result as string; // Set the imageUrl to the result from FileReader
      };
      reader.readAsDataURL(file);
    }
  }
}
