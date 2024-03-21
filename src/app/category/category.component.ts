import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
 products$:Observable<any>;
constructor(private prodService:ProductsService){
this.products$=this.prodService.getCategory().pipe(
  map((item:any)=>{
    return item;
  })
);
}

}