// import { Injectable } from '@angular/core';
// import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
// import { Observable } from 'rxjs';
// import { CustomerService } from './customer.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard implements CanActivate {
//   constructor(private customerService: CustomerService, private router: Router) {}

//   canActivate(
//     next: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
//     if (this.customerService.isLoggedIn()) {
//       return true;
//     } else {
//       this.router.navigate(['login']);
//       return false;
//     }
//   }
// }




import { Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CustomerService } from './customer.service';
@Injectable({
  providedIn:'root'
})
export class AuthGuard {

  constructor(private service: CustomerService,private router:Router) {}

  canActivate(): boolean {
    // Check if the user is logged in and return true
    if(this.service.getUserLoggedStatus()){
      return true;
    }

    // else navigate to login component and return false
    else{
      this.router.navigate(['login']);
      
      return false;
    }

  }

}

