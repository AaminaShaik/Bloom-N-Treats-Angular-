import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-indoor-plants',
  templateUrl: './indoor-plants.component.html',
  styleUrls: ['./indoor-plants.component.css']
})
export class IndoorPlantsComponent implements OnInit {
  productList: any[] = [];
  list: any[] = [];

  constructor(private service: ProductsService) {}

  ngOnInit(): void {
    this.getAllProductsBycategoryId();
  }

  getAllProductsBycategoryId(): void {
    this.service.getProductByCategoryId(8).subscribe((res: any) => { // Assuming category_id is 2 for 'BIRTHDAY'
      this.productList = res;
     // this.list = this.productList.filter(product => product.category_id === 2);
    });
  }
  addToCart(product: any) {
    alert("added to cart successfully");
    this.service.addToCart(product);
  }

}
