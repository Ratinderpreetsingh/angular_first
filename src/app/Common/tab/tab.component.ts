import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
interface Tab {
  label: string;
  value: string;
}
@Component({
  selector: 'app-tab',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tab.component.html',
  styleUrl: './tab.component.css'
})
export class TabComponent {
  selectedTab:string=''
  @Input() tabs: Tab[] = []; // Define proper typing for the input

  onTabClick(value:string){
    this.selectedTab = value
  }
}
