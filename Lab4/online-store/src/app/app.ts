import { Component } from '@angular/core';
import { ProductListComponent } from './components/product-list/product-list.component';

@Component({
  selector: 'app-root',
  template: `
    <h1>Online Store</h1>
    <app-product-list></app-product-list>
  `,
  imports: [ProductListComponent],
})
export class App {}
