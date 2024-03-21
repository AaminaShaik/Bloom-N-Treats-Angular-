
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  logout() {
    throw new Error('Method not implemented.');
  }
  isUserLoggedIn: boolean;
  private loggedIn = false; 

  constructor(private http : HttpClient) { 
    this.isUserLoggedIn=false;
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  setUserLoggedIn():any{
    this.isUserLoggedIn=true;
  }
  getUserLoggedStatus():boolean{
return this.isUserLoggedIn;
  }
  setUserLogout():any{
    this.isUserLoggedIn=false;
  }
    register(data:any){
      return this.http.post("http://localhost:8085/register",data);
    }
getAllCustomers(){
  return this.http.get("http://localhost:8085/getAllCustomers");
}


  
}