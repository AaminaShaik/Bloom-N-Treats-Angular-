import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-gift-hamper',
  templateUrl: './gift-hamper.component.html',
  styleUrl: './gift-hamper.component.css'
})
export class GiftHamperComponent implements OnInit {
  productList: any[] = [];
  list: any[] = [];

  constructor(private service: ProductsService) {}

  ngOnInit(): void {
    this.getAllProductsBycategoryId();
  }

  getAllProductsBycategoryId(): void {
    this.service.getProductByCategoryId(7).subscribe((res: any) => { // Assuming category_id is 2 for 'BIRTHDAY'
      this.productList = res;
     // this.list = this.productList.filter(product => product.category_id === 2);
    });
  }
  addToCart(product: any) {
    alert("added to cart successfully");
    this.service.addToCart(product);
  }
}


