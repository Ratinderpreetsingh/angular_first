import { Component } from '@angular/core';
import { Customer } from '../../../models/customer.model';
import { CustomerService } from '../../../Services/customers/customer.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})
export class CustomerListComponent {

  CustomerList:Customer[] =[]
  constructor(private CustomerService:CustomerService){}
  
  ngOnInit():void{
    this.CustomerService.getAllCustomers().subscribe(
      (customers)=>{
        console.log(customers)
        return this.CustomerList =customers?.Customer
      },
      (error)=>{
        console.log(error)

      }
    )
  }
}
