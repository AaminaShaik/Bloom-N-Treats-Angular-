import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {
  customers$:Observable<any>;
  constructor(private custService:CustomerService){
  this.customers$=this.custService.getAllCustomers().pipe(
    map((item:any)=>{
      return item;
    })
  );
  }
}