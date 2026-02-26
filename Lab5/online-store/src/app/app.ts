import { Component, signal } from '@angular/core';
import { ProductService } from './product.service';
import { ProductListComponent } from './components/product-list/product-list.component';
import { Category } from './models/category.model';

@Component({
  selector: 'app-root',
  template: `
    <h1>Online Store</h1>

    <div class="categories">
      @for (cat of categories; track cat.id) {
        <button
          (click)="selectCategory(cat)"
          [class.active]="selectedCategory()?.id === cat.id">
          {{ cat.name }}
        </button>
      }
    </div>

    @if (selectedCategory()) {
      <app-product-list
        [products]="filteredProducts()"
        (delete)="removeProduct($event)">
      </app-product-list>
    } @else {
      <p>Please select a category</p>
    }
  `,
  standalone: true,
  imports: [ProductListComponent]
})
export class App {

  private service = new ProductService();

  categories = this.service.categories;

  selectedCategory = signal<Category | null>(null);

  filteredProducts = signal([]);

  selectCategory(category: Category) {
    this.selectedCategory.set(category);
    this.filteredProducts.set(
      this.service.getProductsByCategory(category.id)
    );
  }

  removeProduct(productId: number) {
    this.filteredProducts.update(list =>
      list.filter(p => p.id !== productId)
    );
  }

}
