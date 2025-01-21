// product-card.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product: Product | undefined;
  @Output() delete = new EventEmitter<number>();

  constructor(private productService: ProductService) { }

  onDelete() {
    if (this.product) {
      this.delete.emit(this.product.id);
    }
  }

  addToCart() {
    if (this.product) {
      this.productService.addToCart(this.product);
    }
  }
}
