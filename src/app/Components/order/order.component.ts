import { Component } from '@angular/core';
import { TabComponent } from '../../Common/tab/tab.component';
import { OrderListComponent } from "./order-list/order-list.component";
import { AddOrderComponent } from "./add-order/add-order.component";

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [TabComponent, OrderListComponent, AddOrderComponent],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {
  tabs=[
    {
      label:'Order List ',
      value:'orderList'
    },
    {
      label:'Add Order ',
      value:'addOrder'
    },
    {
      label:'Edit Order ',
      value:'editOrder'
    }
  ]
}
