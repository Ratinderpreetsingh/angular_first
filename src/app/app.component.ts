import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductComponent } from './Components/product/product.component';
import { HeaderComponent } from './Layout/header/header.component';
import { CategoryComponent } from './Components/category/category.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './Services/product/product.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HttpClientModule],
  providers: [ProductService],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pratice';
}
