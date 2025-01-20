import { Component } from '@angular/core';

import { Product } from '../product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: Product[] = [
    { id: 1, name: 'Laptop', description: 'A high-performance laptop', price: 1000 },
    { id: 2, name: 'Smartphone', description: 'A latest model smartphone', price: 800 }
  ];

  // New product data to be added
  newProduct: Product = { id: 0, name: '', description: '', price: 0 };

  addProduct() {
    const newId = this.products.length + 1;
    this.products.push({ ...this.newProduct, id: newId });
    this.newProduct = { id: 0, name: '', description: '', price: 0 }; // Reset form
  }

  deleteProduct(id: number) {
    this.products = this.products.filter(product => product.id !== id);
  }
}
