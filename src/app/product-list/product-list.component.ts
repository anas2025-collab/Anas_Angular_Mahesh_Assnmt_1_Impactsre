/*

// product-list.component.ts
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  newProduct: Product = { id: 0, name: '', description: '', price: 0 };

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  addProduct() {
    this.productService.addProduct(this.newProduct);
    this.newProduct = { id: 0, name: '', description: '', price: 0 }; // Reset form
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id);
    this.products = this.productService.getProducts(); // Refresh the list
  }
}

*/



// product-list.component.ts
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  newProduct: Product = { id: 0, name: '', description: '', price: 0 };

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.refreshProducts();
  }

  refreshProducts() {
    this.products = this.productService.getProducts();
  }

  addProduct() {
    this.productService.addProduct(this.newProduct);
    this.newProduct = { id: 0, name: '', description: '', price: 0 }; // Reset form
    this.refreshProducts(); // Refresh the product list
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id);
    this.refreshProducts(); // Refresh the product list after deletion
  }
}
