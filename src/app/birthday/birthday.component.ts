// import { Component, OnInit } from '@angular/core';
// import { ProductsService } from '../products.service';

// @Component({
//   selector: 'app-birthday',
//   templateUrl: './birthday.component.html',
//   styleUrl: './birthday.component.css'
// })
// export class BirthdayComponent implements OnInit {
//   productList:any[]=[];
//   list:any[]=[];
//   ngOnInit(): void {
//     this.getAllProductsBycategoryId()
//   }
//   constructor ( private service:ProductsService){}
//   getAllProductsBycategoryId(item:any) {
//     this.service.getProductByCategoryId(item.category_id).subscribe((res: any) => {
     
//         this.productList = res;
//       if(this.productList.category_id==2){
//         this.list=this.productList
//       }
       
      
//     });
//   }
// }


import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-birthday',
  templateUrl: './birthday.component.html',
  styleUrls: ['./birthday.component.css'] // Note the correct property name 'styleUrls'
})
export class BirthdayComponent implements OnInit {
  productList: any[] = [];
  list: any[] = [];

  constructor(private service: ProductsService) {}

  ngOnInit(): void {
    this.getAllProductsBycategoryId();
  }

  getAllProductsBycategoryId(): void {
    this.service.getProductByCategoryId(3).subscribe((res: any) => { // Assuming category_id is 2 for 'BIRTHDAY'
      this.productList = res;
     // this.list = this.productList.filter(product => product.category_id === 2);
    });
  }
  addToCart(product: any) {
    alert("added to cart successfully");
    this.service.addToCart(product);
  }
}

