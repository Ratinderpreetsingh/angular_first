import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLinkActive,RouterLink,CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
  userRole:  string |null = null

  ngOnInit(): void {
    this.userRole = localStorage.getItem("userRole")
  }

  isSuperadmin() :boolean{
    return this.userRole === 'superadmin';

  }

  isAdmin() :boolean{
    return this.userRole === 'admin';

  }

  isExceutive() :boolean{
    return this.userRole === 'exceutive';

  }
}
