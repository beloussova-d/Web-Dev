import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  template: `
    <div class="card">
      <a [href]="product.link" target="_blank">
        <img [src]="product.image" [alt]="product.name" class="product-image" />
      </a>
      <h3>{{ product.name }}</h3>
      <p>{{ product.description }}</p>
      <p class="price">{{ product.price }} KZT</p>
      <p class="rating">
        @for (star of stars; track $index) {
          <span>{{ star }}</span>
        }
        ({{ product.rating }})
      </p>
      <button (click)="share()">Share</button>
    </div>
  `,
  styleUrls: ['./product-card.component.css'],
  standalone: true,
})
export class ProductCardComponent {
  @Input() product!: Product;

  get stars() {
    const fullStars = Math.floor(this.product.rating);
    const halfStar = this.product.rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;
    return [
      ...Array(fullStars).fill('★'),
      ...Array(halfStar).fill('☆'), //⯪
      ...Array(emptyStars).fill('☆')
    ];
  }

  share() {
    const url = `https://wa.me/?text=${encodeURIComponent(
      `Check out this product: ${this.product.link}`
    )}`;
    window.open(url, '_blank');
  }
}
