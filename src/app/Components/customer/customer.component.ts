import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CustomerListComponent } from "./customer-list/customer-list.component";
import { AddcustomerComponent } from "./addcustomer/addcustomer.component";

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [CommonModule, CustomerListComponent, AddcustomerComponent],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {
  selectedTab:string ='CustomerList'

  selectTab(tab:string){
     this.selectedTab = tab
  }
}
