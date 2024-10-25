import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule] // Include FormsModule here
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  rememberMe: boolean = false; // Don't forget to initialize rememberMe
  credtinals  =[
    {
      email:'superAdmin@gmail.com',
      password:'Test@12345',
      role:'superadmin'
    },
    {
      email:'admin@gmail.com',
      password:'Test@1234',
      role:'admin'

    },
    {
      email:'exceutive@gmail.com',
      password:'Test@1234',
      role:'exceutive'

    }
  ]
  constructor(private router: Router) {}

  redirectToForgot() {
    this.router.navigate(['auth/forgot']);
  }

  handleSubmit(event: Event) {
    event.preventDefault(); // Prevent default form submission
  debugger
    // Simple validation
    if (this.email && this.password) {
      // Find the matching credentials
      const user = this.credtinals.find(cred => cred.email === this.email && cred.password === this.password);
  
      if (user) {
        // Set login state and role in local storage
        localStorage.setItem('isLogin', 'true');
        localStorage.setItem('userRole', user.role); // Store the user's role
  
        // Redirect based on role
        switch (user.role) {
          case 'superadmin':
            this.router.navigate(['/main/dashboard']);
            break;
          case 'admin':
            this.router.navigate(['/main/dashboard']);
            break;
          case 'exceutive':
            this.router.navigate(['/main/dashboard']);
            break;
          default:
            alert('Unknown role');
        }
      } else {
        alert('Invalid email or password.');
      }
    } else {
      alert('Please fill in both email and password.');
    }
  }
  
}
