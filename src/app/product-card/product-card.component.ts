
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product: Product | undefined;
  @Output() delete = new EventEmitter<number>(); // Event to delete product

  onDelete() {
    if (this.product) {
      this.delete.emit(this.product.id); // Emit product id to delete
    }
  }
}
