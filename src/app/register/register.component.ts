
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  customerData: any = {};

  constructor(private router: Router, private customerService: CustomerService) {}

  registerCustomer(registerForm: any): void {
    if (registerForm.valid) {
      // If the form is valid, proceed with registration
      this.customerService.register(this.customerData).subscribe(
        (response) => {
          // Handle successful registration
          alert("Registration Successful");
          console.log('Registration successful:', response);
          this.router.navigate(['/header/login']);
        },
        (error) => {
          // Handle registration failure
          alert("Registration Failed");
          console.error('Registration failed:', error);
        }
      );
    } else {
      // If the form is invalid, display error messages
      alert("Please fill in all required fields correctly.");
    }
  }
}




















// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { CustomerService } from '../customer.service';

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css']
// })
// export class RegisterComponent implements OnInit{
// model:any;
// customerData:any={};
// ngOnInit(): void {
//   // this.http.register().subscribe((data:any)=>{
//   //   this.cust=data;
//   // })
// }
// constructor(private router:Router,private customerService:CustomerService){

// }
// registerCustomer(registerForm:any):void{
//   this.customerService.register(this.customerData).subscribe((response) => {
//     // Handle response data here, if needed
//     //this.customerData = data;
//     alert("Regitration Successfull")
//     console.log('Registration successful:', response);
//     this.router.navigate(['/header/login'])

//     // Redirect or perform any other actions after successful registration
//     // Example:
//     // this.router.navigate(['/dashboard']);
//   }, (error) => {
//     // Handle error responses here, if needed
//     alert("Registration failed")
//     console.error('Registration failed:', error);
//   });
  
// }
// }
