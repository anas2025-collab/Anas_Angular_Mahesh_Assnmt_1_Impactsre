/*

// cart.component.ts
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.cart = this.productService.getCart();
  }

  clearCart() {
    this.productService.clearCart();
    this.cart = [];
  }
}

*/



// cart.component.ts
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart = this.productService.getCart();

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.refreshCart();
  }

  refreshCart() {
    this.cart = this.productService.getCart();
  }

  clearCart() {
    this.productService.clearCart();
    this.refreshCart(); // Refresh the cart view after clearing it
  }
}
