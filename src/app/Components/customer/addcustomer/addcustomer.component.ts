import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-addcustomer',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './addcustomer.component.html',
  styleUrl: './addcustomer.component.css'
})
export class AddcustomerComponent {
   customerData={
    customer_name:''
   }

   addCustomer(){
    console.log(this.customerData)
   }
}
