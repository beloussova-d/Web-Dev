import { Component, input, output } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  template: `
    <div class="card">
      <img [src]="product().image" [alt]="product().name" />

      <h3>{{ product().name }}</h3>
      <p>{{ product().description }}</p>
      <p>{{ product().price }} KZT</p>
      <p>⭐ {{ product().rating }}</p>

      <p>❤ {{ product().likes }}</p>

      <button (click)="like()">Like</button>
      <button (click)="share()">Share</button>
      <button (click)="delete.emit()">Delete</button>
    </div>
  `,
  standalone: true
})
export class ProductItemComponent {

  product = input.required<Product>();
  delete = output<void>();

  like() {
    this.product().likes++;
  }

  share() {
    const url = `https://wa.me/?text=${encodeURIComponent(
      `Check this product: ${this.product().link}`
    )}`;
    window.open(url, '_blank');
  }
}
