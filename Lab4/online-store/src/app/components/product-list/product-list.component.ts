import { Component } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  template: `
    <div class="grid">
      @for(product of products; track product.id) {
        <app-product-card [product]="product"></app-product-card>
      }
    </div>
  `,
  styleUrls: ['./product-list.component.css'],
  standalone: true,
  imports: [ProductCardComponent],
})
export class ProductListComponent {
  products: Product[] = [
    { id: 1, name: 'Пуховик BTN button черный', description: 'Пуховик BTN button 1111 — стильный и тёплый выбор для холодных зимних дней.', price: 70900, rating: 5, image: 'https://resources.cdn-kaspi.kz/img/m/p/p87/p65/75195503.jpeg?format=gallery-large', images: ['','',''], link: 'https://kaspi.kz/shop/p/puhovik-btn-button-1111-chernyi-46-148795379/' },
    { id: 2, name: 'Зимняя куртка adidas черный', description: 'Зимняя куртка adidas IX3081 — это идеальный выбор для тех, кто ценит комфорт и стиль в холодное время года.', price: 26990, rating: 4.8, image: 'https://resources.cdn-kaspi.kz/img/m/p/p3c/pbe/55358927.jpg?format=gallery-large', images: ['','',''], link: 'https://kaspi.kz/shop/p/zimnjaja-kurtka-adidas-ix3081-chernyi-m-143170669' },
    { id: 3, name: 'Рубашка синий', description: 'Женская синяя рубашка.', price: 9749, rating: 5, image: 'https://resources.cdn-kaspi.kz/img/m/p/pdc/pce/82959107.jpeg?format=gallery-large', images: ['','',''], link: 'https://kaspi.kz/shop/p/rubashka-30359431-937682602-sinii-42-151055520/' },
    { id: 4, name: 'Блузка BULLY белый', description: 'Блузка BULLY — это стильный выбор для создания элегантного образа.', price: 6999, rating: 4.5, image: 'https://resources.cdn-kaspi.kz/img/m/p/p30/p15/70652581.jpeg?format=gallery-large', images: ['','',''], link: 'https://kaspi.kz/shop/p/bluzka-bully-bully-belyi-48-147401839/' },
    { id: 5, name: 'Спортивные брюки adidas черный', description: 'Спортивные брюки Adidas IU2519 — символ стиля и комфорта, идеально подходящие для активного образа жизни.', price: 37990, rating: 4.9, image: 'https://resources.cdn-kaspi.kz/img/m/p/h95/hd1/85092617977886.jpg?format=gallery-large', images: ['','',''], link: 'https://kaspi.kz/shop/p/sportivnye-brjuki-adidas-iu2519-chernyi-l-116427751' },
    { id: 6, name: 'Кроссовки SF Collection коричневый', description: 'Кроссовки SF Collection коричневый', price: 20800, rating: 5.0, image: 'https://resources.cdn-kaspi.kz/img/m/p/ped/pa2/98554203.jpg?format=gallery-large', images: ['','',''], link: 'https://kaspi.kz/shop/p/krossovki-sf-collection-sf-35417-korichnevyi-36-155327294/' },
    { id: 7, name: 'STROBBS F7205-25', description: 'STROBBS F7205-25', price: 30790, rating: 5.0, image: 'https://resources.cdn-kaspi.kz/img/m/p/hec/h58/82765552582686.jpg?format=gallery-large', images: ['','',''], link: 'https://kaspi.kz/shop/p/strobbs-f7205-25-bezhevyi-36-112485177' },
    { id: 8, name: 'Лоферы молочный', description: 'Женские лоферы на низком каблуке с лаковым покрытием', price: 26990, rating: 0, image: 'https://resources.cdn-kaspi.kz/img/m/p/p53/pa4/100286005.png?format=gallery-large', images: ['','',''], link: 'https://kaspi.kz/shop/p/lofery-852-195-molochnyi-40-155758238' },
    { id: 9, name: 'Туфли Fabio Rusconi синий', description: 'Туфли Fabio Rusconi синий', price: 86220, rating: 5.0, image: 'https://resources.cdn-kaspi.kz/img/m/p/p4f/pe6/55616359.jpeg?format=gallery-large', images: ['','',''], link: 'https://kaspi.kz/shop/p/tufli-fabio-rusconi-832238bolgheriz23-sinii-37-5-143213954' },
    { id: 10, name: 'Тапочки Veloria розовый', description: 'Домашние тапочки Veloria Crossover', price: 3950, rating: 5.0, image: 'https://resources.cdn-kaspi.kz/img/m/p/p88/pd7/98511763.jpeg?format=gallery-large', images: ['','',''], link: 'https://kaspi.kz/shop/p/tapochki-veloria-crossover-rozovyi-41-40-155318199' },
  ];
}
