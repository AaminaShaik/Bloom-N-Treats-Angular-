import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-best-of-cakes',
  templateUrl: './best-of-cakes.component.html',
  styleUrls: ['./best-of-cakes.component.css']
})
export class BestOfCakesComponent implements OnInit {
  productList: any[] = [];
  list: any[] = [];

  constructor(private service: ProductsService) {}

  ngOnInit(): void {
    this.getAllProductsBycategoryId();
  }

  getAllProductsBycategoryId(): void {
    this.service.getProductByCategoryId(4).subscribe((res: any) => { // Assuming category_id is 2 for 'BIRTHDAY'
      this.productList = res;
     // this.list = this.productList.filter(product => product.category_id === 2);
    });
  }
  addToCart(product: any) {
    alert("added to cart successfully");
    this.service.addToCart(product);
  }


}