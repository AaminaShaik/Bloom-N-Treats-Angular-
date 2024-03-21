import { Component } from '@angular/core';
//import { ProdService } from '../prod.service';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {
  //isLoggedIn:boolean=false;
  constructor(private service: CustomerService,private router:Router){
     service.setUserLogout()
     router.navigate(['login']);
  }
showLogout(){
  //this.isLoggedIn=true;
}

}
