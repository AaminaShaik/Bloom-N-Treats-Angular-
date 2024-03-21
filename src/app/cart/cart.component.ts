import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

interface CartItem {
  productId: number;
  productName: string;
  productPrice: number;
  quantity: number;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  totalAmount: number = 0;

  constructor(private cartService: CartService,private router:Router) {}

  ngOnInit(): void {
    this.loadCart();
  }

  loadCart(): void {
    this.cartItems = this.cartService.getCartItems();
    this.updateTotalAmount();
  }

  addToCart(product: CartItem): void {
    this.cartService.addToCart(product);
    this.loadCart();
  }

  removeFromCart(productId: number): void {
    this.cartService.removeFromCart(productId);
    this.loadCart();
  }

  increaseQuantity(item: CartItem): void {
    item.quantity++;
    this.cartService.updateCartItem(item);
    this.loadCart();
  }

  decreaseQuantity(item: CartItem): void {
    if (item.quantity > 0) {
      item.quantity--;
      this.cartService.updateCartItem(item);
      this.loadCart();
    }
  }

  updateTotalAmount(): void {
    this.totalAmount = this.cartItems.reduce((acc, item) => acc + item.productPrice * item.quantity, 0);
  }

  buyNow(): void {
    // Your buy now logic here
    this.router.navigate(['/header/order'])
  }
}




// import { Component, OnInit } from '@angular/core';
// import { CartService } from '../cart.service';

// @Component({
//   selector: 'app-cart',
//   templateUrl: './cart.component.html',
//   styleUrls: ['./cart.component.css']
// })
// export class CartComponent implements OnInit {

//   cartItems: any[] = [];

//   constructor(private cartService: CartService) {}

//   ngOnInit(): void {
//     this.cartItems = this.cartService.getCartItems();
//   }

//   removeFromCart(productId: number): void {
//     this.cartService.removeFromCart(productId);
//     this.cartItems = this.cartService.getCartItems();
//   }
// }

// import { Component, OnInit } from '@angular/core';

// interface CartItem {
//   id: number;
//   name: string;
//   newprice: number;
//   amount: number;
// }

// @Component({
//   selector: 'app-cart',
//   templateUrl: './cart.component.html',
//   styleUrls: ['./cart.component.css']
// })
// export class CartComponent implements OnInit {
//   cartItems: CartItem[] = [];

//   ngOnInit(): void {
//     // Initialize cart items here if needed
//   }

//   addToCart(product: CartItem): void {
//     const existingItem = this.cartItems.find(item => item.id === product.id);
//     if (existingItem) {
//       const updatedCart = this.cartItems.map(item =>
//         item.id === product.id ? { ...item, amount: item.amount + 1 } : item
//       );
//       this.setCartItems(updatedCart);
//     } else {
//       this.setCartItems([...this.cartItems, { ...product, amount: 1 }]);
//     }
//   }

//   removeCart(id: number): void {
//     const updatedCart = this.cartItems.filter(item => item.id !== id);
//     this.setCartItems(updatedCart);
//   }

//   QuantityChange(item: CartItem, increment: number): void {
//     const updatedCart = this.cartItems.map(cartItem => {
//       if (cartItem.id === item.id) {
//         const updatedAmount = Math.max(cartItem.amount + increment, 1);
//         return { ...cartItem, amount: updatedAmount };
//       }
//       return cartItem;
//     });

//     this.setCartItems(updatedCart);
//   }

//   getTotal(): number {
//     return this.cartItems.reduce((acc, item) => acc + item.amount * item.newprice, 0);
//   }

//   private setCartItems(items: CartItem[]): void {
//     this.cartItems = items;
//   }
// }
