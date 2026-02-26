import { Component, input, output } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductItemComponent } from '../product-item/product-item';

@Component({
  selector: 'app-product-list',
  template: `
    @if (products().length === 0) {
      <p>No products in this category</p>
    } @else {
      <div class="grid">
        @for (product of products(); track product.id) {
          <app-product-item
            [product]="product"
            (delete)="delete.emit(product.id)">
          </app-product-item>
        }
      </div>
    }
  `,
  standalone: true,
  imports: [ProductItemComponent]
})
export class ProductListComponent {

  products = input.required<Product[]>();

  delete = output<number>();
}
