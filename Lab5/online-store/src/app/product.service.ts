import { Injectable } from '@angular/core';
import { Category } from './models/category.model';
import { Product } from './models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  categories: Category[] = [
    { id: 1, name: 'Clothes' },
    { id: 2, name: 'Shoes' },
    { id: 3, name: 'Laptops' },
    { id: 4, name: 'Household appliances' }
  ];

  products: Product[] = [
    // 5 per category (placeholders)

    // Clothes (categoryId: 1)
    { id: 1, name: 'Пуховик BTN button черный', description: 'Пуховик BTN button 1111 — стильный и тёплый выбор для холодных зимних дней.', price: 70900, rating: 5, image: 'https://resources.cdn-kaspi.kz/img/m/p/p87/p65/75195503.jpeg?format=gallery-large', images: ['','',''], link: 'https://kaspi.kz/shop/p/puhovik-btn-button-1111-chernyi-46-148795379/', likes: 0, categoryId: 1  },
    { id: 2, name: 'Зимняя куртка adidas черный', description: 'Зимняя куртка adidas IX3081 — это идеальный выбор для тех, кто ценит комфорт и стиль в холодное время года.', price: 26990, rating: 4.8, image: 'https://resources.cdn-kaspi.kz/img/m/p/p3c/pbe/55358927.jpg?format=gallery-large', images: ['','',''], link: 'https://kaspi.kz/shop/p/zimnjaja-kurtka-adidas-ix3081-chernyi-m-143170669', likes: 0, categoryId: 1 },
    { id: 3, name: 'Рубашка синий', description: 'Женская синяя рубашка.', price: 9749, rating: 5, image: 'https://resources.cdn-kaspi.kz/img/m/p/pdc/pce/82959107.jpeg?format=gallery-large', images: ['','',''], link: 'https://kaspi.kz/shop/p/rubashka-30359431-937682602-sinii-42-151055520/', likes: 0, categoryId: 1 },
    { id: 4, name: 'Блузка BULLY белый', description: 'Блузка BULLY — это стильный выбор для создания элегантного образа.', price: 6999, rating: 4.5, image: 'https://resources.cdn-kaspi.kz/img/m/p/p30/p15/70652581.jpeg?format=gallery-large', images: ['','',''], link: 'https://kaspi.kz/shop/p/bluzka-bully-bully-belyi-48-147401839/', likes: 0, categoryId: 1 },
    { id: 5, name: 'Спортивные брюки adidas черный', description: 'Спортивные брюки Adidas IU2519 — символ стиля и комфорта, идеально подходящие для активного образа жизни.', price: 37990, rating: 4.9, image: 'https://resources.cdn-kaspi.kz/img/m/p/h95/hd1/85092617977886.jpg?format=gallery-large', images: ['','',''], link: 'https://kaspi.kz/shop/p/sportivnye-brjuki-adidas-iu2519-chernyi-l-116427751', likes: 0, categoryId: 1 },

    // Shoes (2)
    { id: 6, name: 'Кроссовки SF Collection коричневый', description: 'Кроссовки SF Collection коричневый', price: 20800, rating: 5.0, image: 'https://resources.cdn-kaspi.kz/img/m/p/ped/pa2/98554203.jpg?format=gallery-large', images: ['','',''], link: 'https://kaspi.kz/shop/p/krossovki-sf-collection-sf-35417-korichnevyi-36-155327294/', likes: 0, categoryId: 2 },
    { id: 7, name: 'STROBBS F7205-25', description: 'STROBBS F7205-25', price: 30790, rating: 5.0, image: 'https://resources.cdn-kaspi.kz/img/m/p/hec/h58/82765552582686.jpg?format=gallery-large', images: ['','',''], link: 'https://kaspi.kz/shop/p/strobbs-f7205-25-bezhevyi-36-112485177', likes: 0, categoryId: 2 },
    { id: 8, name: 'Лоферы молочный', description: 'Женские лоферы на низком каблуке с лаковым покрытием', price: 26990, rating: 0, image: 'https://resources.cdn-kaspi.kz/img/m/p/p53/pa4/100286005.png?format=gallery-large', images: ['','',''], link: 'https://kaspi.kz/shop/p/lofery-852-195-molochnyi-40-155758238', likes: 0, categoryId: 2 },
    { id: 9, name: 'Туфли Fabio Rusconi синий', description: 'Туфли Fabio Rusconi синий', price: 86220, rating: 5.0, image: 'https://resources.cdn-kaspi.kz/img/m/p/p4f/pe6/55616359.jpeg?format=gallery-large', images: ['','',''], link: 'https://kaspi.kz/shop/p/tufli-fabio-rusconi-832238bolgheriz23-sinii-37-5-143213954', likes: 0, categoryId: 2 },
    { id: 10, name: 'Тапочки Veloria розовый', description: 'Домашние тапочки Veloria Crossover', price: 3950, rating: 5.0, image: 'https://resources.cdn-kaspi.kz/img/m/p/p88/pd7/98511763.jpeg?format=gallery-large', images: ['','',''], link: 'https://kaspi.kz/shop/p/tapochki-veloria-crossover-rozovyi-41-40-155318199', likes: 0, categoryId: 2 },

    // Laptops (3)
    { id: 11, name: 'Laptop 1', description: 'Description', price: 300000, rating: 4.9, image: '#', images: ['','',''], link: '#', likes: 0, categoryId: 3 },
    { id: 12, name: 'Laptop 2', description: 'Description', price: 280000, rating: 4.6, image: '#', images: ['','',''], link: '#', likes: 0, categoryId: 3 },
    { id: 13, name: 'Laptop 3', description: 'Description', price: 250000, rating: 4.3, image: '#', images: ['','',''], link: '#', likes: 0, categoryId: 3 },
    { id: 14, name: 'Laptop 4', description: 'Description', price: 320000, rating: 4.8, image: '#', images: ['','',''], link: '#', likes: 0, categoryId: 3 },
    { id: 15, name: 'Laptop 5', description: 'Description', price: 270000, rating: 4.4, image: '#', images: ['','',''], link: '#', likes: 0, categoryId: 3 },

    // Household appliances (4)
    { id: 16, name: 'Appliance 1', description: 'Description', price: 70000, rating: 4.1, image: '#', images: ['','',''], link: '#', likes: 0, categoryId: 4 },
    { id: 17, name: 'Appliance 2', description: 'Description', price: 85000, rating: 4.3, image: '#', images: ['','',''], link: '#', likes: 0, categoryId: 4 },
    { id: 18, name: 'Appliance 3', description: 'Description', price: 65000, rating: 3.9, image: '#', images: ['','',''], link: '#', likes: 0, categoryId: 4 },
    { id: 19, name: 'Appliance 4', description: 'Description', price: 92000, rating: 4.5, image: '#', images: ['','',''], link: '#', likes: 0, categoryId: 4 },
    { id: 20, name: 'Appliance 5', description: 'Description', price: 78000, rating: 4.0, image: '#', images: ['','',''], link: '#', likes: 0, categoryId: 4 },
  ];

  getProductsByCategory(categoryId: number) {
    return this.products.filter(p => p.categoryId === categoryId);
  }
}
