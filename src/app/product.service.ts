// product.service.ts
import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Laptop', description: 'A high-performance laptop', price: 1000 },
    { id: 2, name: 'Smartphone', description: 'A latest model smartphone', price: 800 }
  ];

  private cart: Product[] = [];

  getProducts(): Product[] {
    return this.products;
  }

  addProduct(product: Product) {
    const newId = this.products.length + 1;
    this.products.push({ ...product, id: newId });
  }

  deleteProduct(id: number) {
    this.products = this.products.filter(product => product.id !== id);
    this.cart = this.cart.filter(product => product.id !== id);
  }

  addToCart(product: Product) {
    this.cart.push(product);
  }

  getCart(): Product[] {
    return this.cart;
  }

  clearCart() {
    this.cart = [];
  }
}
