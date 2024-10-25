import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { RouterOutlet } from '@angular/router';
import { ForgotComponent } from '../forgot/forgot.component';

@Component({
  selector: 'app-auth-common',
  standalone: true,
  imports: [RouterOutlet,LoginComponent,ForgotComponent],
  templateUrl: './auth-common.component.html',
  styleUrl: './auth-common.component.css'
})
export class AuthCommonComponent {

}
